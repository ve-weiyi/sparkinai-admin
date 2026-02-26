import type { IContentConfig } from "@/components/CURD/types";
import { NotificationAPI } from "@/api/notification";

const contentConfig: IContentConfig = {
  pageTitle: "邮件消息",
  permPrefix: "admin:email_message",
  table: { border: true, highlightCurrentRow: true },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 50],
  },
  indexAction: (query) => NotificationAPI.getEmailMessageList(query),
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  pk: "id",
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "邮箱", prop: "email", width: 200, align: "center" },
    { label: "标题", prop: "title", minWidth: 200, align: "center" },
    { label: "场景", prop: "scene", width: 120, align: "center" },
    { label: "状态", prop: "status", width: 100, align: "center" },
    {
      label: "创建时间",
      prop: "created_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
  ],
};

export default contentConfig;
