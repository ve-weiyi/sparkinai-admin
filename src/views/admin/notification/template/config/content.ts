import type { IContentConfig } from "@/components/CURD/types";
import { NotificationAPI } from "@/api/notification";

const contentConfig: IContentConfig = {
  pageTitle: "模版管理",
  permPrefix: "admin:notify_template",
  table: { border: true, highlightCurrentRow: true },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 50],
  },
  indexAction: (query) => NotificationAPI.getNotifyTemplateList(query),
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  deleteAction: (ids) => {
    const idList = ids.split(",");
    if (idList.length === 1) {
      return NotificationAPI.deleteNotifyTemplate({ id: parseInt(idList[0]) });
    }
    return Promise.all(
      idList.map((id) => NotificationAPI.deleteNotifyTemplate({ id: parseInt(id) }))
    ).then(() => ({
      code: 0,
      message: "success",
    }));
  },
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "模板编码", prop: "code", width: 150, align: "center" },
    { label: "通知渠道", prop: "channel", width: 120, align: "center" },
    { label: "使用场景", prop: "scene", width: 120, align: "center" },
    { label: "标题", prop: "title", minWidth: 200, align: "center" },
    {
      label: "创建时间",
      prop: "created_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 180,
      templet: "tool",
      operat: [
        { name: "edit", text: "编辑", perm: "edit", attrs: { icon: "edit", type: "primary" } },
        { name: "delete", text: "删除", perm: "delete", attrs: { icon: "delete", type: "danger" } },
      ],
    },
  ],
};

export default contentConfig;
