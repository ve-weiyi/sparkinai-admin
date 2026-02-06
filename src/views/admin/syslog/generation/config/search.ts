import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    { prop: "generation_id", label: "生成记录ID", type: "input" },
    { prop: "user_id", label: "用户ID", type: "input" },
    { prop: "task_type", label: "任务类型", type: "input" },
    { prop: "log_level", label: "日志级别", type: "select", options: [
      { label: "DEBUG", value: "DEBUG" },
      { label: "INFO", value: "INFO" },
      { label: "WARN", value: "WARN" },
      { label: "ERROR", value: "ERROR" }
    ]},
  ],
};

export default searchConfig;
