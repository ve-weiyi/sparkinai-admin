import request from "@/utils/request";
import type {
  GetAiUsageStatsReq,
  GetAiUsageStatsResp,
  GetDashboardStatsReq,
  GetDashboardStatsResp,
  GetDashboardTrendReq,
  GetDashboardTrendResp,
  GetUserActivityRankingReq,
  GetUserActivityRankingResp,
} from "./types";

/** 统计分析 */
export const StatsAPI = {
  /** 获取AI使用统计 */
  getAiUsageStats(params?: GetAiUsageStatsReq): Promise<IApiResponse<GetAiUsageStatsResp>> {
    return request({
      url: `/admin-api/v1/stats/ai-usage`,
      method: "GET",
      params: params,
    });
  },

  /** 获取仪表盘统计数据 */
  getDashboardStats(params?: GetDashboardStatsReq): Promise<IApiResponse<GetDashboardStatsResp>> {
    return request({
      url: `/admin-api/v1/stats/dashboard`,
      method: "GET",
      params: params,
    });
  },

  /** 获取仪表盘统计增长趋势 */
  getDashboardTrend(params?: GetDashboardTrendReq): Promise<IApiResponse<GetDashboardTrendResp>> {
    return request({
      url: `/admin-api/v1/stats/trend`,
      method: "GET",
      params: params,
    });
  },

  /** 获取用户活跃度排行 */
  getUserActivityRanking(
    params?: GetUserActivityRankingReq
  ): Promise<IApiResponse<GetUserActivityRankingResp>> {
    return request({
      url: `/admin-api/v1/stats/user-activity-ranking`,
      method: "GET",
      params: params,
    });
  },
};
