import type { ISearchConfig } from "@/components/CURD/types";
import { ENABLE_STATUS_OPTIONS } from "@/constants/options";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:provider",
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: {
        placeholder: "服务商名称/代码",
        clearable: true,
        style: { width: "150px" },
      },
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
