import type { IModalConfig } from "@/components/CURD/types";
import { AgentAgentAPI } from "@/api";
import { EnableStatusEnum } from "@/enums";
import { AGENT_TYPE_OPTIONS, AGENT_MODEL_KEY_OPTIONS } from "@/constants/options";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:agent",
  component: "dialog",
  dialog: { title: "编辑 Agent", width: 720, draggable: true },
  form: { labelWidth: 110 },
  formAction: (data) => AgentAgentAPI.updateAgent(data),
  formItems: [
    {
      label: "名称",
      prop: "name",
      type: "input",
      rules: [{ required: true, message: "请输入名称" }],
    },
    {
      label: "别名",
      prop: "alias_name",
      type: "input",
    },
    {
      label: "类型",
      prop: "agent_type",
      type: "select",
      options: AGENT_TYPE_OPTIONS,
    },
    {
      label: "模型 Key",
      prop: "model_key",
      type: "select",
      options: AGENT_MODEL_KEY_OPTIONS,
      attrs: { clearable: true },
    },
    {
      label: "描述",
      prop: "description",
      type: "input",
      attrs: { type: "textarea", rows: 2 },
    },
    {
      label: "系统提示词",
      prop: "instruction",
      type: "input",
      attrs: { type: "textarea", rows: 4 },
    },
    {
      label: "Skills",
      prop: "skills",
      type: "input",
      attrs: { placeholder: "逗号分隔，如 analysis,copy" },
    },
    {
      label: "Tools",
      prop: "tools",
      type: "input",
      attrs: { placeholder: "逗号分隔，如 image_generation" },
    },
    {
      label: "子 Agents",
      prop: "sub_agents",
      type: "input",
      attrs: { placeholder: "逗号分隔子 Agent key，如 chat,doc_qa" },
    },
    {
      label: "Temperature",
      prop: "temperature",
      type: "input-number",
      attrs: { min: 0, max: 2, step: 0.1, precision: 1 },
    },
    {
      label: "最大 Token",
      prop: "max_tokens",
      type: "input-number",
      attrs: { min: 1, step: 100 },
    },
    {
      label: "排序",
      prop: "sort_order",
      type: "input-number",
      attrs: { min: 0 },
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
