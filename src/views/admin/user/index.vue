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
import {usePage} from "@/hooks/usePage";
import {UserAPI} from "@/api/user";
import {ElMessage, ElMessageBox, MessageBoxData} from "element-plus";
import type {IOperateData} from "@/components/CURD/types";

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

// 处理自定义操作
const handleOperateClick = (data: IOperateData) => {
  // if (data.name === "recharge") {
  //   ElMessageBox.prompt("请输入充值Token数量", "用户充值", {
  //     confirmButtonText: "确定",
  //     cancelButtonText: "取消",
  //     inputType: "number",
  //     inputPattern: /^\d+$/,
  //     inputErrorMessage: "请输入有效的正整数"
  //   })
  //     .then(({value}) => {
  //       // 校验输入值有效性
  //       const tokenAmount = parseInt(value);
  //       if (isNaN(tokenAmount) || tokenAmount <= 0) {
  //         ElMessage.error("充值数量必须是大于0的整数");
  //         return;
  //       }
  //
  //       // 继续链式调用接口请求
  //       return UserAPI.rechargeUser({id: data.row.id, token_amount: tokenAmount});
  //     })
  //     .then(() => {
  //       ElMessage.success("充值成功");
  //       handleSearchClick();
  //     })
  //     .catch((error) => {
  //       // 排除用户取消操作的情况
  //       if (error !== "cancel") {
  //         console.error(error);
  //       }
  //     });
  // } else if (data.name === "reset_pwd") {
  //   ElMessageBox.prompt("请输入新密码", "重置密码", {
  //     confirmButtonText: "确定",
  //     cancelButtonText: "取消",
  //     inputPattern: /^.{6,}$/,
  //     inputErrorMessage: '密码长度至少6位',
  //     inputType: 'password'
  //   })
  //     .then(({value}) => {
  //       return UserAPI.resetUserPassword({id: data.row.id, new_password: value});
  //     })
  //     .then(() => {
  //       ElMessage.success("重置密码成功");
  //     })
  //     .catch((error) => {
  //       if (error !== "cancel") {
  //         console.error(error);
  //       }
  //     });
  // } else if (data.name === "edit") {
  //   handleEditClick(data.row);
  // }
};
</script>
