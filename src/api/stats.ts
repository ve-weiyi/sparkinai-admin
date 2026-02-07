import request from "@/utils/request";
import type { GetDashboardStatsReq, GetDashboardStatsResp } from "./types";

/** 统计分析 */
export const StatsAPI = {
  /** 获取仪表盘统计数据 */
  getDashboardStats(params?: GetDashboardStatsReq): Promise<IApiResponse<GetDashboardStatsResp>> {
    return request({
      url: `/admin-api/v1/stats/dashboard`,
      method: "GET",
      params: params,
    });
  },
};
