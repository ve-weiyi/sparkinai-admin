import type { IModalConfig } from "@/components/CURD/types";
import { ConfigAPI } from "@/api/config";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:system",
  component: "dialog",
  dialog: { title: "编辑系统配置", width: 600, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => {
    return ConfigAPI.updateSystemConfig(data);
  },
  formItems: [
    { label: "配置键", prop: "config_key", type: "input", attrs: { disabled: true } },
    { label: "配置值", prop: "config_value", type: "input", attrs: { type: "textarea", rows: 3 }, rules: [{ required: true, message: "请输入配置值" }] },
    { label: "描述", prop: "description", type: "input", attrs: { type: "textarea" } },
    {
      label: "公开",
      prop: "is_public",
      type: "switch",
      attrs: { activeValue: 1, inactiveValue: 0, activeText: "是", inactiveText: "否" },
    },
  ],
};

export default modalConfig;
