import request from "@/utils/request";
import type { GetApiKeyListReq, UpdateApiKeyReq, DeleteApiKeyResp, TestApiKeyReq, TestApiKeyResp, GetApiKeyListResp, CreateApiKeyReq, CreateApiKeyResp, UpdateApiKeyResp, DeleteApiKeyReq } from "./types";

/** API密钥管理 */
export const ApikeyAPI = {
  /** 获取API密钥列表 */
  getApiKeyList(params?: GetApiKeyListReq): Promise<IApiResponse<GetApiKeyListResp>> {
    return request({
      url: `/admin-api/v1/apikeys`,
      method: "GET",
      params: params,
    });
  },

  /** 创建API密钥 */
  createApiKey(data?: CreateApiKeyReq): Promise<IApiResponse<CreateApiKeyResp>> {
    return request({
      url: `/admin-api/v1/apikeys`,
      method: "POST",
      data: data,
    });
  },

  /** 更新API密钥 */
  updateApiKey(data?: UpdateApiKeyReq): Promise<IApiResponse<UpdateApiKeyResp>> {
    return request({
      url: `/admin-api/v1/apikeys/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除API密钥 */
  deleteApiKey(data?: DeleteApiKeyReq): Promise<IApiResponse<DeleteApiKeyResp>> {
    return request({
      url: `/admin-api/v1/apikeys/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 测试API密钥 */
  testApiKey(data?: TestApiKeyReq): Promise<IApiResponse<TestApiKeyResp>> {
    return request({
      url: `/admin-api/v1/apikeys/${data.id}/testing`,
      method: "POST",
      data: data,
    });
  },

};
