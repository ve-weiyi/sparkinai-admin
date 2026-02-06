import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    { prop: "user_id", label: "用户ID", type: "input" },
    { prop: "login_type", label: "登录类型", type: "input" },
    { prop: "status", label: "登录状态", type: "select", options: [
      { label: "成功", value: 1 },
      { label: "失败", value: 0 }
    ]},
  ],
};

export default searchConfig;
