import type { IContentConfig } from "@/components/CURD/types.ts";
import { SyslogAPI } from "@/api/syslog.ts";

const contentConfig: IContentConfig = {
  pageTitle: "文件上传日志",
  pk: "id",
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "用户ID", prop: "user_id", width: 200, align: "center", showOverflowTooltip: true },
    { label: "文件名称", prop: "file_name", minWidth: 150, showOverflowTooltip: true },
    { label: "文件类型", prop: "file_type", width: 120, align: "center" },
    { label: "文件大小", prop: "file_size", width: 120, align: "center" },
    { label: "文件URL", prop: "file_url", minWidth: 200, showOverflowTooltip: true },
    { label: "上传时间", prop: "created_at", width: 180, align: "center" },
  ],
  indexAction: (params) => SyslogAPI.getUploadLogList(params),
};

export default contentConfig;
