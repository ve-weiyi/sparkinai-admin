import type { ISearchConfig } from "@/components/CURD/types.ts";

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: "input",
      label: "用户ID",
      prop: "user_id",
      attrs: { placeholder: "请输入用户ID" },
    },
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: { placeholder: "产品名称" },
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      options: [
        { label: "成功", value: 1 },
        { label: "失败", value: 2 },
        { label: "进行中", value: 0 },
      ],
    },
    {
      type: "select",
      label: "类型",
      prop: "generation_type",
      options: [
        { label: "文案", value: "copy" },
        { label: "图片", value: "image" },
        { label: "混合", value: "mixed" },
      ],
    },
    {
      type: "date-picker",
      label: "开始日期",
      prop: "start_date",
      attrs: { type: "date", valueFormat: "YYYY-MM-DD", placeholder: "选择开始日期" },
    },
    {
      type: "date-picker",
      label: "结束日期",
      prop: "end_date",
      attrs: { type: "date", valueFormat: "YYYY-MM-DD", placeholder: "选择结束日期" },
    },
  ],
};

export default searchConfig;
