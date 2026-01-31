import request from "@/utils/request";


export interface ApiKeyItem {
  id: number; // API密钥ID
  provider_id: number; // 供应商ID
  provider_name: string; // 供应商名称
  name: string; // 密钥名称
  profile: string; // 配置文件名称
  api_key: string; // API密钥（脱敏显示）
  priority: number; // 优先级
  quota_limit: number; // 配额限制
  quota_used: number; // 已使用配额
  quota_reset_at: number; // 配额重置时间
  status: number; // 状态
  last_used_at: number; // 最后使用时间
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

export interface CreateApiKeyReq {
  provider_id: number; // 供应商ID
  name: string; // 密钥名称
  profile?: string; // 配置文件名称
  api_key: string; // API密钥
  secret_key?: string; // Secret Key
  priority?: number; // 优先级
  quota_limit?: number; // 配额限制
  status?: number; // 状态
}

export interface CreateApiKeyResp {
  id: number; // API密钥ID
}

export interface DeleteApiKeyReq {
  id: number; // API密钥ID
}

export interface DeleteApiKeyResp {
  success: boolean; 
}

export interface GetApiKeyListReq extends PageQuery {
  provider_id?: number; // 供应商ID筛选
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索
}

export interface GetApiKeyListResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: ApiKeyItem[]; 
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface TestApiKeyReq {
  id: number; // API密钥ID
}

export interface TestApiKeyResp {
  success: boolean; // 是否测试成功
  message: string; // 测试结果信息
  latency: number; // 响应延迟（毫秒）
}

export interface UpdateApiKeyReq {
  id: number; // API密钥ID
  name?: string; // 密钥名称
  api_key?: string; // API密钥
  secret_key?: string; // Secret Key
  priority?: number; // 优先级
  quota_limit?: number; // 配额限制
  status?: number; // 状态
}

export interface UpdateApiKeyResp {
  success: boolean; 
}


export const ApikeyAPI = {
  /** 获取API密钥列表 */
  getApiKeyList(data?: GetApiKeyListReq): Promise<IApiResponse<GetApiKeyListResp>> {
    return request({
      url: "/admin-api/v1/apikeys",
      method: "GET",
      data: data,
    });
  },

  /** 创建API密钥 */
  createApiKey(data?: CreateApiKeyReq): Promise<IApiResponse<CreateApiKeyResp>> {
    return request({
      url: "/admin-api/v1/apikeys",
      method: "POST",
      data: data,
    });
  },

  /** 更新API密钥 */
  updateApiKey(data?: UpdateApiKeyReq): Promise<IApiResponse<UpdateApiKeyResp>> {
    return request({
      url: "/admin-api/v1/apikeys/:id",
      method: "PUT",
      data: data,
    });
  },

  /** 删除API密钥 */
  deleteApiKey(data?: DeleteApiKeyReq): Promise<IApiResponse<DeleteApiKeyResp>> {
    return request({
      url: "/admin-api/v1/apikeys/:id",
      method: "DELETE",
      data: data,
    });
  },

  /** 测试API密钥 */
  testApiKey(data?: TestApiKeyReq): Promise<IApiResponse<TestApiKeyResp>> {
    return request({
      url: "/admin-api/v1/apikeys/:id/testing",
      method: "POST",
      data: data,
    });
  },
};
