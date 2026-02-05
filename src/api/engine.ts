import request from "@/utils/request";
import type {
  CreateEngineConfigReq,
  CreateEngineConfigResp,
  DeleteEngineConfigReq,
  DeleteEngineConfigResp,
  GetEngineConfigListReq,
  GetEngineConfigListResp,
  SetDefaultEngineConfigReq,
  SetDefaultEngineConfigResp,
  UpdateEngineConfigReq,
  UpdateEngineConfigResp,
} from "./types";

/** 引擎配置管理 */
export const EngineAPI = {
  /** 获取引擎配置列表 */
  getEngineConfigList(
    params?: GetEngineConfigListReq
  ): Promise<IApiResponse<GetEngineConfigListResp>> {
    return request({
      url: `/admin-api/v1/engines`,
      method: "GET",
      params: params,
    });
  },

  /** 创建引擎配置 */
  createEngineConfig(data?: CreateEngineConfigReq): Promise<IApiResponse<CreateEngineConfigResp>> {
    return request({
      url: `/admin-api/v1/engines`,
      method: "POST",
      data: data,
    });
  },

  /** 更新引擎配置 */
  updateEngineConfig(data?: UpdateEngineConfigReq): Promise<IApiResponse<UpdateEngineConfigResp>> {
    return request({
      url: `/admin-api/v1/engines/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除引擎配置 */
  deleteEngineConfig(data?: DeleteEngineConfigReq): Promise<IApiResponse<DeleteEngineConfigResp>> {
    return request({
      url: `/admin-api/v1/engines/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 设置默认引擎配置 */
  setDefaultEngineConfig(
    data?: SetDefaultEngineConfigReq
  ): Promise<IApiResponse<SetDefaultEngineConfigResp>> {
    return request({
      url: `/admin-api/v1/engines/${data.id}/default`,
      method: "PUT",
      data: data,
    });
  },
};
