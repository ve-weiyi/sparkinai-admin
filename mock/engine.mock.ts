import { defineMock } from "./base";

export default defineMock([
  // 获取引擎配置列表
  {
    url: "/admin-api/v1/engines",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            name: "Default Chat Engine",
            engine_type: "chat",
            model_id: 1,
            model_name: "GPT-4",
            system_prompt: "You are a helpful assistant.",
            user_prompt_template: "{{query}}",
            temperature: 0.7,
            max_tokens: 2000,
            top_p: 1.0,
            frequency_penalty: 0,
            presence_penalty: 0,
            extra_params: "{}",
            is_default: 1,
            status: 1,
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
  // 创建引擎配置
  {
    url: "/admin-api/v1/engines",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        id: 2,
      },
      msg: "success",
    },
  },
  // 更新引擎配置
  {
    url: "/admin-api/v1/engines/:id",
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
  // 删除引擎配置
  {
    url: "/admin-api/v1/engines/:id",
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
