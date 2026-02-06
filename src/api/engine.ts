import request from "@/utils/request";
import type {
  CreateEngineReq,
  CreateEngineResp,
  DeleteEngineReq,
  DeleteEngineResp,
  GetEngineListReq,
  GetEngineListResp,
  SetDefaultEngineReq,
  SetDefaultEngineResp,
  UpdateEngineReq,
  UpdateEngineResp
} from "./types";

/** 引擎配置管理 */
export const EngineAPI = {
  /** 获取引擎配置列表 */
  getEngineList(params?: GetEngineListReq): Promise<IApiResponse<GetEngineListResp>> {
    return request({
      url: `/admin-api/v1/engines`,
      method: "GET",
      params: params,
    });
  },

  /** 创建引擎配置 */
  createEngine(data?: CreateEngineReq): Promise<IApiResponse<CreateEngineResp>> {
    return request({
      url: `/admin-api/v1/engines`,
      method: "POST",
      data: data,
    });
  },

  /** 更新引擎配置 */
  updateEngine(data?: UpdateEngineReq): Promise<IApiResponse<UpdateEngineResp>> {
    return request({
      url: `/admin-api/v1/engines/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除引擎配置 */
  deleteEngine(data?: DeleteEngineReq): Promise<IApiResponse<DeleteEngineResp>> {
    return request({
      url: `/admin-api/v1/engines/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 设置默认引擎配置 */
  setDefaultEngine(data?: SetDefaultEngineReq): Promise<IApiResponse<SetDefaultEngineResp>> {
    return request({
      url: `/admin-api/v1/engines/${data.id}/default`,
      method: "PUT",
      data: data,
    });
  },

};
