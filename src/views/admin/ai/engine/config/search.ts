import type { ISearchConfig } from "@/components/CURD/types";
import { ENGINE_CONFIG_TYPE_OPTIONS } from "@/constants/options";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:engine",
  formItems: [
    {
      type: "select",
      label: "配置类型",
      prop: "type",
      attrs: { placeholder: "请选择", clearable: true, style: { width: "150px" } },
      options: ENGINE_CONFIG_TYPE_OPTIONS,
    },
  ],
};

export default searchConfig;
