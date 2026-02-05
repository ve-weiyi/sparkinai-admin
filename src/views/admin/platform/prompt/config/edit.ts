import type {IModalConfig} from "@/components/CURD/types";

const editConfig: IModalConfig = {
  permPrefix: "admin:prompt",
  dialog: {
    title: "编辑提示词",
  },
  formItems: [
    {
      type: "input",
      label: "名称",
      prop: "name",
      rules: [{required: true, message: "请输入名称"}],
      attrs: {placeholder: "请输入提示词名称"},
    },
    {
      type: "input",
      label: "标签",
      prop: "tags",
      attrs: {placeholder: "请输入标签，多个标签用逗号分隔"},
    },
    {
      type: "select",
      label: "类型",
      prop: "type",
      rules: [{required: true, message: "请选择类型"}],
      options: [
        {label: "系统", value: "system"},
        {label: "用户", value: "user"},
        {label: "助手", value: "assistant"},
      ],
      attrs: {placeholder: "请选择类型"},
    },
    {
      type: "input",
      label: "内容",
      prop: "content",
      rules: [{required: true, message: "请输入提示词内容"}],
      attrs: {type: "textarea", placeholder: "请输入提示词内容", rows: 5},
    },
    {
      type: "input-number",
      label: "排序",
      prop: "sort_order",
      attrs: {placeholder: "请输入排序值", min: 0},
    },
    {
      type: "radio",
      label: "状态",
      prop: "status",
      options: [
        {label: "启用", value: 1},
        {label: "禁用", value: 2},
      ],
    },
  ],
};

export default editConfig;