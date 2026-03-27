import type { IModalConfig } from "@/components/CURD/types";
import { USER_STATUS_OPTIONS } from "@/constants/options";
import { EnableStatusEnum } from "@/enums";

const modalConfig: IModalConfig = {
  permPrefix: "admin:user",
  component: "dialog",
  dialog: { title: "新增用户", width: 500, draggable: true },
  form: { labelWidth: 100 },
  formItems: [
    {
      label: "手机号",
      prop: "phone",
      type: "input",
      attrs: { placeholder: "请输入手机号", maxlength: 11 },
      rules: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        { len: 11, message: "手机号长度为11位", trigger: "blur" },
      ],
    },
    {
      label: "密码",
      prop: "password",
      type: "input",
      attrs: { placeholder: "请输入密码", type: "password", showPassword: true },
      rules: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, message: "密码至少6位", trigger: "blur" },
      ],
    },
    {
      label: "昵称",
      prop: "nickname",
      type: "input",
      attrs: { placeholder: "请输入昵称" },
    },
    {
      label: "状态",
      prop: "status",
      type: "select",
      options: USER_STATUS_OPTIONS,
      initialValue: EnableStatusEnum.ENABLED,
    },
  ],
};

export default modalConfig;
