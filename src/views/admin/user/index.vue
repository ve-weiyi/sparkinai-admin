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
import { usePage } from "@/hooks/usePage";
import { UserAPI } from "@/api/user";
import { ElMessage, ElMessageBox } from "element-plus";
import type { IOperateData } from "@/components/CURD/types";

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
const handleOperateClick = async (data: IOperateData) => {
  if (data.name === "recharge") {
    try {
      const { value } = await ElMessageBox.prompt("请输入充值Token数量", "用户充值", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputType: "number",
        inputPattern: /^-?\d+$/,
        inputErrorMessage: "请输入有效的数字"
      });
      
      await UserAPI.rechargeUser({ id: data.row.id, token_amount: parseInt(value) });
      ElMessage.success("充值成功");
      handleSearchClick();
    } catch (error) {
      if (error !== "cancel") console.error(error);
    }
  } else if (data.name === "reset_pwd") {
    try {
      const { value } = await ElMessageBox.prompt("请输入新密码", "重置密码", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{6,}$/,
        inputErrorMessage: '密码长度至少6位',
        // Note: inputType 'password' might not be fully supported in all ElMessageBox versions as prompt type, 
        // but it is standard HTML input type. Element Plus supports it.
        inputType: 'password'
      });
      
      await UserAPI.resetUserPassword({ id: data.row.id, new_password: value });
      ElMessage.success("重置密码成功");
    } catch (error) {
      if (error !== "cancel") console.error(error);
    }
  } else if (data.name === "edit") {
    handleEditClick(data.row);
  }
};
</script>
