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
      @operate-click="handleOperateClick"
      @toolbar-click="handleToolbarClick"
    >
      <template #user_info="scope">
        <UserInfo :user="scope.row.user_info" />
      </template>
      <template #status="{ row }">
        <el-tag v-if="row.status === GenerationStatusEnum.SUCCESS" type="success">成功</el-tag>
        <el-tag v-else-if="row.status === GenerationStatusEnum.FAILED" type="danger">失败</el-tag>
        <el-tag v-else type="warning">进行中</el-tag>
      </template>
      <template #cost_charge="{ row }">
        <span>{{ row.cost_charge?.toFixed(6) }}</span>
      </template>
    </PageContent>

    <!-- 结果查看弹窗 -->
    <el-dialog v-model="resultDialogVisible" title="生成结果" width="700px">
      <div class="whitespace-pre-wrap max-h-96 overflow-y-auto">{{ currentResult || "暂无结果" }}</div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageSearch from "@/components/CURD/PageSearch.vue";
import PageContent from "@/components/CURD/PageContent.vue";
import searchConfig from "./config/search";
import contentConfig from "./config/content";
import usePage from "@/components/CURD/usePage";
import type { IOperateData } from "@/components/CURD/types";
import UserInfo from "@/components/UserInfo/index.vue";
import { GenerationStatusEnum } from "@/enums";

const { contentRef, handleSearchClick, handleResetClick } = usePage();

function handleToolbarClick(name: string) {
  console.log(name);
}

const resultDialogVisible = ref(false);
const currentResult = ref("");

const handleOperateClick = async (data: IOperateData) => {
  if (data.name === "view_result") {
    currentResult.value = data.row.result || "";
    resultDialogVisible.value = true;
  }
};
</script>
