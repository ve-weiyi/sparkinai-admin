import type { IContentConfig } from "@/components/CURD/types.ts";
import { SyslogAPI } from "@/api/syslog.ts";

const contentConfig: IContentConfig = {
  pageTitle: "文件上传日志",
  permPrefix: "syslog:upload",
  pk: "id",
  defaultToolbar: ["refresh", "filter"],
  table: {
    border: true,
    highlightCurrentRow: true,
  },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 30, 50],
  },
  parseData: (res) => {
    return {
      total: res.data.total,
      list: res.data.list || [],
    };
  },
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "用户ID", prop: "user_id", width: 200, align: "center",  },
    { label: "文件名称", prop: "file_name", minWidth: 150,  },
    { label: "文件类型", prop: "file_type", width: 120, align: "center" },
    { label: "文件大小", prop: "file_size", width: 120, align: "center" },
    { label: "文件URL", prop: "file_url", minWidth: 200, align: "center", templet: "url" },
    {
      label: "上传时间",
      prop: "created_at",
      width: 180,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
  ],
  indexAction: (params) => SyslogAPI.getUploadLogList(params),
};

export default contentConfig;
