<template>
  <div class="h-full">
    <PageSearch
      :search-config="searchConfig"
      @search-click="handleSearchClick"
      @reset-click="handleResetClick"
    />
    <PageContent
      ref="contentRef"
      :content-config="contentConfig"
      @add-click="handleAddClick"
      @edit-click="handleEditClick"
      @export-click="handleExportClick"
      @search-click="handleSearchClick"
      @toolbar-click="handleToolbarClick"
      @operate-click="handleOperateClick"
      @filter-change="handleFilterChange"
    />
    <PageModal ref="addModalRef" :modal-config="addConfig" @submit-click="handleSubmitClick" />
    <PageModal ref="editModalRef" :modal-config="editConfig" @submit-click="handleSubmitClick" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from "@/components/CURD/PageSearch.vue";
import PageContent from "@/components/CURD/PageContent.vue";
import PageModal from "@/components/CURD/PageModal.vue";
import searchConfig from "./config/search";
import contentConfig from "./config/content";
import addConfig from "./config/add";
import editConfig from "./config/edit";
import usePage from "@/components/CURD/usePage";
import { ApikeyAPI } from "@/api/apikey";
import { ElMessage } from "element-plus";
import type { IOperateData } from "@/components/CURD/types";

const {
  searchRef,
  contentRef,
  addModalRef,
  editModalRef,
  handleQueryClick,
  handleResetClick,
  handleAddClick,
  handleEditClick,
  handleSubmitClick,
  handleExportClick,
  handleSearchClick,
  handleFilterChange,
} = usePage();

function handleToolbarClick(name: string) {
  console.log(name);
}

// 处理自定义操作
const handleOperateClick = async (data: IOperateData) => {
  switch (data.name) {
    case "test":
      try {
        const loading = ElMessage({
          type: "info",
          message: "正在测试API Key...",
          duration: 0,
        });
        const res = await ApikeyAPI.testApiKey({ id: data.row.id });
        loading.close();
        if (res.data.success) {
          ElMessage.success(`测试成功，延迟: ${res.data.latency}ms`);
        } else {
          ElMessage.error(`测试失败: ${res.data.message}`);
        }
      } catch (error) {
        console.error(error);
      }
      break;
    case "edit":
      handleEditClick(data.row);
      break;
  }
};
</script>
