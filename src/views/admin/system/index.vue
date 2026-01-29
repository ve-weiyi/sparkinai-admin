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
      @operate-click="handleOperateClick"
      @toolbar-click="handleToolbarClick"
    >
      <template #is_encrypted="{ row }">
        <el-tag :type="row.is_encrypted ? 'success' : 'info'">{{ row.is_encrypted ? '是' : '否' }}</el-tag>
      </template>
    </PageContent>
    <PageModal
      ref="modalRef"
      :modal-config="modalConfig"
      @submit-click="handleSubmitClick"
    />
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
import { usePage } from "@/hooks/usePage";
import type { IOperateData } from "@/components/CURD/types";

const {
  contentRef,
  modalRef,
  modalConfig,
  handleSearchClick,
  handleResetClick,
  handleAddClick,
  handleEditClick,
  handleSubmitClick,
  handleToolbarClick
} = usePage(addConfig, editConfig);

const handleOperateClick = async (data: IOperateData) => {
  if (data.name === "edit") {
    handleEditClick(data.row);
  }
};
</script>
