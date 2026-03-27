import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    { prop: "user_id", label: "用户ID", type: "input" },
    { prop: "start_date", label: "开始日期", type: "date-picker", attrs: { valueFormat: "YYYY-MM-DD" } },
    { prop: "end_date", label: "结束日期", type: "date-picker", attrs: { valueFormat: "YYYY-MM-DD" } },
  ],
};

export default searchConfig;
