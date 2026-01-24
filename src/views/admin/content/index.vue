<template>
  <div class="app-container">
    <page-search ref="searchRef" :search-config="searchConfig" @query-click="handleQueryClick"
                 @reset-click="handleResetClick"/>
    <page-content ref="contentRef" :content-config="contentConfig" @add-click="handleAddClick"
                  @edit-click="handleEditClick" @search-click="handleSearchClick" @operate-click="handleOperateClick"
                  @filter-change="handleFilterChange"/>
    <page-modal ref="editModalRef" :modal-config="editModalConfig" @submit-click="handleSubmitClick"/>
    
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
        <div v-for="(url, index) in selectedImages" :key="index" class="aspect-square">
          <img :src="url" class="w-full h-full object-cover rounded cursor-pointer" @click="previewImage(url)"/>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import usePage from "@/components/CURD/usePage";
import PageSearch from "@/components/CURD/PageSearch.vue";
import PageContent from "@/components/CURD/PageContent.vue";
import PageModal from "@/components/CURD/PageModal.vue";
import searchConfig from "./config/search";
import contentConfig from "./config/content";
import editModalConfig from "./config/edit";
import { ref } from 'vue';

const {
  searchRef,
  contentRef,
  editModalRef,
  handleQueryClick,
  handleResetClick,
  handleAddClick,
  handleEditClick,
  handleSubmitClick,
  handleSearchClick,
  handleFilterChange
} = usePage();

const copyDialogVisible = ref(false);
const imageDialogVisible = ref(false);
const selectedContent = ref(null);
const selectedImages = ref([]);

function handleOperateClick(data: any) {
  if (data.name === "viewCopy") {
    selectedContent.value = data.row;
    copyDialogVisible.value = true;
  } else if (data.name === "viewImages") {
    try {
      selectedImages.value = JSON.parse(data.row.imageUrls || '[]');
      imageDialogVisible.value = true;
    } catch (error) {
      ElMessage.error('图片数据格式错误');
    }
  }
}

function previewImage(url: string) {
  window.open(url, '_blank');
}
</script>