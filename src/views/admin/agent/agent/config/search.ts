import type { ISearchConfig } from "@/components/CURD/types";
import { AGENT_TYPE_OPTIONS } from "@/constants/options";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:agent",
  formItems: [
    {
      type: "select",
      label: "Agent 类型",
      prop: "agent_type",
      attrs: { placeholder: "请选择", clearable: true, style: { width: "180px" } },
      options: AGENT_TYPE_OPTIONS,
    },
  ],
};

export default searchConfig;
