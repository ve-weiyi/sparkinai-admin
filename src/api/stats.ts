import request from "@/utils/request";
import type {
  ExportStatsReportReq,
  ExportStatsReportResp,
  GetDashboardStatsReq,
  GetDashboardStatsResp,
  GetGenerationTrendReq,
  GetGenerationTrendResp,
  GetModelUsageStatsReq,
  GetModelUsageStatsResp,
  GetPopularProductsReq,
  GetPopularProductsResp,
  GetRevenueTrendReq,
  GetRevenueTrendResp,
  GetUserActivityRankingReq,
  GetUserActivityRankingResp,
  GetUserGrowthTrendReq,
  GetUserGrowthTrendResp,
} from "./types";

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

  /** 导出统计报表 */
  exportStatsReport(data?: ExportStatsReportReq): Promise<IApiResponse<ExportStatsReportResp>> {
    return request({
      url: `/admin-api/v1/stats/export`,
      method: "POST",
      data: data,
    });
  },

  /** 获取生成统计趋势 */
  getGenerationTrend(
    params?: GetGenerationTrendReq
  ): Promise<IApiResponse<GetGenerationTrendResp>> {
    return request({
      url: `/admin-api/v1/stats/generation-trend`,
      method: "GET",
      params: params,
    });
  },

  /** 获取模型使用统计 */
  getModelUsageStats(
    params?: GetModelUsageStatsReq
  ): Promise<IApiResponse<GetModelUsageStatsResp>> {
    return request({
      url: `/admin-api/v1/stats/model-usage`,
      method: "GET",
      params: params,
    });
  },

  /** 获取热门产品统计 */
  getPopularProducts(
    params?: GetPopularProductsReq
  ): Promise<IApiResponse<GetPopularProductsResp>> {
    return request({
      url: `/admin-api/v1/stats/popular-products`,
      method: "GET",
      params: params,
    });
  },

  /** 获取收入统计趋势 */
  getRevenueTrend(params?: GetRevenueTrendReq): Promise<IApiResponse<GetRevenueTrendResp>> {
    return request({
      url: `/admin-api/v1/stats/revenue-trend`,
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

  /** 获取用户增长趋势 */
  getUserGrowthTrend(
    params?: GetUserGrowthTrendReq
  ): Promise<IApiResponse<GetUserGrowthTrendResp>> {
    return request({
      url: `/admin-api/v1/stats/user-growth-trend`,
      method: "GET",
      params: params,
    });
  },
};
