import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: { placeholder: "请输入配置键/描述" }
    },
    {
      type: "input",
      label: "分类",
      prop: "category",
      attrs: { placeholder: "请输入分类" }
    },
  ],
};

export default searchConfig;
