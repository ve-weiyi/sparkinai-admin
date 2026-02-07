import { defineMock } from "./base";

export default defineMock([
  {
    url: "/admin-api/v1/stats/dashboard",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        total_users: 1250,
        new_users: 48,
        total_generations: 45680,
        new_generations: 920,
        revenue: 1532.6,
        api_cost: 892.4,
      },
      msg: "success",
    },
  },
]);
