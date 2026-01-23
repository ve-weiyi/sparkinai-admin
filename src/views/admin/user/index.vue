<template>
  <div class="app-container">
    <page-search ref="searchRef" :search-config="searchConfig" @query-click="handleQueryClick"
                 @reset-click="handleResetClick"/>
    <page-content ref="contentRef" :content-config="contentConfig" @add-click="handleAddClick"
                  @edit-click="handleEditClick" @search-click="handleSearchClick" @operate-click="handleOperateClick"
                  @filter-change="handleFilterChange"/>
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
import editModalConfig from "./config/edit";
import {AdminUserAPI} from "@/api/admin";

const {
  searchRef,
  contentRef,
  editModalRef,
  handleQueryClick,
  handleResetClick,
  handleAddClick,
  handleEditClick,
  handleSubmitClick,
  handleSearchClick,
  handleFilterChange
} = usePage();

function handleOperateClick(data: any) {
  if (data.name === "recharge") {
    ElMessageBox.prompt("请输入充值金额", "用户充值", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      inputType: "number"
    })
      .then(({value}) => {
        AdminUserAPI.rechargeApi({user_id: data.row.id, amount: parseInt(value)}).then(() => {
          ElMessage.success("充值成功");
          const queryParams = searchRef.value?.getQueryParams();
          contentRef.value?.fetchPageData(queryParams, true);
        });
      })
      .catch(() => {
      });
  }
}
</script>
