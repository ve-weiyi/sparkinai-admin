import type { IContentConfig } from "@/components/CURD/types.ts";
import { SyslogAPI } from "@/api/syslog.ts";

const contentConfig: IContentConfig = {
  pageTitle: "生成日志",
  pk: "id",
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "生成记录ID", prop: "generation_id", width: 200, align: "center", showOverflowTooltip: true },
    { label: "用户ID", prop: "user_id", width: 200, align: "center", showOverflowTooltip: true },
    { label: "任务类型", prop: "task_type", width: 120, align: "center" },
    { label: "执行步骤", prop: "step", width: 120, align: "center" },
    { label: "日志级别", prop: "log_level", width: 100, align: "center" },
    { label: "日志消息", prop: "message", minWidth: 200, showOverflowTooltip: true },
    { label: "耗时(ms)", prop: "cost_time", width: 100, align: "center" },
    { label: "创建时间", prop: "created_at", width: 180, align: "center" },
  ],
  indexAction: (params) => SyslogAPI.getGenerationLogList(params),
};

export default contentConfig;
