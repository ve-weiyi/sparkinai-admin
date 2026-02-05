import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:prompt",
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: {
        placeholder: "提示词名称/标签",
        clearable: true,
        style: { width: "150px" },
      },
    },
    {
      type: "select",
      label: "类型",
      prop: "type",
      options: [
        { label: "系统", value: "system" },
        { label: "用户", value: "user" },
        { label: "助手", value: "assistant" },
      ],
      attrs: { placeholder: "全部", clearable: true, style: { width: "100px" } },
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      options: [
        { label: "启用", value: 1 },
        { label: "禁用", value: 2 },
      ],
      attrs: { placeholder: "全部", clearable: true, style: { width: "100px" } },
    },
  ],
};

export default searchConfig;
