import type { IModalConfig } from "@/components/CURD/types";
import { EngineAPI } from "@/api/engine";
import { EnableStatusEnum, YesNoEnum } from "@/enums";
import { AI_ENGINE_TYPE_OPTIONS } from "@/constants/options";
import { useModel } from "@/composables/useModel";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:engine",
  component: "dialog",
  dialog: { title: "编辑配置", width: 700, draggable: true },
  form: { labelWidth: 120 },
  formAction: (data) => EngineAPI.updateEngine(data),
  formItems: [
    {
      label: "配置名称",
      prop: "name",
      type: "input",
      rules: [{ required: true, message: "请输入配置名称" }],
    },
    {
      label: "引擎类型",
      prop: "engine_type",
      type: "select",
      options: AI_ENGINE_TYPE_OPTIONS,
    },
    {
      label: "模型",
      prop: "model_id",
      type: "select",
      rules: [{ required: true, message: "请选择模型" }],
      options: [],
      initFn: async (item) => {
        const { loadModelOptions } = useModel();
        item.options = await loadModelOptions();
      },
    },
    {
      label: "系统提示词",
      prop: "system_prompt",
      type: "input",
      attrs: { type: "textarea", rows: 3 },
    },
    {
      label: "用户提示词模板",
      prop: "user_prompt_template",
      type: "input",
      attrs: { type: "textarea", rows: 3 },
    },
    {
      label: "Temperature",
      prop: "temperature",
      type: "input-number",
      attrs: { min: 0, max: 2, step: 0.1, precision: 1 },
    },
    {
      label: "最大Token",
      prop: "max_tokens",
      type: "input-number",
      attrs: { min: 1, step: 100 },
    },
    {
      label: "Top P",
      prop: "top_p",
      type: "input-number",
      attrs: { min: 0, max: 1, step: 0.05, precision: 2 },
    },
    {
      label: "频率惩罚",
      prop: "frequency_penalty",
      type: "input-number",
      attrs: { min: -2, max: 2, step: 0.1, precision: 1 },
    },
    {
      label: "存在惩罚",
      prop: "presence_penalty",
      type: "input-number",
      attrs: { min: -2, max: 2, step: 0.1, precision: 1 },
    },
    {
      label: "额外参数(JSON)",
      prop: "extra_params",
      type: "input",
      attrs: { type: "textarea", rows: 2 },
    },
    {
      label: "设为默认",
      prop: "is_default",
      type: "switch",
      attrs: { activeValue: YesNoEnum.YES, inactiveValue: YesNoEnum.NO },
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
    },
  ],
};

export default modalConfig;
