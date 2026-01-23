import { defineMock } from "./base";

export default defineMock([
  {
    url: "/admin-api/v1/dashboard/stats",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        user_count: 1250,
        provider_count: 8,
        model_count: 32,
        apikey_count: 15,
        total_requests: 45680,
        total_tokens: 12500000,
      },
      msg: "success",
    },
  },
]);
