import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    { prop: "user_id", label: "用户ID", type: "input" },
    { prop: "file_type", label: "文件类型", type: "input" },
  ],
};

export default searchConfig;
