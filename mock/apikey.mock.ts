import { defineMock } from "./base";

export default defineMock([
  // 获取API Key列表
  {
    url: "/admin-api/v1/api-keys",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            provider_id: 1,
            provider_name: "OpenAI",
            name: "Key 1",
            profile: "default",
            api_key: "sk-...",
            priority: 1,
            quota_limit: 100,
            quota_used: 10,
            quota_reset_at: "2023-02-01 00:00:00",
            status: 1,
            last_used_at: "2023-01-01 12:00:00",
            created_at: "2023-01-01 10:00:00",
            updated_at: "2023-01-01 10:00:00",
          },
        ],
        total: 1,
        page: 1,
        page_size: 10,
      },
      msg: "success",
    },
  },
  // 创建API Key
  {
    url: "/admin-api/v1/api-keys",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        id: 2,
      },
      msg: "success",
    },
  },
  // 更新API Key
  {
    url: "/admin-api/v1/api-keys/:id",
    method: ["PUT"],
    body: {
      code: 200,
      data: {
        success: true,
      },
      msg: "success",
    },
  },
  // 删除API Key
  {
    url: "/admin-api/v1/api-keys/:id",
    method: ["DELETE"],
    body: {
      code: 200,
      data: {
        success: true,
      },
      msg: "success",
    },
  },
  // 测试API Key
  {
    url: "/admin-api/v1/api-keys/:id/test",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        success: true,
        message: "Connection successful",
        latency: 150,
      },
      msg: "success",
    },
  },
]);
