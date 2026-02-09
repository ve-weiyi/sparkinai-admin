import type { IModalConfig } from "@/components/CURD/types";
import { ModelAPI } from "@/api/model";
import { EnableStatusEnum, YesNoEnum } from "@/enums";
import { AI_MODEL_TYPE_OPTIONS } from "@/constants/options";
import { useProvider } from "@/composables/useProvider";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:model",
  component: "dialog",
  dialog: { title: "新增模型", width: 600, draggable: true },
  form: { labelWidth: 100 },
  formAction: (data) => ModelAPI.createModel(data),
  formItems: [
    {
      label: "服务商",
      prop: "provider_id",
      type: "select",
      rules: [{ required: true, message: "请选择服务商" }],
      options: [],
      initFn: async (item) => {
        const { loadProviderOptions } = useProvider();
        item.options = await loadProviderOptions();
      },
    },
    {
      label: "模型名称",
      prop: "name",
      type: "input",
      rules: [{ required: true, message: "请输入模型名称" }],
    },
    {
      label: "模型代码",
      prop: "code",
      type: "input",
      rules: [{ required: true, message: "请输入模型代码" }],
    },
    {
      label: "模型类型",
      prop: "model_type",
      type: "select",
      rules: [{ required: true, message: "请选择模型类型" }],
      options: AI_MODEL_TYPE_OPTIONS,
    },
    { label: "最大Token", prop: "max_tokens", type: "input-number", attrs: { min: 0 } },
    {
      label: "视觉支持",
      prop: "support_vision",
      type: "switch",
      attrs: {
        activeValue: YesNoEnum.YES,
        inactiveValue: YesNoEnum.NO,
        activeText: "支持",
        inactiveText: "不支持",
      },
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
    },
  ],
};

export default modalConfig;
