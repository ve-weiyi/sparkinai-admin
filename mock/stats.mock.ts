import { defineMock } from "./base";

export default defineMock([
  // 获取仪表盘统计数据
  {
    url: "/admin-api/v1/dashboard/stats",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        total_users: 100,
        today_new_users: 5,
        total_generations: 5000,
        today_generations: 200,
        total_tokens_used: 1000000,
        today_tokens_used: 50000,
        total_revenue: 5000.00,
        today_revenue: 200.00,
      },
      msg: "success",
    },
  },
]);
