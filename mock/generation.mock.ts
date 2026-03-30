import { defineMock } from "./base";

export default defineMock([
  // 获取生成记录列表
  {
    url: "/api/v1/generations",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            generation_id: "d4e463d4-3c78-4e90-bc9b-6fd4321b4583",
            user_id: "1",
            product_name: "Ad Copy",
            prompt: "chikawa产品",
            result: "生成结果",
            generation_type: "copy",
            status: 1,
            error_message: "",
            input_tokens: 410,
            output_tokens: 363,
            cost_tokens: 773,
            cost_charge: 0.01,
            generation_time: 7,
            engine_id: 1,
            created_at: 1711785600000,
            updated_at: 1711785607000,
          },
        ],
        total: 1,
        page: 1,
        page_size: 10,
      },
      msg: "success",
    },
  },
  // 删除生成记录
  {
    url: "/api/v1/generations/:id",
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
  // 批量删除生成记录
  {
    url: "/api/v1/generations/batch-delete",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        success_count: 1,
      },
      msg: "success",
    },
  },
]);
