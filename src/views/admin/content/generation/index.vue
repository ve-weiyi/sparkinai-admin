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
        <el-tag v-if="row.status === 1" type="success">成功</el-tag>
        <el-tag v-else-if="row.status === 2" type="danger">失败</el-tag>
        <el-tag v-else type="warning">进行中</el-tag>
      </template>
    </PageContent>

    <!-- 文案查看弹窗 -->
    <el-dialog v-model="copyDialogVisible" title="生成的文案" width="600px">
      <div class="whitespace-pre-wrap">{{ currentCopy }}</div>
    </el-dialog>

    <!-- 图片查看弹窗 -->
    <el-dialog v-model="imageDialogVisible" title="生成的图片" width="800px">
      <div class="flex flex-wrap gap-4 justify-center">
        <el-image
          v-for="(url, index) in currentImages"
          :key="index"
          :src="url"
          :preview-src-list="currentImages"
          fit="cover"
          class="w-48 h-48 rounded shadow-sm"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageSearch from "@/components/CURD/PageSearch.vue";
import PageContent from "@/components/CURD/PageContent.vue";
import searchConfig from "./config/search.ts";
import contentConfig from "./config/content.ts";
import addConfig from "./config/add.ts";
import editConfig from "./config/edit.ts";
import usePage from "@/components/CURD/usePage.ts";
import { GenerationAPI } from "@/api/generation.ts";
import { ElMessage, ElMessageBox } from "element-plus";
import type { IOperateData } from "@/components/CURD/types.ts";
import UserInfo from "@/components/UserInfo/index.vue";

const { contentRef, handleSearchClick, handleResetClick } = usePage();

function handleToolbarClick(name: string) {
  console.log(name);
}

const copyDialogVisible = ref(false);
const currentCopy = ref("");
const imageDialogVisible = ref(false);
const currentImages = ref<string[]>([]);

const handleOperateClick = async (data: IOperateData) => {
  switch (data.name) {
    case "view_copy":
      currentCopy.value = data.row.copy_result || "暂无文案";
      copyDialogVisible.value = true;
      break;
    case "view_images":
      currentImages.value = data.row.image_urls || [];
      imageDialogVisible.value = true;
      break;
    case "regenerate":
      try {
        await ElMessageBox.confirm("确定要重新生成吗？这将会消耗新的Token。", "提示", {
          type: "warning",
        });
        const res = await GenerationAPI.regenerate({ id: data.row.id });
        if (res.data.success) {
          ElMessage.success("已提交重试请求");
          contentRef.value?.handleRefresh();
        } else {
          ElMessage.error("重试请求失败");
        }
      } catch (error) {
        console.error(error);
      }
      break;
  }
};
</script>
