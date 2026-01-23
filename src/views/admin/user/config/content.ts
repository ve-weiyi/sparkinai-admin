import type {IContentConfig} from "@/components/CURD/types";
import {AdminUserAPI} from "@/api/admin";

const contentConfig: IContentConfig = {
  pageTitle: "用户管理",
  permPrefix: "admin:user",
  table: {border: true, highlightCurrentRow: true},
  pagination: {background: true, layout: "prev,pager,next,jumper,total,sizes", pageSize: 10, pageSizes: [10, 20, 50]},
  parseData: (res) => ({total: res.data.total, list: res.data.list || []}),
  deleteAction: (ids) => AdminUserAPI.deletesUserApi({ids: ids.split(",").map(Number)}),
  indexAction: (query) => AdminUserAPI.findUserListApi(query),
  pk: "id",
  toolbar: [],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    {type: "selection", label: "批量操作", width: 50, align: "center"},
    {label: "ID", prop: "id", width: 80, align: "center"},
    {label: "用户名", prop: "username", width: 120, align: "center"},
    {label: "手机号", prop: "phone", width: 130, align: "center"},
    {label: "邮箱", prop: "email", width: 150, align: "center"},
    {label: "余额", prop: "balance", width: 100, align: "center", templet: "price", priceFormat: "¥{0}"},
    {
      label: "状态",
      prop: "status",
      width: 80,
      align: "center",
      templet: "switch",
      activeValue: 1,
      inactiveValue: 0,
      activeText: "禁用",
      inactiveText: "正常"
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
      width: 200,
      templet: "tool",
      operat: [
        {name: "recharge", text: "充值", perm: "recharge", attrs: {icon: "wallet", type: "success"}},
        {name: "edit", text: "编辑", perm: "edit", attrs: {icon: "edit", type: "primary"}},
        {name: "delete", text: "删除", perm: "delete", attrs: {icon: "delete", type: "danger"}},
      ],
    },
  ],
};

export default contentConfig;
