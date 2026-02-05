import type { IModalConfig } from "@/components/CURD/types";
import { ConfigAPI } from "@/api/config";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:system",
  component: "dialog",
  dialog: { title: "新增系统配置", width: 600, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => {
    return ConfigAPI.createSystemConfig(data);
  },
  formItems: [
    {
      label: "配置键",
      prop: "config_key",
      type: "input",
      rules: [{ required: true, message: "请输入配置键" }],
    },
    {
      label: "配置值",
      prop: "config_value",
      type: "input",
      attrs: { type: "textarea", rows: 3 },
      rules: [{ required: true, message: "请输入配置值" }],
    },
    {
      label: "配置类型",
      prop: "config_type",
      type: "select",
      options: [
        { label: "字符串", value: "string" },
        { label: "JSON", value: "json" },
        { label: "数字", value: "number" },
        { label: "布尔值", value: "boolean" },
      ],
      initialValue: "string",
    },
    {
      label: "分类",
      prop: "category",
      type: "input",
      attrs: { placeholder: "例如: general" },
    },
    { label: "描述", prop: "description", type: "input", attrs: { type: "textarea" } },
    {
      label: "公开",
      prop: "is_public",
      type: "switch",
      attrs: { activeValue: 1, inactiveValue: 0, activeText: "是", inactiveText: "否" },
    },
    {
      label: "加密存储",
      prop: "is_encrypted",
      type: "switch",
      attrs: { activeValue: 1, inactiveValue: 0, activeText: "是", inactiveText: "否" },
    },
  ],
};

export default modalConfig;
