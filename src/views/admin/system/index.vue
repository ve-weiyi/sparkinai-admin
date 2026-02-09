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
        <el-tag :type="row.is_encrypted ? 'success' : 'info'">
          {{ row.is_encrypted ? "是" : "否" }}
        </el-tag>
      </template>
    </PageContent>
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
import type { IOperateData } from "@/components/CURD/types";

const {
  contentRef,
  addModalRef,
  editModalRef,
  handleSearchClick,
  handleResetClick,
  handleAddClick,
  handleEditClick,
  handleSubmitClick,
} = usePage();

function handleToolbarClick(name: string) {
  console.log(name);
}

const handleOperateClick = async (data: IOperateData) => {
  switch (data.name) {
    case "edit":
      handleEditClick(data.row);
      break;
  }
};
</script>
