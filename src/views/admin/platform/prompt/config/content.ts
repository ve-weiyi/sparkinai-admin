import type { IContentConfig } from "@/components/CURD/types";
import { PromptAPI } from "@/api/prompt";

const contentConfig: IContentConfig = {
  pageTitle: "提示词管理",
  permPrefix: "admin:prompt",
  table: { border: true, highlightCurrentRow: true },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 50],
  },
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  indexAction: (params) => PromptAPI.getPromptList(params),
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "名称", prop: "name", width: 150, align: "center" },
    { label: "标签", prop: "tags", width: 120, align: "center" },
    { label: "类型", prop: "type", width: 100, align: "center" },
    { label: "内容", prop: "content", minWidth: 200, showOverflowTooltip: true },
    { label: "排序", prop: "sort_order", width: 80, align: "center" },
    {
      label: "状态",
      prop: "status",
      width: 80,
      align: "center",
      templet: "switch",
      activeValue: 1,
      inactiveValue: 2,
      activeText: "启用",
      inactiveText: "禁用",
    },
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
      width: 120,
      templet: "tool",
      operat: [
        {
          name: "edit",
          text: "编辑",
          perm: "edit",
          attrs: { icon: "edit", type: "primary" },
        },
        {
          name: "delete",
          text: "删除",
          perm: "delete",
          attrs: { icon: "delete", type: "danger" },
        },
      ],
    },
  ],
};

export default contentConfig;
