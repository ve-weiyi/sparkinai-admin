import request from "@/utils/request";

export interface DashboardStatsResp {
  total_users: number;
  new_users_today: number;
  active_users_today: number;
  total_generations: number;
  generations_today: number;
  success_rate: number;
  total_revenue: number;
  revenue_today: number;
  total_tokens_consumed: number;
  tokens_consumed_today: number;
  avg_generation_time: number;
}

export interface UserGrowthTrendItem {
  date: string;
  new_users: number;
  active_users: number;
}

export interface GetUserGrowthTrendReq {
  start_date: string;
  end_date: string;
}

export interface GetUserGrowthTrendResp {
  list: UserGrowthTrendItem[];
}

export interface GenerationTrendItem {
  date: string;
  total_generations: number;
  copy_generations: number;
  image_generations: number;
  success_generations: number;
  failed_generations: number;
}

export interface GetGenerationTrendReq {
  start_date: string;
  end_date: string;
}

export interface GetGenerationTrendResp {
  list: GenerationTrendItem[];
}

export interface RevenueTrendItem {
  date: string;
  revenue: number;
}

export interface GetRevenueTrendReq {
  start_date: string;
  end_date: string;
}

export interface GetRevenueTrendResp {
  list: RevenueTrendItem[];
}

export interface ModelUsageStatsItem {
  model_id: number;
  model_name: string;
  provider_name: string;
  usage_count: number;
  success_count: number;
  failed_count: number;
  success_rate: number;
  avg_latency: number;
}

export interface GetModelUsageStatsReq {
  start_date?: string;
  end_date?: string;
}

export interface GetModelUsageStatsResp {
  list: ModelUsageStatsItem[];
}

export interface PopularProductItem {
  product_name: string;
  generation_count: number;
  success_count: number;
}

export interface GetPopularProductsReq {
  limit?: number;
}

export interface GetPopularProductsResp {
  list: PopularProductItem[];
}

export class StatsAPI {
  static getDashboardStats() {
    return request<DashboardStatsResp>({
      url: "/admin-api/v1/stats/dashboard",
      method: "get",
    });
  }

  static getUserGrowthTrend(params: GetUserGrowthTrendReq) {
    return request<GetUserGrowthTrendResp>({
      url: "/admin-api/v1/stats/trend/user",
      method: "get",
      params,
    });
  }

  static getGenerationTrend(params: GetGenerationTrendReq) {
    return request<GetGenerationTrendResp>({
      url: "/admin-api/v1/stats/trend/generation",
      method: "get",
      params,
    });
  }

  static getRevenueTrend(params: GetRevenueTrendReq) {
    return request<GetRevenueTrendResp>({
      url: "/admin-api/v1/stats/trend/revenue",
      method: "get",
      params,
    });
  }

  static getModelUsageStats(params: GetModelUsageStatsReq) {
    return request<GetModelUsageStatsResp>({
      url: "/admin-api/v1/stats/usage/model",
      method: "get",
      params,
    });
  }

  static getPopularProducts(params: GetPopularProductsReq) {
    return request<GetPopularProductsResp>({
      url: "/admin-api/v1/stats/popular/products",
      method: "get",
      params,
    });
  }
}
