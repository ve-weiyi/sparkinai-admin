import type { IModalConfig } from "@/components/CURD/types";
import { ApiKeyAPI } from "@/api/apikey";
import { ProviderAPI } from "@/api/provider";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:apikey",
  component: "dialog",
  dialog: { title: "编辑API密钥", width: 600, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => {
    const updateData = { ...data };
    if (!updateData.api_key) delete updateData.api_key;
    if (!updateData.secret_key) delete updateData.secret_key;
    return ApiKeyAPI.updateApiKey(updateData);
  },
  formItems: [
    {
      label: "服务商",
      prop: "provider_id",
      type: "select",
      attrs: { disabled: true },
      options: [],
      initFn: async (item) => {
        const res = await ProviderAPI.getProviderList({ page: 1, page_size: 100 });
        item.options = res.data.list.map(p => ({ label: p.name, value: p.id }));
      }
    },
    { label: "名称", prop: "name", type: "input", rules: [{ required: true, message: "请输入名称" }] },
    { label: "API Key", prop: "api_key", type: "input", attrs: { placeholder: "留空不修改" } },
    { label: "Secret Key", prop: "secret_key", type: "input", attrs: { placeholder: "留空不修改" } },
    { label: "Profile", prop: "profile", type: "input", attrs: { disabled: true } },
    { label: "优先级", prop: "priority", type: "input-number", attrs: { min: 0, step: 1 } },
    { label: "配额限制", prop: "quota_limit", type: "input-number", attrs: { min: 0, step: 1 } },
    {
      label: "状态",
      prop: "status",
      type: "switch",
      attrs: { activeValue: 1, inactiveValue: 2, activeText: "启用", inactiveText: "禁用" },
    },
  ],
};

export default modalConfig;
