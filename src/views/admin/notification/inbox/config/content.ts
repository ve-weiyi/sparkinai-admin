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
  deleteAction: (ids) => {
    const idList = ids.split(",");
    if (idList.length === 1) {
      return NotificationAPI.deleteInboxMessage({ id: parseInt(idList[0]) });
    }
    return Promise.all(idList.map((id) => NotificationAPI.deleteInboxMessage({ id: parseInt(id) }))).then(
      (results) => results[results.length - 1]
    );
  },
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "用户ID", prop: "user_id", width: 200, align: "center" },
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
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 150,
      templet: "tool",
      operat: [
        { name: "edit", text: "编辑", perm: "edit", attrs: { icon: "edit", type: "primary" } },
        { name: "delete", text: "删除", perm: "delete", attrs: { icon: "delete", type: "danger" } },
      ],
    },
  ],
};

export default contentConfig;
