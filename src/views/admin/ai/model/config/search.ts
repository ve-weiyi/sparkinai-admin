import type { ISearchConfig } from "@/components/CURD/types";
import { AI_MODEL_TYPE_OPTIONS, ENABLE_STATUS_OPTIONS } from "@/constants/options";
import { useProvider } from "@/composables/useProvider";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:model",
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: { placeholder: "模型名称/代码", clearable: true, style: { width: "150px" } },
    },
    {
      type: "select",
      label: "服务商",
      prop: "provider_id",
      attrs: { placeholder: "全部", clearable: true, style: { width: "150px" } },
      options: [],
      initFn: async (item) => {
        const { loadProviderOptions } = useProvider();
        item.options = await loadProviderOptions();
      },
    },
    {
      type: "select",
      label: "类型",
      prop: "model_type",
      options: AI_MODEL_TYPE_OPTIONS,
      attrs: { placeholder: "全部", clearable: true, style: { width: "100px" } },
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      options: ENABLE_STATUS_OPTIONS,
      attrs: { placeholder: "全部", clearable: true, style: { width: "100px" } },
    },
  ],
};

export default searchConfig;
