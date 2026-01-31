import request from "@/utils/request";


export interface ExportStatsReportReq {
  report_type: string; // 报表类型
  start_date: string; // 开始日期 YYYY-MM-DD
  end_date: string; // 结束日期 YYYY-MM-DD
  format?: string; // 导出格式
}

export interface ExportStatsReportResp {
  file_url: string; // 文件下载URL
}

export interface GenerationTrendItem {
  date: string; // 日期
  total_generations: number; // 总生成次数
  copy_generations: number; // 文案生成次数
  image_generations: number; // 图片生成次数
  success_generations: number; // 成功生成次数
  failed_generations: number; // 失败生成次数
}

export interface GetDashboardStatsReq {
}

export interface GetDashboardStatsResp {
  total_users: number; // 总用户数
  new_users_today: number; // 今日新增用户
  active_users_today: number; // 今日活跃用户
  total_generations: number; // 总生成次数
  generations_today: number; // 今日生成次数
  success_rate: number; // 成功率
  total_revenue: number; // 总收入
  revenue_today: number; // 今日收入
  total_tokens_consumed: number; // 总消耗token数
  tokens_consumed_today: number; // 今日消耗token数
  avg_generation_time: number; // 平均生成耗时（秒）
}

export interface GetGenerationTrendReq {
  start_date: string; // 开始日期 YYYY-MM-DD
  end_date: string; // 结束日期 YYYY-MM-DD
}

export interface GetGenerationTrendResp {
  list: GenerationTrendItem[]; // 趋势数据列表
}

export interface GetModelUsageStatsReq {
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

export interface GetModelUsageStatsResp {
  list: ModelUsageStatsItem[]; // 统计数据列表
}

export interface GetPopularProductsReq {
  limit?: number; // 返回数量限制
}

export interface GetPopularProductsResp {
  list: PopularProductItem[]; // 热门产品列表
}

export interface GetRevenueTrendReq {
  start_date: string; // 开始日期 YYYY-MM-DD
  end_date: string; // 结束日期 YYYY-MM-DD
}

export interface GetRevenueTrendResp {
  list: RevenueTrendItem[]; // 趋势数据列表
}

export interface GetUserActivityRankingReq {
  limit?: number; // 返回数量限制
}

export interface GetUserActivityRankingResp {
  list: UserActivityRankingItem[]; // 用户活跃度排行列表
}

export interface GetUserGrowthTrendReq {
  start_date: string; // 开始日期 YYYY-MM-DD
  end_date: string; // 结束日期 YYYY-MM-DD
}

export interface GetUserGrowthTrendResp {
  list: UserGrowthTrendItem[]; // 趋势数据列表
}

export interface ModelUsageStatsItem {
  model_id: number; // 模型ID
  model_name: string; // 模型名称
  provider_name: string; // 供应商名称
  usage_count: number; // 使用次数
  success_count: number; // 成功次数
  failed_count: number; // 失败次数
  success_rate: number; // 成功率
  avg_latency: number; // 平均延迟（毫秒）
}

export interface PopularProductItem {
  product_name: string; // 产品名称
  generation_count: number; // 生成次数
  success_count: number; // 成功次数
  last_generated_at: number; // 最后生成时间
}

export interface RevenueTrendItem {
  date: string; // 日期
  revenue: number; // 收入金额
}

export interface UserActivityRankingItem {
  user_id: string; // 用户ID
  phone: string; // 手机号
  nickname: string; // 昵称
  generation_count: number; // 生成次数
  tokens_consumed: number; // 消耗token数
  last_generated_at: number; // 最后生成时间
}

export interface UserGrowthTrendItem {
  date: string; // 日期
  new_users: number; // 新增用户数
  active_users: number; // 活跃用户数
}


export const StatsAPI = {
  /** 获取仪表盘统计数据 */
  getDashboardStats(data?: GetDashboardStatsReq): Promise<IApiResponse<GetDashboardStatsResp>> {
    return request({
      url: "/admin-api/v1/stats/dashboard",
      method: "GET",
      data: data,
    });
  },

  /** 导出统计报表 */
  exportStatsReport(data?: ExportStatsReportReq): Promise<IApiResponse<ExportStatsReportResp>> {
    return request({
      url: "/admin-api/v1/stats/export",
      method: "POST",
      data: data,
    });
  },

  /** 获取生成统计趋势 */
  getGenerationTrend(data?: GetGenerationTrendReq): Promise<IApiResponse<GetGenerationTrendResp>> {
    return request({
      url: "/admin-api/v1/stats/generation-trend",
      method: "GET",
      data: data,
    });
  },

  /** 获取模型使用统计 */
  getModelUsageStats(data?: GetModelUsageStatsReq): Promise<IApiResponse<GetModelUsageStatsResp>> {
    return request({
      url: "/admin-api/v1/stats/model-usage",
      method: "GET",
      data: data,
    });
  },

  /** 获取热门产品统计 */
  getPopularProducts(data?: GetPopularProductsReq): Promise<IApiResponse<GetPopularProductsResp>> {
    return request({
      url: "/admin-api/v1/stats/popular-products",
      method: "GET",
      data: data,
    });
  },

  /** 获取收入统计趋势 */
  getRevenueTrend(data?: GetRevenueTrendReq): Promise<IApiResponse<GetRevenueTrendResp>> {
    return request({
      url: "/admin-api/v1/stats/revenue-trend",
      method: "GET",
      data: data,
    });
  },

  /** 获取用户活跃度排行 */
  getUserActivityRanking(data?: GetUserActivityRankingReq): Promise<IApiResponse<GetUserActivityRankingResp>> {
    return request({
      url: "/admin-api/v1/stats/user-activity-ranking",
      method: "GET",
      data: data,
    });
  },

  /** 获取用户增长趋势 */
  getUserGrowthTrend(data?: GetUserGrowthTrendReq): Promise<IApiResponse<GetUserGrowthTrendResp>> {
    return request({
      url: "/admin-api/v1/stats/user-growth-trend",
      method: "GET",
      data: data,
    });
  },
};
