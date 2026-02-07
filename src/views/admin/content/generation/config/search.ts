import type { ISearchConfig } from "@/components/CURD/types.ts";
import { GENERATION_STATUS_OPTIONS, GENERATION_TYPE_OPTIONS } from "@/utils/option";

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
      options: GENERATION_STATUS_OPTIONS,
    },
    {
      type: "select",
      label: "类型",
      prop: "generation_type",
      options: GENERATION_TYPE_OPTIONS,
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
