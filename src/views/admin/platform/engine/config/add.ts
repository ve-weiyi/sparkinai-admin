import type { IModalConfig } from "@/components/CURD/types";
import { EngineAPI } from "@/api/engine";
import { ModelAPI } from "@/api/model";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:engine",
  component: "dialog",
  dialog: { title: "新增配置", width: 700, draggable: true },
  form: { labelWidth: 120 },
  formAction: (data) => EngineAPI.createEngineConfig(data),
  formItems: [
    { label: "配置名称", prop: "name", type: "input", rules: [{ required: true, message: "请输入配置名称" }] },
    {
      label: "引擎类型",
      prop: "engine_type",
      type: "select",
      rules: [{ required: true, message: "请选择引擎类型" }],
      options: [
        { label: "文案生成 (Copy)", value: "copy" },
        { label: "图片生成 (Image)", value: "image" },
      ]
    },
    {
      label: "模型",
      prop: "model_id",
      type: "select",
      rules: [{ required: true, message: "请选择模型" }],
      options: [],
      initFn: async (item) => {
        const res = await ModelAPI.getModelList({ page: 1, page_size: 100, status: 1 });
        item.options = res.data.list.map(m => ({ label: `${m.provider_name} - ${m.name}`, value: m.id }));
      }
    },
    { label: "系统提示词", prop: "system_prompt", type: "input", attrs: { type: "textarea", rows: 3 } },
    { label: "用户提示词模板", prop: "user_prompt_template", type: "input", attrs: { type: "textarea", rows: 3, placeholder: "可选，用于包装用户输入" } },
    { label: "Temperature", prop: "temperature", type: "input-number", attrs: { min: 0, max: 2, step: 0.1, precision: 1 }, initialValue: 0.7 },
    { label: "最大Token", prop: "max_tokens", type: "input-number", attrs: { min: 1, step: 100 }, initialValue: 2000 },
    { label: "Top P", prop: "top_p", type: "input-number", attrs: { min: 0, max: 1, step: 0.05, precision: 2 }, initialValue: 0.95 },
    { label: "频率惩罚", prop: "frequency_penalty", type: "input-number", attrs: { min: -2, max: 2, step: 0.1, precision: 1 }, initialValue: 0 },
    { label: "存在惩罚", prop: "presence_penalty", type: "input-number", attrs: { min: -2, max: 2, step: 0.1, precision: 1 }, initialValue: 0 },
    { label: "额外参数(JSON)", prop: "extra_params", type: "input", attrs: { type: "textarea", rows: 2, placeholder: "{}" } },
    { label: "设为默认", prop: "is_default", type: "switch", attrs: { activeValue: 1, inactiveValue: 0 } },
    { label: "状态", prop: "status", type: "switch", attrs: { activeValue: 1, inactiveValue: 2, activeText: "启用", inactiveText: "禁用" }, initialValue: 1 },
  ],
};

export default modalConfig;
