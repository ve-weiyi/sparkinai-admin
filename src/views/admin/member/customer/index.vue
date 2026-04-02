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
    />
    <PageModal ref="editModalRef" :modal-config="editConfig" @submit-click="handleSubmitClick" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from "@/components/CURD/PageSearch.vue";
import PageContent from "@/components/CURD/PageContent.vue";
import PageModal from "@/components/CURD/PageModal.vue";
import searchConfig from "./config/search";
import contentConfig from "./config/content";
import editConfig from "./config/edit";
import usePage from "@/components/CURD/usePage";
import { UserAPI } from "@/api/user";
import { ElMessage, ElMessageBox } from "element-plus";
import type { IOperateData } from "@/components/CURD/types";

const {
  searchRef,
  contentRef,
  editModalRef,
  handleSearchClick,
  handleSubmitClick,
} = usePage();

function handleResetClick() {
  const queryParams = searchRef.value?.getQueryParams();
  contentRef.value?.fetchPageData(queryParams, true);
}

function handleToolbarClick(name: string) {
  console.log(name);
}

// 处理自定义操作
const handleOperateClick = (data: IOperateData) => {
  switch (data.name) {
    case "recharge":
      ElMessageBox.prompt("请输入充值金额", "充值金额", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputType: "number",
        inputPattern: /^\d+(\.\d+)?$/,
        inputErrorMessage: "请输入有效金额",
      })
        .then((result: any) => {
          const amount = parseFloat(result.value);
          if (isNaN(amount) || amount <= 0) {
            ElMessage.error("充值金额必须大于0");
            return;
          }
          return UserAPI.rechargeUser({
            user_id: data.row.user_id,
            amount: amount,
          });
        })
        .then((resp: any) => {
          if (!resp) return;
          ElMessage.success("充值请求已提交，余额将稍后更新");
        })
        .catch((error) => {
          if (error !== "cancel") console.error(error);
        });
      break;
    case "reset_pwd":
      ElMessageBox.prompt("请输入新密码", "重置密码", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{6,}$/,
        inputErrorMessage: "密码长度至少6位",
        inputType: "password",
      })
        .then((result: any) => {
          return UserAPI.resetUserPassword({
            user_id: data.row.user_id,
            new_password: result.value,
          });
        })
        .then(() => {
          ElMessage.success("重置密码成功");
        })
        .catch((error) => {
          if (error !== "cancel") console.error(error);
        });
      break;
    case "edit":
      editModalRef.value?.setModalVisible();
      UserAPI.getUserDetail({ user_id: data.row.user_id }).then((res) => {
        editModalRef.value?.setFormData(res.data);
      });
      break;
  }
};
</script>
