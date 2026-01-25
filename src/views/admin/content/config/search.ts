import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  form: {
    labelWidth: 100
  },
  formItems: [
    {
      prop: "phone",
      type: "input",
      label: "用户手机号",
      attrs: {
        placeholder: "请输入用户手机号"
      },
      col: { span: 8 }
    },
    {
      prop: "productName",
      type: "input",
      label: "产品名称",
      attrs: {
        placeholder: "请输入产品名称"
      },
      col: { span: 8 }
    },
    {
      prop: "dateRange",
      type: "date-picker",
      label: "创建时间",
      attrs: {
        type: "daterange",
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期"
      },
      col: { span: 8 }
    }
  ]
};

export default searchConfig;