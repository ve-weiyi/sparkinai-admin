<template>
  <div class="app-container">
    <!-- 搜索 -->
    <page-search
      ref="searchRef"
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />

    <!-- 列表 -->
    <page-content
      ref="contentRef"
      :content-config="contentConfig"
      @add-click="handleAddClick"
      @edit-click="handleEditClick"
      @export-click="handleExportClick"
      @search-click="handleSearchClick"
      @toolbar-click="handleToolbarClick"
      @operate-click="handleOperateClick"
      @filter-change="handleFilterChange"
    >
      <template #user_info="scope">
        <UserInfo :user="scope.row.user_info" />
      </template>
      <template #client_info="scope">
        <ClientInfo :client="scope.row.client_info" />
      </template>
      <template #status="scope">
        <el-tag v-if="scope.row.status === 1" type="success">成功</el-tag>
        <el-tag v-else type="danger">失败</el-tag>
      </template>
      <template #request_body="scope">
        <el-button link type="primary" @click="showJson(scope.row.request_body, '请求体')">查看</el-button>
      </template>
      <template #response_body="scope">
        <el-button link type="primary" @click="showJson(scope.row.response_body, '响应体')">查看</el-button>
      </template>
    </page-content>

    <!-- JSON 查看器 -->
    <el-dialog
      v-model="jsonDialogVisible"
      :title="jsonDialogTitle"
      width="60%"
      top="5vh"
    >
      <div class="json-viewer-container">
        <JsonViewer :value="jsonData" :expand-depth="3" copyable boxed sort />
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IOperateData } from "@/components/CURD/types";
import usePage from "@/components/CURD/usePage";
import contentConfig from "./config/content";
import searchConfig from "./config/search";
import PageSearch from "@/components/CURD/PageSearch.vue";
import PageContent from "@/components/CURD/PageContent.vue";
import UserInfo from "@/components/UserInfo/index.vue";
import ClientInfo from "@/components/ClientInfo/index.vue";
import { JsonViewer } from "vue3-json-viewer";
import "vue3-json-viewer/dist/vue3-json-viewer.css";

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

function handleOperateClick(data: IOperateData) {
  console.log(data);
}

const jsonDialogVisible = ref(false);
const jsonDialogTitle = ref("");
const jsonData = ref<any>(null);

function showJson(jsonStr: string, title: string) {
  try {
    jsonData.value = JSON.parse(jsonStr);
  } catch {
    jsonData.value = jsonStr;
  }
  jsonDialogTitle.value = title;
  jsonDialogVisible.value = true;
}
</script>

<style scoped>
.json-viewer-container {
  height: 60vh;
  overflow-y: auto;
}
</style>
