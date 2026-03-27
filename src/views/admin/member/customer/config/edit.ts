import type { IModalConfig } from "@/components/CURD/types";
import { USER_STATUS_OPTIONS } from "@/constants/options";
import { EnableStatusEnum } from "@/enums";

const modalConfig: IModalConfig = {
  permPrefix: "admin:user",
  component: "dialog",
  dialog: { title: "编辑用户", width: 500, draggable: true },
  form: { labelWidth: 100 },
  formItems: [
    {
      label: "用户名",
      prop: "username",
      type: "input",
      attrs: { placeholder: "用户名", disabled: true },
    },
    {
      label: "昵称",
      prop: "nickname",
      type: "input",
      attrs: { placeholder: "请输入昵称" },
    },
    {
      label: "手机号",
      prop: "phone",
      type: "input",
      attrs: { placeholder: "手机号", disabled: true },
    },
    {
      label: "邮箱",
      prop: "email",
      type: "input",
      attrs: { placeholder: "邮箱", disabled: true },
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
