import type { IModalConfig } from "@/components/CURD/types";
import { ApikeyAPI } from "@/api/apikey";
import { ProviderAPI } from "@/api/provider";
import { EnableStatusEnum } from "@/enums/common";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:apikey",
  component: "dialog",
  dialog: { title: "新增API密钥", width: 600, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => ApikeyAPI.createApiKey(data),
  formItems: [
    {
      label: "服务商",
      prop: "provider_id",
      type: "select",
      rules: [{ required: true, message: "请选择服务商" }],
      options: [],
      initFn: async (item) => {
        const res = await ProviderAPI.getProviderList({
          page: 1,
          page_size: 100,
          status: 1,
        });
        item.options = res.data.list.map((p) => ({ label: p.name, value: p.id }));
      },
    },
    {
      label: "名称",
      prop: "name",
      type: "input",
      rules: [{ required: true, message: "请输入名称" }],
    },
    {
      label: "API Key",
      prop: "api_key",
      type: "input",
      rules: [{ required: true, message: "请输入API Key" }],
    },
    {
      label: "Secret Key",
      prop: "secret_key",
      type: "input",
      attrs: { placeholder: "可选" },
    },
    {
      label: "Profile",
      prop: "profile",
      type: "input",
      attrs: { placeholder: "default" },
      initialValue: "default",
    },
    {
      label: "优先级",
      prop: "priority",
      type: "input-number",
      attrs: { min: 0, step: 1 },
      initialValue: 0,
    },
    {
      label: "配额限制",
      prop: "quota_limit",
      type: "input-number",
      attrs: { min: 0, step: 1 },
      initialValue: 0,
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
