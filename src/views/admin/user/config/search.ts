import type {ISearchConfig} from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:user",
  formItems: [
    {
      type: "input",
      label: "手机号",
      prop: "phone",
      attrs: {placeholder: "请输入", clearable: true, style: {width: "150px"}},
    },
    {
      type: "input",
      label: "用户名",
      prop: "username",
      attrs: {placeholder: "请输入", clearable: true, style: {width: "150px"}},
    },
  ],
};

export default searchConfig;
