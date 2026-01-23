<template>
  <div class="app-container">
    <page-search ref="searchRef" :search-config="searchConfig" @query-click="handleQueryClick"
                 @reset-click="handleResetClick"/>
    <page-content ref="contentRef" :content-config="contentConfig" @add-click="handleAddClick"
                  @edit-click="handleEditClick" @search-click="handleSearchClick" @filter-change="handleFilterChange"/>
    <page-modal ref="addModalRef" :modal-config="addModalConfig" @submit-click="handleSubmitClick"/>
    <page-modal ref="editModalRef" :modal-config="editModalConfig" @submit-click="handleSubmitClick"/>
  </div>
</template>

<script setup lang="ts">
import usePage from "@/components/CURD/usePage";
import PageSearch from "@/components/CURD/PageSearch.vue";
import PageContent from "@/components/CURD/PageContent.vue";
import PageModal from "@/components/CURD/PageModal.vue";
import searchConfig from "./config/search";
import contentConfig from "./config/content";
import addModalConfig from "./config/add";
import editModalConfig from "./config/edit";

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
  handleSearchClick,
  handleFilterChange
} = usePage();
</script>
