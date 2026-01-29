import type {ISearchConfig} from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:user",
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: {placeholder: "请输入手机号/昵称", clearable: true, style: {width: "180px"}},
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      attrs: {placeholder: "请选择", clearable: true, style: {width: "120px"}},
      options: [
        {label: "正常", value: 1},
        {label: "禁用", value: 2},
      ]
    },
  ],
};

export default searchConfig;
