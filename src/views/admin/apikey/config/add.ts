import type { IModalConfig } from "@/components/CURD/types";
import { ApiKeyAPI, ProviderAPI } from "@/api/admin";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:apikey",
  component: "dialog",
  dialog: { title: "新增API密钥", width: 500, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => ApiKeyAPI.addApiKeyApi(data),
  formItems: [
    {
      label: "服务商",
      prop: "provider_id",
      type: "select",
      rules: [{ required: true, message: "服务商不能为空", trigger: "blur" }],
      options: [],
      async initFn(item) {
        const res = await ProviderAPI.findProviderListApi({ page: 1, page_size: 100 });
        item.options = res.data.list.map((p: any) => ({ label: p.name, value: p.id }));
      },
    },
    { label: "密钥名称", prop: "name", type: "input", rules: [{ required: true }] },
    { label: "密钥", prop: "key", type: "input", rules: [{ required: true }], attrs: { type: "password", showPassword: true } },
    { label: "优先级", prop: "priority", type: "input-number", attrs: { min: 0 } },
    { label: "状态", prop: "status", type: "switch", attrs: { activeValue: 1, inactiveValue: 0 } },
  ],
};

export default modalConfig;
