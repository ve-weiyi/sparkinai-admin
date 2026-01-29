import { defineMock } from "./base";

export default defineMock([
  // 获取生成记录列表
  {
    url: "/admin-api/v1/generations",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            user_id: "1",
            user_phone: "13800138001",
            product_name: "Ad Copy",
            generation_type: "text",
            status: 1,
            cost_tokens: 150,
            generation_time: 2.5,
            created_at: "2023-01-01 10:00:00",
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
    url: "/admin-api/v1/generations/:id",
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
    url: "/admin-api/v1/generations/batch-delete",
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
