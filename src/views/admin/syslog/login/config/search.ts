import type { ISearchConfig } from "@/components/CURD/types";
import { LOGIN_STATUS_OPTIONS } from "@/constants/options";

const searchConfig: ISearchConfig = {
  formItems: [
    { prop: "user_id", label: "用户ID", type: "input" },
    { prop: "login_type", label: "登录类型", type: "input" },
    { prop: "status", label: "登录状态", type: "select", options: LOGIN_STATUS_OPTIONS },
  ],
};

export default searchConfig;
