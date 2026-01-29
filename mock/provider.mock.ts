import { defineMock } from "./base";

export default defineMock([
  // 获取服务商列表
  {
    url: "/admin-api/v1/providers",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            name: "OpenAI",
            code: "openai",
            base_url: "https://api.openai.com",
            description: "OpenAI Official API",
            status: 1,
            sort_order: 1,
            created_at: "2023-01-01 10:00:00",
            updated_at: "2023-01-01 10:00:00",
          },
          {
            id: 2,
            name: "Anthropic",
            code: "anthropic",
            base_url: "https://api.anthropic.com",
            description: "Anthropic Official API",
            status: 1,
            sort_order: 2,
            created_at: "2023-01-02 10:00:00",
            updated_at: "2023-01-02 10:00:00",
          },
        ],
        total: 2,
        page: 1,
        page_size: 10,
      },
      msg: "success",
    },
  },
  // 创建服务商
  {
    url: "/admin-api/v1/providers",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        id: 3,
      },
      msg: "success",
    },
  },
  // 更新服务商
  {
    url: "/admin-api/v1/providers/:id",
    method: ["PUT"],
    body: {
      code: 200,
      data: {
        success: true,
        message: "Updated successfully",
      },
      msg: "success",
    },
  },
  // 删除服务商
  {
    url: "/admin-api/v1/providers/:id",
    method: ["DELETE"],
    body: {
      code: 200,
      data: {
        success: true,
        message: "Deleted successfully",
      },
      msg: "success",
    },
  },
]);
