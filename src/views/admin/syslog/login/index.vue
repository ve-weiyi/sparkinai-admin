<template>
  <div class="h-full">
    <PageSearch
      :search-config="searchConfig"
      @search-click="handleSearchClick"
      @reset-click="handleResetClick"
    />
    <PageContent ref="contentRef" :content-config="contentConfig">
      <template #status="{ row }">
        <el-tag v-if="row.status === 1" type="success">成功</el-tag>
        <el-tag v-else type="danger">失败</el-tag>
      </template>
    </PageContent>
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
