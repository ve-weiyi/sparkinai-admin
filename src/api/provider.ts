import request from "@/utils/request";
import type {
  CreateProviderReq,
  CreateProviderResp,
  DeleteProviderReq,
  DeleteProviderResp,
  GetProviderListReq,
  GetProviderListResp,
  UpdateProviderReq,
  UpdateProviderResp
} from "./types";

/** AI供应商管理 */
export const ProviderAPI = {
  /** 获取供应商列表 */
  getProviderList(params?: GetProviderListReq): Promise<IApiResponse<GetProviderListResp>> {
    return request({
      url: `/admin-api/v1/providers`,
      method: "GET",
      params: params,
    });
  },

  /** 创建供应商 */
  createProvider(data?: CreateProviderReq): Promise<IApiResponse<CreateProviderResp>> {
    return request({
      url: `/admin-api/v1/providers`,
      method: "POST",
      data: data,
    });
  },

  /** 更新供应商 */
  updateProvider(data?: UpdateProviderReq): Promise<IApiResponse<UpdateProviderResp>> {
    return request({
      url: `/admin-api/v1/providers/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除供应商 */
  deleteProvider(data?: DeleteProviderReq): Promise<IApiResponse<DeleteProviderResp>> {
    return request({
      url: `/admin-api/v1/providers/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

};
