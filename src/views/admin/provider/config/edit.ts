import type { IModalConfig } from "@/components/CURD/types";
import { ProviderAPI } from "@/api/admin";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:provider",
  component: "dialog",
  dialog: { title: "编辑服务商", width: 500, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => ProviderAPI.updateProviderApi(data),
  formItems: [
    { label: "服务商名称", prop: "name", type: "input", rules: [{ required: true }] },
    { label: "代码", prop: "code", type: "input", rules: [{ required: true }] },
    { label: "状态", prop: "status", type: "switch", attrs: { activeValue: 1, inactiveValue: 0 } },
  ],
};

export default modalConfig;
