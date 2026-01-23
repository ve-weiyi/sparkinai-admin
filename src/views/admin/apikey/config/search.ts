import type {ISearchConfig} from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:apikey",
  formItems: [
    {
      type: "input",
      label: "密钥名称",
      prop: "name",
      attrs: {placeholder: "请输入", clearable: true, style: {width: "150px"}},
    },
  ],
};

export default searchConfig;
