import type { IModalConfig } from "@/components/CURD/types";
import { ProviderAPI } from "@/api/provider";
import { EnableStatusEnum } from "@/enums";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:provider",
  component: "dialog",
  dialog: { title: "新增服务商", width: 600, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => ProviderAPI.createProvider(data),
  formItems: [
    {
      label: "服务商名称",
      prop: "name",
      type: "input",
      rules: [{ required: true, message: "请输入服务商名称" }],
    },
    {
      label: "代码",
      prop: "code",
      type: "input",
      rules: [{ required: true, message: "请输入代码" }],
    },
    {
      label: "Base URL",
      prop: "base_url",
      type: "input",
      rules: [{ required: true, message: "请输入Base URL" }],
    },
    {
      label: "描述",
      prop: "description",
      type: "input",
      attrs: { type: "textarea", rows: 3 },
    },
    {
      label: "排序",
      prop: "sort_order",
      type: "input-number",
      attrs: { min: 0, step: 1 },
    },
    {
      label: "状态",
      prop: "status",
      type: "switch",
      attrs: {
        activeValue: EnableStatusEnum.ENABLED,
        inactiveValue: EnableStatusEnum.DISABLED,
        activeText: "启用",
        inactiveText: "禁用",
      },
      initialValue: EnableStatusEnum.ENABLED,
    },
  ],
};

export default modalConfig;
