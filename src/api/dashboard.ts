import request from "@/utils/request";

export interface DashboardStats {
  total_users: number;
  total_users_change: number;
  total_content: number;
  new_users_today: number;
  content_today: number;
  total_consume: number;
  today_income: number;
  today_cost: number;
}

export const DashboardAPI = {
  getStatsApi(): Promise<IApiResponse<DashboardStats>> {
    return request({
      url: "/admin-api/v1/dashboard/stats",
      method: "GET",
    });
  },
};
