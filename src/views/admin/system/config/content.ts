import type {IContentConfig} from "@/components/CURD/types";
import {SystemConfigAPI} from "@/api/admin";

const contentConfig: IContentConfig = {
  pageTitle: "系统配置",
  permPrefix: "admin:system",
  table: {border: true, highlightCurrentRow: true},
  pagination: {background: true, layout: "prev,pager,next,jumper,total,sizes", pageSize: 10, pageSizes: [10, 20, 50]},
  parseData: (res) => ({total: res.data.total, list: res.data.list || []}),
  indexAction: (query) => SystemConfigAPI.findSystemConfigListApi(query),
  pk: "id",
  toolbar: [{
    name: "fillTemplate",
    text: "填充模板",
    perm: "fillTemplate",
    attrs: {icon: "document-copy", type: "success"}
  }],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    {label: "ID", prop: "id", width: 80, align: "center"},
    {label: "配置键", prop: "key", width: 150, align: "center"},
    {label: "配置值", prop: "value", width: 200, align: "center"},
    {label: "描述", prop: "description", width: 200, align: "center"},
    {
      label: "创建时间",
      prop: "created_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss"
    },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 100,
      templet: "tool",
      operat: [
        {name: "edit", text: "编辑", perm: "edit", attrs: {icon: "edit", type: "primary"}},
      ],
    },
  ],
};

export default contentConfig;
