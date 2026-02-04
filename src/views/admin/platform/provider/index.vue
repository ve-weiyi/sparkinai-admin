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
      @toolbar-click="handleToolbarClick"
    />
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
</script>
