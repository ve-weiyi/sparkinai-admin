import type { IModalConfig } from "@/components/CURD/types";
import { ModelAPI } from "@/api/model";
import { ProviderAPI } from "@/api/provider";

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
        const res = await ProviderAPI.getProviderList({
          page: 1,
          page_size: 100,
          status: 1,
        });
        item.options = res.data.list.map((p) => ({ label: p.name, value: p.id }));
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
      options: [
        { label: "文本", value: "text" },
        { label: "图片", value: "image" },
        { label: "嵌入", value: "embedding" },
      ],
    },
    { label: "最大Token", prop: "max_tokens", type: "input-number", attrs: { min: 0 } },
    {
      label: "视觉支持",
      prop: "support_vision",
      type: "switch",
      attrs: {
        activeValue: 1,
        inactiveValue: 0,
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
        activeValue: 1,
        inactiveValue: 2,
        activeText: "启用",
        inactiveText: "禁用",
      },
    },
  ],
};

export default modalConfig;
