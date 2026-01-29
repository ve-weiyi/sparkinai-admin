import { defineMock } from "./base";

export default defineMock([
  // 获取系统配置列表
  {
    url: "/admin-api/v1/system/configs",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            config_key: "site_name",
            config_value: "SparkInAI",
            config_type: "string",
            description: "Site Name",
            is_encrypted: 0,
            is_public: 1,
            category: "basic",
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
  // 创建系统配置
  {
    url: "/admin-api/v1/system/configs",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        id: 2,
      },
      msg: "success",
    },
  },
  // 更新系统配置
  {
    url: "/admin-api/v1/system/configs/:id",
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
  // 删除系统配置
  {
    url: "/admin-api/v1/system/configs/:id",
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
