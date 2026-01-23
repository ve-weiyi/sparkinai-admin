import type {IModalConfig} from "@/components/CURD/types";
import {AdminUserAPI} from "@/api/admin";

const modalConfig: IModalConfig = {
  permPrefix: "admin:user",
  dialog: {title: "编辑用户", width: 500, draggable: true},
  form: {labelWidth: 100},
  formAction: (data) => AdminUserAPI.rechargeApi({user_id: data.id, amount: data.balance}),
  formItems: [
    {label: "用户名", prop: "username", type: "input", attrs: {disabled: true}},
    {label: "手机号", prop: "phone", type: "input", attrs: {disabled: true}},
    {label: "邮箱", prop: "email", type: "input", attrs: {disabled: true}},
    {label: "余额", prop: "balance", type: "input-number", attrs: {min: 0, step: 100}},
  ],
};

export default modalConfig;
