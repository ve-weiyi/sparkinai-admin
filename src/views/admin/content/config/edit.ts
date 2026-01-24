import type { IModalConfig } from "@/components/CURD/types";

const editModalConfig: IModalConfig = {
  title: "内容详情",
  formItems: [
    {
      field: "productName",
      type: "input",
      label: "产品名称",
      placeholder: "产品名称",
      disabled: true,
      colLayout: { span: 24 }
    },
    {
      field: "description",
      type: "textarea",
      label: "产品描述",
      placeholder: "产品描述",
      disabled: true,
      colLayout: { span: 24 }
    },
    {
      field: "copyResult",
      type: "textarea",
      label: "生成文案",
      placeholder: "生成文案",
      disabled: true,
      rows: 10,
      colLayout: { span: 24 }
    }
  ]
};

export default editModalConfig;