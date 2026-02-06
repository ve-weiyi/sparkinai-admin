import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    { prop: "user_id", label: "用户ID", type: "input" },
    { prop: "module", label: "操作模块", type: "input" },
  ],
};

export default searchConfig;
