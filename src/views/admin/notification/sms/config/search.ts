import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: "input",
      label: "手机号",
      prop: "phone",
      attrs: { placeholder: "请输入手机号" },
    },
    {
      type: "input",
      label: "场景",
      prop: "scene",
      attrs: { placeholder: "请输入场景" },
    },
    {
      type: "input",
      label: "状态",
      prop: "status",
      attrs: { placeholder: "请输入状态" },
    },
  ],
};

export default searchConfig;
