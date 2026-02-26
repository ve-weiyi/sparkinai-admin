import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: "input",
      label: "用户ID",
      prop: "user_id",
      attrs: { placeholder: "请输入用户ID" },
    },
    {
      type: "select",
      label: "是否已读",
      prop: "only_unread",
      attrs: { placeholder: "请选择" },
      options: [
        { label: "全部", value: 0 },
        { label: "仅未读", value: 1 },
      ],
    },
  ],
};

export default searchConfig;
