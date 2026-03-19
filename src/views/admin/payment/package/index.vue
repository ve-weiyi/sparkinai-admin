<template>
  <div class="app-container">
    <!-- 搜索栏 -->
    <el-card class="search-card" shadow="never">
      <el-form :inline="true" :model="queryParams">
        <el-form-item label="状态">
          <el-select
            v-model="queryParams.status"
            placeholder="请选择状态"
            clearable
            style="width: 150px"
          >
            <el-option label="全部" :value="null" />
            <el-option label="上架" :value="1" />
            <el-option label="下架" :value="0" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">
            <el-icon><Search /></el-icon>
            查询
          </el-button>
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 操作栏 -->
    <el-card class="toolbar-card" shadow="never">
      <el-button type="primary" @click="handleAdd">
        <el-icon><Plus /></el-icon>
        新增套餐
      </el-button>
    </el-card>

    <!-- 表格 -->
    <el-card shadow="never">
      <el-table v-loading="loading" :data="packageList" border stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="package_name" label="套餐名称" min-width="150" />
        <el-table-column prop="credits" label="套餐积分" width="100" align="right" />
        <el-table-column prop="amount" label="套餐金额" width="120">
          <template #default="{ row }">
            <span class="text-price">¥{{ row.amount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="original_amount" label="原价" width="120">
          <template #default="{ row }">
            <span class="text-muted">¥{{ row.original_amount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" min-width="200" show-overflow-tooltip />
        <el-table-column prop="features" label="特性" min-width="200">
          <template #default="{ row }">
            <el-tag v-for="(feature, index) in row.features" :key="index" size="small" style="margin-right: 4px">
              {{ feature }}
            </el-tag>
            <span v-if="!row.features || row.features.length === 0">-</span>
          </template>
        </el-table-column>
        <el-table-column prop="is_hot" label="热门" width="80" align="center">
          <template #default="{ row }">
            <el-tag :type="row.is_hot ? 'danger' : 'info'" size="small">
              {{ row.is_hot ? "是" : "否" }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status_text" label="状态" width="100" align="center">
          <template #default="{ row }">
            <el-tag :type="row.status === 1 ? 'success' : 'info'" size="small">
              {{ getStatusText(row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="sort_order" label="排序" width="80" align="center" />
        <el-table-column label="操作" width="180" fixed="right" align="center">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleEdit(row)">编辑</el-button>
            <el-button link type="danger" size="small" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        v-model:current-page="queryParams.page"
        v-model:page-size="queryParams.page_size"
        :total="total"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleQuery"
        @current-change="handleQuery"
        class="mt-4"
      />
    </el-card>

    <!-- 新增/编辑对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle"
      width="600px"
      @close="handleDialogClose"
    >
      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="100px">
        <el-form-item label="套餐名称" prop="package_name">
          <el-input v-model="formData.package_name" placeholder="请输入套餐名称" />
        </el-form-item>
        <el-form-item label="套餐积分" prop="credits">
          <el-input-number
            v-model="formData.credits"
            :min="0"
            :step="1"
            placeholder="请输入套餐积分"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="套餐金额" prop="amount">
          <el-input-number
            v-model="formData.amount"
            :min="0"
            :precision="2"
            :step="1"
            placeholder="请输入套餐金额"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="原价" prop="original_amount">
          <el-input-number
            v-model="formData.original_amount"
            :min="0"
            :precision="2"
            :step="1"
            placeholder="请输入原价"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="套餐描述" prop="description">
          <el-input
            v-model="formData.description"
            type="textarea"
            :rows="3"
            placeholder="请输入套餐描述"
          />
        </el-form-item>
        <el-form-item label="套餐特性" prop="features">
          <el-input
            v-model="featuresInput"
            type="textarea"
            :rows="3"
            placeholder="请输入套餐特性，每行一个"
          />
          <div style="color: #909399; font-size: 12px; margin-top: 4px">
            每行输入一个特性，例如：每月 1000 个积分
          </div>
        </el-form-item>
        <el-form-item label="是否热门" prop="is_hot">
          <el-switch v-model="formData.is_hot" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="formData.status">
            <el-radio :label="1">上架</el-radio>
            <el-radio :label="0">下架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排序" prop="sort_order">
          <el-input-number
            v-model="formData.sort_order"
            :min="0"
            :step="1"
            placeholder="请输入排序值"
            style="width: 100%"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit" :loading="submitLoading">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { ElMessage, ElMessageBox, type FormInstance, type FormRules } from "element-plus";
import { Plus, Refresh, Search } from "@element-plus/icons-vue";
import type {
  CreateRechargePackageReq,
  GetRechargePackageListReq,
  RechargePackageItem,
  UpdateRechargePackageReq,
} from "@/api";
import { PaymentPackageAPI } from "@/api";
import { RechargePackageStatus, RechargePackageStatusText } from "@/enums";

// 查询参数
const queryParams = reactive<GetRechargePackageListReq>({
  page: 1,
  page_size: 20,
  status: null,
});

// 表格数据
const loading = ref(false);
const packageList = ref<RechargePackageItem[]>([]);
const total = ref(0);

// 对话框
const dialogVisible = ref(false);
const dialogTitle = ref("");
const submitLoading = ref(false);
const formRef = ref<FormInstance>();

// 表单数据
const formData = reactive<CreateRechargePackageReq & { id?: number }>({
  package_name: "",
  credits: 0,
  amount: 0,
  original_amount: 0,
  description: "",
  features: [],
  is_hot: false,
  status: 1,
  sort_order: 0,
});

// Features 输入框（用于编辑，每行一个特性）
const featuresInput = ref("");

// 表单验证规则
const formRules: FormRules = {
  package_name: [{ required: true, message: "请输入套餐名称", trigger: "blur" }],
  amount: [{ required: true, message: "请输入套餐金额", trigger: "blur" }],
  original_amount: [{ required: true, message: "请输入原价", trigger: "blur" }],
};

// 获取列表
const getList = async () => {
  loading.value = true;
  try {
    const res = await PaymentPackageAPI.getRechargePackageList(queryParams);
    packageList.value = res.data.list || [];
    total.value = res.data.total || 0;
  } catch (error) {
    ElMessage.error("获取套餐列表失败");
  } finally {
    loading.value = false;
  }
};

// 查询
const handleQuery = () => {
  queryParams.page = 1;
  getList();
};

// 重置
const handleReset = () => {
  queryParams.page = 1;
  queryParams.page_size = 20;
  queryParams.status = null;
  getList();
};

// 新增
const handleAdd = () => {
  dialogTitle.value = "新增套餐";
  resetForm();
  dialogVisible.value = true;
};

// 编辑
const handleEdit = (row: RechargePackageItem) => {
  dialogTitle.value = "编辑套餐";
  Object.assign(formData, {
    id: row.id,
    package_name: row.package_name,
    credits: row.credits,
    amount: row.amount,
    original_amount: row.original_amount,
    description: row.description,
    is_hot: row.is_hot,
    status: row.status,
    sort_order: row.sort_order,
  });
  // 将 features 数组转换为多行文本
  featuresInput.value = (row.features || []).join('\n');
  dialogVisible.value = true;
};

// 删除
const handleDelete = (row: RechargePackageItem) => {
  ElMessageBox.confirm(`确定要删除套餐"${row.package_name}"吗？`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      try {
        await PaymentPackageAPI.deleteRechargePackage({ id: row.id });
        ElMessage.success("删除成功");
        getList();
      } catch (error) {
        ElMessage.error("删除失败");
      }
    })
    .catch(() => {});
};

// 提交表单
const handleSubmit = async () => {
  if (!formRef.value) return;

  await formRef.value.validate(async (valid) => {
    if (!valid) return;

    submitLoading.value = true;
    try {
      // 将 featuresInput 转换为数组
      const features = featuresInput.value
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

      if (formData.id) {
        // 编辑
        const updateData: UpdateRechargePackageReq = {
          id: formData.id,
          package_name: formData.package_name,
          credits: formData.credits,
          amount: formData.amount,
          original_amount: formData.original_amount,
          description: formData.description,
          features: features,
          is_hot: formData.is_hot,
          status: formData.status,
          sort_order: formData.sort_order,
        };
        await PaymentPackageAPI.updateRechargePackage(updateData);
        ElMessage.success("更新成功");
      } else {
        // 新增
        const createData: CreateRechargePackageReq = {
          ...formData,
          features: features,
        };
        await PaymentPackageAPI.createRechargePackage(createData);
        ElMessage.success("创建成功");
      }
      dialogVisible.value = false;
      getList();
    } catch (error) {
      ElMessage.error(formData.id ? "更新失败" : "创建失败");
    } finally {
      submitLoading.value = false;
    }
  });
};

// 关闭对话框
const handleDialogClose = () => {
  formRef.value?.resetFields();
  resetForm();
};

// 获取状态文本
const getStatusText = (status: number): string => {
  return RechargePackageStatusText[status as RechargePackageStatus] || '未知状态';
};

// 重置表单
const resetForm = () => {
  Object.assign(formData, {
    id: undefined,
    package_name: "",
    credits: 0,
    amount: 0,
    original_amount: 0,
    description: "",
    features: [],
    is_hot: false,
    status: 1,
    sort_order: 0,
  });
  featuresInput.value = "";
};

// 初始化
onMounted(() => {
  getList();
});
</script>

<style scoped lang="scss">
.app-container {
  padding: 20px;
}

.search-card,
.toolbar-card {
  margin-bottom: 16px;
}

.text-price {
  color: #f56c6c;
  font-weight: bold;
}

.text-muted {
  color: #909399;
  text-decoration: line-through;
}

.mt-4 {
  margin-top: 16px;
}
</style>
