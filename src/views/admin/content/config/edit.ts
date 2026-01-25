import type { IModalConfig } from "@/components/CURD/types";

const editModalConfig: IModalConfig = {
  dialog: {
    title: "内容详情"
  },
  formItems: [
    {
      prop: "productName",
      type: "input",
      label: "产品名称",
      attrs: {
        placeholder: "产品名称",
        disabled: true
      },
      col: { span: 24 }
    },
    {
      prop: "description",
      type: "input",
      label: "产品描述",
      attrs: {
        type: "textarea",
        placeholder: "产品描述",
        disabled: true
      },
      col: { span: 24 }
    },
    {
      prop: "copyResult",
      type: "input",
      label: "生成文案",
      attrs: {
        type: "textarea",
        placeholder: "生成文案",
        disabled: true,
        rows: 10
      },
      col: { span: 24 }
    }
  ]
};

export default editModalConfig;