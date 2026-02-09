import type { IModalConfig } from "@/components/CURD/types";
import { UserAPI } from "@/api/user";
import { USER_STATUS_OPTIONS } from "@/constants/options";

const modalConfig: IModalConfig = {
  permPrefix: "admin:user",
  component: "dialog",
  dialog: { title: "编辑用户", width: 500, draggable: true },
  form: { labelWidth: 100 },
  formItems: [
    {
      label: "手机号",
      prop: "phone",
      type: "input",
      attrs: { placeholder: "请输入手机号", maxlength: 11, disabled: true },
      rules: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        { len: 11, message: "手机号长度为11位", trigger: "blur" },
      ],
    },
    {
      label: "密码",
      prop: "password",
      type: "input",
      attrs: {
        placeholder: "请输入密码 (可选)",
        type: "password",
        showPassword: true,
        disabled: true,
      },
      rules: [{ min: 6, message: "密码至少6位", trigger: "blur" }],
    },
    {
      label: "昵称",
      prop: "nickname",
      type: "input",
      attrs: { placeholder: "请输入昵称" },
    },
    {
      label: "免费次数",
      prop: "free_usage",
      type: "input-number",
      attrs: { min: 0, step: 1 },
    },
    {
      label: "Token余额",
      prop: "token_balance",
      type: "input-number",
      attrs: { min: 0, step: 100 },
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      options: USER_STATUS_OPTIONS,
    },
  ],
};

export default modalConfig;
