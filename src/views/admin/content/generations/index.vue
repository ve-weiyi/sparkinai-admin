<template>
  <div class="app-container">
    <el-card>
      <!-- 搜索区域 -->
      <el-form :model="queryParams" :inline="true" class="mb-4">
        <el-form-item label="用户手机号">
          <el-input
            v-model="queryParams.userId"
            placeholder="请输入用户手机号"
            clearable
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item label="产品名称">
          <el-input
            v-model="queryParams.productName"
            placeholder="请输入产品名称"
            clearable
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">
            <el-icon><Search /></el-icon>
            搜索
          </el-button>
          <el-button @click="resetQuery">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 操作按钮 -->
      <div class="mb-4">
        <el-button
          type="danger"
          :disabled="!multipleSelection.length"
          @click="handleBatchDelete"
        >
          <el-icon><Delete /></el-icon>
          批量删除
        </el-button>
        <el-button type="success" @click="handleExport">
          <el-icon><Download /></el-icon>
          导出数据
        </el-button>
      </div>

      <!-- 数据表格 -->
      <el-table
        v-loading="loading"
        :data="contentList"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="user.phone" label="用户手机号" width="120" />
        <el-table-column prop="productName" label="产品名称" width="150" />
        <el-table-column prop="description" label="产品描述" width="200" show-overflow-tooltip />
        <el-table-column label="生成文案" width="300">
          <template #default="{ row }">
            <div class="copy-preview">
              <div v-if="row.copyResult" class="text-sm">
                {{ row.copyResult.substring(0, 100) }}...
              </div>
              <el-button
                v-if="row.copyResult"
                type="text"
                size="small"
                @click="viewCopyDetail(row)"
              >
                查看详情
              </el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="生成图片" width="120">
          <template #default="{ row }">
            <div v-if="row.imageUrls">
              <el-button type="text" size="small" @click="viewImages(row)">
                查看图片 ({{ JSON.parse(row.imageUrls || '[]').length }})
              </el-button>
            </div>
            <span v-else class="text-gray-400">无图片</span>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="180">
          <template #default="{ row }">
            {{ formatDate(row.createdAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120" fixed="right">
          <template #default="{ row }">
            <el-button
              type="text"
              size="small"
              class="text-red-500"
              @click="handleDelete(row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="flex justify-center mt-4">
        <el-pagination
          v-model:current-page="queryParams.page"
          v-model:page-size="queryParams.size"
          :total="total"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="getList"
          @current-change="getList"
        />
      </div>
    </el-card>

    <!-- 文案详情对话框 -->
    <el-dialog v-model="copyDialogVisible" title="文案详情" width="60%">
      <div v-if="selectedContent" class="space-y-4">
        <div>
          <h4 class="font-medium mb-2">产品信息</h4>
          <p><strong>产品名称：</strong>{{ selectedContent.productName }}</p>
          <p><strong>产品描述：</strong>{{ selectedContent.description }}</p>
        </div>
        <div>
          <h4 class="font-medium mb-2">生成文案</h4>
          <div class="bg-gray-50 p-4 rounded whitespace-pre-wrap">
            {{ selectedContent.copyResult }}
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- 图片预览对话框 -->
    <el-dialog v-model="imageDialogVisible" title="生成图片" width="80%">
      <div v-if="selectedImages.length" class="grid grid-cols-3 gap-4">
        <div
          v-for="(url, index) in selectedImages"
          :key="index"
          class="aspect-square"
        >
          <img
            :src="url"
            class="w-full h-full object-cover rounded cursor-pointer"
            @click="previewImage(url)"
          />
        </div>
      </div>
    </el-dialog>

    <!-- 图片大图预览 -->
    <el-image-viewer
      v-if="previewVisible"
      :url-list="[previewUrl]"
      @close="previewVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search, Refresh, Delete, Download } from '@element-plus/icons-vue'
import {
  getContentList,
  deleteContent,
  batchDeleteContent,
  exportContentData,
  type ContentGeneration
} from '@/api/content'

// 响应式数据
const loading = ref(false)
const contentList = ref<ContentGeneration[]>([])
const total = ref(0)
const multipleSelection = ref<ContentGeneration[]>([])
const dateRange = ref<[string, string]>(['', ''])

const queryParams = reactive({
  page: 1,
  size: 20,
  userId: '',
  productName: '',
  startDate: '',
  endDate: ''
})

const copyDialogVisible = ref(false)
const imageDialogVisible = ref(false)
const selectedContent = ref<ContentGeneration | null>(null)
const selectedImages = ref<string[]>([])

const previewVisible = ref(false)
const previewUrl = ref('')

// 方法
const getList = async () => {
  loading.value = true
  try {
    if (dateRange.value[0] && dateRange.value[1]) {
      queryParams.startDate = dateRange.value[0]
      queryParams.endDate = dateRange.value[1]
    }
    
    const res = await getContentList(queryParams)
    contentList.value = res.data.list
    total.value = res.data.total
  } catch (error) {
    console.error('获取列表失败:', error)
    ElMessage.error('获取列表失败')
  } finally {
    loading.value = false
  }
}

const handleQuery = () => {
  queryParams.page = 1
  getList()
}

const resetQuery = () => {
  queryParams.page = 1
  queryParams.userId = ''
  queryParams.productName = ''
  queryParams.startDate = ''
  queryParams.endDate = ''
  dateRange.value = ['', '']
  getList()
}

const handleSelectionChange = (selection: ContentGeneration[]) => {
  multipleSelection.value = selection
}

const handleDelete = async (row: ContentGeneration) => {
  try {
    await ElMessageBox.confirm('确定要删除这条记录吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    
    await deleteContent(row.id)
    ElMessage.success('删除成功')
    getList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('删除失败:', error)
      ElMessage.error('删除失败')
    }
  }
}

const handleBatchDelete = async () => {
  try {
    await ElMessageBox.confirm(`确定要删除选中的 ${multipleSelection.value.length} 条记录吗？`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    
    const ids = multipleSelection.value.map(item => item.id)
    await batchDeleteContent(ids)
    ElMessage.success('批量删除成功')
    getList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('批量删除失败:', error)
      ElMessage.error('批量删除失败')
    }
  }
}

const handleExport = async () => {
  try {
    const params = {
      startDate: queryParams.startDate,
      endDate: queryParams.endDate,
      userId: queryParams.userId
    }
    
    const response = await exportContentData(params)
    
    const blob = new Blob([response.data])
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `content-generations-${new Date().getTime()}.xlsx`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    ElMessage.success('导出成功')
  } catch (error) {
    console.error('导出失败:', error)
    ElMessage.error('导出失败')
  }
}

const viewCopyDetail = (row: ContentGeneration) => {
  selectedContent.value = row
  copyDialogVisible.value = true
}

const viewImages = (row: ContentGeneration) => {
  try {
    selectedImages.value = JSON.parse(row.imageUrls || '[]')
    imageDialogVisible.value = true
  } catch (error) {
    ElMessage.error('图片数据格式错误')
  }
}

const previewImage = (url: string) => {
  previewUrl.value = url
  previewVisible.value = true
}

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleString('zh-CN')
}

// 生命周期
onMounted(() => {
  getList()
})
</script>

<style scoped>
.copy-preview {
  max-height: 80px;
  overflow: hidden;
}
</style>