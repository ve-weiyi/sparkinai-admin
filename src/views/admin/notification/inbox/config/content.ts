import type { IContentConfig } from "@/components/CURD/types";
import { NotificationAPI } from "@/api/notification";

const contentConfig: IContentConfig = {
  pageTitle: "站内消息",
  permPrefix: "admin:inbox_message",
  table: { border: true, highlightCurrentRow: true },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 50],
  },
  indexAction: (query) => NotificationAPI.getInboxMessageList(query),
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  pk: "id",
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "用户ID", prop: "user_id", width: 100, align: "center" },
    { label: "标题", prop: "title", minWidth: 200, align: "center" },
    { label: "内容", prop: "content", minWidth: 250, align: "center" },
    { label: "类型", prop: "type", width: 100, align: "center" },
    { label: "是否已读", prop: "is_read", width: 100, align: "center" },
    {
      label: "创建时间",
      prop: "created_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
    {
      label: "阅读时间",
      prop: "read_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
  ],
};

export default contentConfig;
