import request from "@/utils/request";


export interface BatchUpdateSystemConfigReq {
  configs: SystemConfigUpdateItem[]; // 配置列表
}

export interface BatchUpdateSystemConfigResp {
  success_count: number; // 成功更新数量
}

export interface CreateSystemConfigReq {
  config_key: string; // 配置键
  config_value: string; // 配置值
  config_type?: string; // 配置类型
  description?: string; // 配置描述
  is_encrypted?: number; // 是否加密存储
  is_public?: number; // 是否公开
  category?: string; // 配置分类
}

export interface CreateSystemConfigResp {
  id: number; // 配置ID
}

export interface DeleteSystemConfigReq {
  id: number; // 配置ID
}

export interface DeleteSystemConfigResp {
  success: boolean; 
}

export interface GetPublicConfigReq {
}

export interface GetPublicConfigResp {
  configs: Record<string, any>; // 公开配置键值对
}

export interface GetSystemConfigListReq extends PageQuery {
  category?: string; // 配置分类筛选
  keyword?: string; // 关键词搜索
}

export interface GetSystemConfigListResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: SystemConfigItem[]; 
}

export interface GetSystemConfigReq {
  config_key: string; // 配置键
}

export interface GetSystemConfigResp extends SystemConfigItem {
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface SystemConfigItem {
  id: number; // 配置ID
  config_key: string; // 配置键
  config_value: string; // 配置值
  config_type: string; // 配置类型
  description: string; // 配置描述
  is_encrypted: number; // 是否加密存储
  is_public: number; // 是否公开
  category: string; // 配置分类
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

export interface SystemConfigUpdateItem {
  config_key: string; // 配置键
  config_value: string; // 配置值
}

export interface UpdateSystemConfigReq {
  id: number; // 配置ID
  config_value?: string; // 配置值
  description?: string; // 配置描述
  is_public?: number; // 是否公开
}

export interface UpdateSystemConfigResp {
  success: boolean; 
}


export const ConfigAPI = {
  /** 获取系统配置列表 */
  getSystemConfigList(data?: GetSystemConfigListReq): Promise<IApiResponse<GetSystemConfigListResp>> {
    return request({
      url: "/admin-api/v1/configs",
      method: "GET",
      data: data,
    });
  },

  /** 创建系统配置 */
  createSystemConfig(data?: CreateSystemConfigReq): Promise<IApiResponse<CreateSystemConfigResp>> {
    return request({
      url: "/admin-api/v1/configs",
      method: "POST",
      data: data,
    });
  },

  /** 获取系统配置 */
  getSystemConfig(data?: GetSystemConfigReq): Promise<IApiResponse<GetSystemConfigResp>> {
    return request({
      url: "/admin-api/v1/configs/:config_key",
      method: "GET",
      data: data,
    });
  },

  /** 更新系统配置 */
  updateSystemConfig(data?: UpdateSystemConfigReq): Promise<IApiResponse<UpdateSystemConfigResp>> {
    return request({
      url: "/admin-api/v1/configs/:id",
      method: "PUT",
      data: data,
    });
  },

  /** 删除系统配置 */
  deleteSystemConfig(data?: DeleteSystemConfigReq): Promise<IApiResponse<DeleteSystemConfigResp>> {
    return request({
      url: "/admin-api/v1/configs/:id",
      method: "DELETE",
      data: data,
    });
  },

  /** 批量更新系统配置 */
  batchUpdateSystemConfig(data?: BatchUpdateSystemConfigReq): Promise<IApiResponse<BatchUpdateSystemConfigResp>> {
    return request({
      url: "/admin-api/v1/configs/batch",
      method: "PUT",
      data: data,
    });
  },

  /** 获取公开配置 */
  getPublicConfig(data?: GetPublicConfigReq): Promise<IApiResponse<GetPublicConfigResp>> {
    return request({
      url: "/admin-api/v1/configs/public",
      method: "GET",
      data: data,
    });
  },
};
