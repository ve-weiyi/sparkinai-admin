import type { IContentConfig } from "@/components/CURD/types.ts";
import { SyslogAPI } from "@/api/syslog.ts";

const contentConfig: IContentConfig = {
  pageTitle: "操作日志",
  pk: "id",
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "用户ID", prop: "user_id", width: 200, align: "center", showOverflowTooltip: true },
    { label: "操作模块", prop: "module", width: 120, align: "center" },
    { label: "操作描述", prop: "description", minWidth: 150, showOverflowTooltip: true },
    { label: "请求方式", prop: "request_method", width: 100, align: "center" },
    { label: "请求地址", prop: "request_uri", minWidth: 200, showOverflowTooltip: true },
    { label: "响应状态", prop: "response_status", width: 100, align: "center" },
    { label: "耗时(ms)", prop: "cost", width: 100, align: "center" },
    { label: "创建时间", prop: "created_at", width: 180, align: "center" },
  ],
  indexAction: (params) => SyslogAPI.getOperationLogList(params),
};

export default contentConfig;
