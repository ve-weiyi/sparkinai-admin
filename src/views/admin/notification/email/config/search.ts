import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: "input",
      label: "邮箱",
      prop: "email",
      attrs: { placeholder: "请输入邮箱" },
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
