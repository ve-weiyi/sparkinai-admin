import { ref } from "vue";
import type { IModalConfig, PageContentInstance, PageModalInstance, PageSearchInstance } from "@/components/CURD/types";

export function usePage(addConfig?: IModalConfig, editConfig?: IModalConfig) {
  const contentRef = ref<PageContentInstance>();
  const modalRef = ref<PageModalInstance>();
  const searchRef = ref<PageSearchInstance>();
  const modalConfig = ref<IModalConfig>(addConfig || { formItems: [] });

  const handleSearchClick = (queryParams?: any) => {
    contentRef.value?.fetchPageData(queryParams, true);
  };

  const handleResetClick = (queryParams?: any) => {
    contentRef.value?.fetchPageData(queryParams, true);
  };

  const handleAddClick = () => {
    if (addConfig) {
      modalConfig.value = { ...addConfig };
    }
    modalRef.value?.setModalVisible(true);
    modalRef.value?.setFormData({});
    modalRef.value?.handleDisabled(false);
  };

  const handleEditClick = (row: any) => {
    if (editConfig) {
      modalConfig.value = { ...editConfig };
    }
    modalRef.value?.setModalVisible(true);
    modalRef.value?.setFormData(row);
    modalRef.value?.handleDisabled(false);
  };

  const handleSubmitClick = () => {
    const queryParams = searchRef.value?.getQueryParams();
    contentRef.value?.fetchPageData(queryParams);
  };
  
  const handleToolbarClick = (name: string) => {
      if (name === 'refresh') {
          handleSubmitClick();
      }
  }

  return {
    contentRef,
    modalRef,
    searchRef,
    modalConfig,
    handleSearchClick,
    handleResetClick,
    handleAddClick,
    handleEditClick,
    handleSubmitClick,
    handleToolbarClick
  };
}
