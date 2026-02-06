import type { IContentConfig } from "@/components/CURD/types.ts";
import { SyslogAPI } from "@/api/syslog.ts";

const contentConfig: IContentConfig = {
  pageTitle: "登录日志",
  pk: "id",
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "用户ID", prop: "user_id", width: 200, align: "center", showOverflowTooltip: true },
    { label: "设备ID", prop: "terminal_id", width: 200, align: "center", showOverflowTooltip: true },
    { label: "登录类型", prop: "login_type", width: 120, align: "center" },
    { label: "登录状态", prop: "status", width: 100, align: "center", templet: "custom", slotName: "status" },
    { label: "失败原因", prop: "fail_reason", minWidth: 150, showOverflowTooltip: true },
    { label: "登出时间", prop: "logout_at", width: 180, align: "center" },
    { label: "登录时间", prop: "created_at", width: 180, align: "center" },
  ],
  indexAction: (params) => SyslogAPI.getUserLoginLogList(params),
};

export default contentConfig;
