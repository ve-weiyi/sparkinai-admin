import type {IContentConfig} from "@/components/CURD/types";
import {UserAPI} from "@/api/user";

const contentConfig: IContentConfig = {
  pageTitle: "用户管理",
  permPrefix: "admin:user",
  table: {border: true, highlightCurrentRow: true},
  pagination: {background: true, layout: "prev,pager,next,jumper,total,sizes", pageSize: 10, pageSizes: [10, 20, 50]},
  parseData: (res) => ({total: res.data.total, list: res.data.list || []}),
  deleteAction: (ids) => UserAPI.batchDeleteUsers({ids: ids.split(",")}),
  indexAction: (query) => UserAPI.getUserList(query),
  pk: "id",
  toolbar: ["add"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    {type: "selection", label: "批量操作", width: 50, align: "center"},
    {label: "ID", prop: "id", width: 180, align: "center"},
    {label: "昵称", prop: "nickname", width: 120, align: "center"},
    {label: "手机号", prop: "phone", width: 130, align: "center"},
    {label: "头像", prop: "avatar", width: 80, align: "center", templet: "image"},
    {label: "Token余额", prop: "token_balance", width: 100, align: "center"},
    {label: "免费次数", prop: "free_usage", width: 100, align: "center"},
    {label: "累计生成", prop: "total_generations", width: 100, align: "center"},
    {
      label: "状态",
      prop: "status",
      width: 80,
      align: "center",
      templet: "switch",
      activeValue: 1,
      inactiveValue: 2,
      activeText: "正常",
      inactiveText: "禁用"
    },
    {
      label: "注册时间",
      prop: "created_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss"
    },
    {
      label: "最后登录",
      prop: "last_login_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss"
    },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 280,
      templet: "tool",
      operat: [
        {name: "recharge", text: "充值", perm: "recharge", attrs: {icon: "wallet", type: "success"}},
        {name: "reset_pwd", text: "重置密码", perm: "reset_pwd", attrs: {icon: "key", type: "warning"}},
        {name: "edit", text: "编辑", perm: "edit", attrs: {icon: "edit", type: "primary"}},
        {name: "delete", text: "删除", perm: "delete", attrs: {icon: "delete", type: "danger"}},
      ],
    },
  ],
};

export default contentConfig;
