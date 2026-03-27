import type { IContentConfig } from "@/components/CURD/types";
import type { GetUserListReq } from "@/api/types";
import { UserAPI } from "@/api/user";
import { EnableStatusEnum } from "@/enums";

const contentConfig: IContentConfig<GetUserListReq> = {
  pageTitle: "用户管理",
  permPrefix: "admin:user",
  table: { border: true, highlightCurrentRow: true },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 50],
  },
  indexAction: (query) => UserAPI.getUserList(query),
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  modifyAction(row) {
    return UserAPI.updateUserStatus({
      user_id: row.user_id,
      status: row.status,
    });
  },
  pk: "user_id",
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "ID", prop: "id", width: 70, align: "center", show: false },
    { label: "用户名", prop: "username", width: 120, align: "center" },
    { label: "昵称", prop: "nickname", width: 120, align: "center" },
    { label: "头像", prop: "avatar", width: 70, align: "center", templet: "image" },
    { label: "邮箱", prop: "email", minWidth: 160, align: "center" },
    { label: "手机号", prop: "phone", width: 130, align: "center" },
    { label: "余额", prop: "balance", width: 100, align: "center" },
    { label: "积分", prop: "coin", width: 80, align: "center" },
    { label: "注册方式", prop: "register_type", width: 100, align: "center" },
    {
      label: "状态",
      prop: "status",
      width: 90,
      align: "center",
      templet: "switch",
      activeValue: EnableStatusEnum.ENABLED,
      inactiveValue: EnableStatusEnum.DISABLED,
      activeText: "正常",
      inactiveText: "禁用",
    },
    {
      label: "注册时间",
      prop: "created_at",
      width: 170,
      align: "center",
      sortable: true,
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 240,
      templet: "tool",
      operat: [
        {
          name: "recharge",
          text: "充值",
          perm: "recharge",
          attrs: { icon: "wallet", type: "success" },
        },
        {
          name: "reset_pwd",
          text: "重置密码",
          perm: "reset_pwd",
          attrs: { icon: "key", type: "warning" },
        },
        {
          name: "edit",
          text: "编辑",
          perm: "edit",
          attrs: { icon: "edit", type: "primary" },
        },
      ],
    },
  ],
};

export default contentConfig;
