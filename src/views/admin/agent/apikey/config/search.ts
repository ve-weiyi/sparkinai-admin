import type { ISearchConfig } from "@/components/CURD/types";
import { ENABLE_STATUS_OPTIONS } from "@/constants/options";
import { useProvider } from "@/composables/useProvider";

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: {
        placeholder: "搜索名称/Key...",
        clearable: true,
        style: { width: "150px" },
      },
    },
    {
      type: "select",
      label: "服务商",
      prop: "provider_id",
      attrs: { placeholder: "选择服务商", clearable: true, style: { width: "150px" } },
      options: [],
      initFn: async (item) => {
        const { loadProviderOptions } = useProvider();
        item.options = await loadProviderOptions();
      },
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      attrs: { placeholder: "全部", clearable: true, style: { width: "100px" } },
      options: ENABLE_STATUS_OPTIONS,
    },
  ],
};

export default searchConfig;
