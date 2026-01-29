import { defineMock } from "./base";

export default defineMock([
  // 获取模型列表
  {
    url: "/admin-api/v1/models",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            provider_id: 1,
            provider_name: "OpenAI",
            name: "GPT-4",
            code: "gpt-4",
            model_type: "text",
            description: "Most capable model",
            max_tokens: 8192,
            support_vision: 1,
            status: 1,
            sort_order: 1,
            created_at: "2023-01-01 10:00:00",
            updated_at: "2023-01-01 10:00:00",
          },
          {
            id: 2,
            provider_id: 1,
            provider_name: "OpenAI",
            name: "GPT-3.5 Turbo",
            code: "gpt-3.5-turbo",
            model_type: "text",
            description: "Fast and cheap",
            max_tokens: 4096,
            support_vision: 0,
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
  // 创建模型
  {
    url: "/admin-api/v1/models",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        id: 3,
      },
      msg: "success",
    },
  },
  // 更新模型
  {
    url: "/admin-api/v1/models/:id",
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
  // 删除模型
  {
    url: "/admin-api/v1/models/:id",
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
