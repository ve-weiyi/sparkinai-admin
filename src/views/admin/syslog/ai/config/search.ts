import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    { prop: "user_id", label: "用户ID", type: "input" },
    { prop: "engine_id", label: "引擎ID", type: "input" },
  ],
};

export default searchConfig;
