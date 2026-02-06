import request from "@/utils/request";
import type {
  BatchUpdateSystemConfigReq,
  BatchUpdateSystemConfigResp,
  CreateSystemConfigReq,
  CreateSystemConfigResp,
  DeleteSystemConfigReq,
  DeleteSystemConfigResp,
  GetPublicConfigReq,
  GetPublicConfigResp,
  GetSystemConfigListReq,
  GetSystemConfigListResp,
  GetSystemConfigReq,
  GetSystemConfigResp,
  UpdateSystemConfigReq,
  UpdateSystemConfigResp
} from "./types";

/** 系统配置管理 */
export const ConfigAPI = {
  /** 获取系统配置列表 */
  getSystemConfigList(params?: GetSystemConfigListReq): Promise<IApiResponse<GetSystemConfigListResp>> {
    return request({
      url: `/admin-api/v1/configs`,
      method: "GET",
      params: params,
    });
  },

  /** 创建系统配置 */
  createSystemConfig(data?: CreateSystemConfigReq): Promise<IApiResponse<CreateSystemConfigResp>> {
    return request({
      url: `/admin-api/v1/configs`,
      method: "POST",
      data: data,
    });
  },

  /** 获取系统配置 */
  getSystemConfig(params?: GetSystemConfigReq): Promise<IApiResponse<GetSystemConfigResp>> {
    return request({
      url: `/admin-api/v1/configs/${params.config_key}`,
      method: "GET",
      params: params,
    });
  },

  /** 更新系统配置 */
  updateSystemConfig(data?: UpdateSystemConfigReq): Promise<IApiResponse<UpdateSystemConfigResp>> {
    return request({
      url: `/admin-api/v1/configs/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除系统配置 */
  deleteSystemConfig(data?: DeleteSystemConfigReq): Promise<IApiResponse<DeleteSystemConfigResp>> {
    return request({
      url: `/admin-api/v1/configs/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 批量更新系统配置 */
  batchUpdateSystemConfig(data?: BatchUpdateSystemConfigReq): Promise<IApiResponse<BatchUpdateSystemConfigResp>> {
    return request({
      url: `/admin-api/v1/configs/batch`,
      method: "PUT",
      data: data,
    });
  },

  /** 获取公开配置 */
  getPublicConfig(params?: GetPublicConfigReq): Promise<IApiResponse<GetPublicConfigResp>> {
    return request({
      url: `/admin-api/v1/configs/public`,
      method: "GET",
      params: params,
    });
  },

};
