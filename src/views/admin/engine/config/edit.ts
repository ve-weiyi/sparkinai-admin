import type { IModalConfig } from "@/components/CURD/types";
import { EngineConfigAPI } from "@/api/admin";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:engine",
  component: "dialog",
  dialog: { title: "编辑配置", width: 600, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => EngineConfigAPI.updateEngineConfigApi(data),
  formItems: [
    { label: "配置类型", prop: "type", type: "select", rules: [{ required: true }], options: [{ label: "文案生成", value: "text" }, { label: "图片生成", value: "image" }] },
    { label: "配置名称", prop: "name", type: "input", rules: [{ required: true }] },
    { label: "提示词", prop: "prompt", type: "input", attrs: { type: "textarea", rows: 4 } },
    { label: "状态", prop: "status", type: "switch", attrs: { activeValue: 1, inactiveValue: 0 } },
  ],
};

export default modalConfig;
