import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  labelWidth: 100,
  formItems: [
    {
      field: "phone",
      type: "input",
      label: "用户手机号",
      placeholder: "请输入用户手机号",
      colLayout: { span: 8 }
    },
    {
      field: "productName",
      type: "input",
      label: "产品名称",
      placeholder: "请输入产品名称",
      colLayout: { span: 8 }
    },
    {
      field: "dateRange",
      type: "daterange",
      label: "创建时间",
      placeholder: ["开始日期", "结束日期"],
      colLayout: { span: 8 }
    }
  ]
};

export default searchConfig;