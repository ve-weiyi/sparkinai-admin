import type {ISearchConfig} from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:provider",
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: {placeholder: "服务商名称/代码", clearable: true, style: {width: "150px"}},
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      options: [
        {label: "启用", value: 1},
        {label: "禁用", value: 2},
      ],
      attrs: {placeholder: "全部", clearable: true, style: {width: "100px"}},
    },
  ],
};

export default searchConfig;
