import type {IContentConfig} from "@/components/CURD/types";
import {ApiKeyAPI} from "@/api/apikey";

const contentConfig: IContentConfig = {
  pageTitle: "API密钥管理",
  permPrefix: "admin:apikey",
  table: {border: true, highlightCurrentRow: true},
  pagination: {background: true, layout: "prev,pager,next,jumper,total,sizes", pageSize: 10, pageSizes: [10, 20, 50]},
  parseData: (res) => ({total: res.data.total, list: res.data.list || []}),
  deleteAction: (ids) => ApiKeyAPI.deletesApiKeyApi({ids: ids.split(",").map(Number)}),
  indexAction: (query) => ApiKeyAPI.findApiKeyListApi(query),
  modifyAction: (data) => ApiKeyAPI.updateApiKeyStatusApi({id: data.id, status: data.value}),
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    {type: "selection", label: "批量操作", width: 50, align: "center"},
    {label: "ID", prop: "id", width: 80, align: "center"},
    {label: "服务商", prop: "provider_name", width: 120, align: "center"},
    {label: "密钥名称", prop: "name", width: 150, align: "center"},
    {label: "优先级", prop: "priority", width: 80, align: "center"},
    {
      label: "状态",
      prop: "status",
      width: 80,
      align: "center",
      templet: "switch",
      activeValue: 1,
      inactiveValue: 0,
      activeText: "禁用",
      inactiveText: "启用"
    },
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
      width: 120,
      templet: "tool",
      operat: [
        {name: "edit", text: "编辑", perm: "edit", attrs: {icon: "edit", type: "primary"}},
        {name: "delete", text: "删除", perm: "delete", attrs: {icon: "delete", type: "danger"}},
      ],
    },
  ],
};

export default contentConfig;
