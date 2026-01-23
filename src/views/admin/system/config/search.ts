import type {ISearchConfig} from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:system",
  formItems: [
    {
      type: "input",
      label: "配置键",
      prop: "key",
      attrs: {placeholder: "请输入", clearable: true, style: {width: "150px"}},
    },
  ],
};

export default searchConfig;
