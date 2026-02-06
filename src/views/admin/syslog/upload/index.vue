<template>
  <div class="h-full">
    <PageSearch
      :search-config="searchConfig"
      @search-click="handleSearchClick"
      @reset-click="handleResetClick"
    />
    <PageContent ref="contentRef" :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from "@/components/CURD/PageSearch.vue";
import PageContent from "@/components/CURD/PageContent.vue";
import searchConfig from "./config/search";
import contentConfig from "./config/content";
import usePage from "@/components/CURD/usePage";

const { contentRef, handleSearchClick, handleResetClick } = usePage();
</script>
