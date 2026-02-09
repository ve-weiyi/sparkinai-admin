import request from "@/utils/request";
import type {
  ApiVO,
  BatchDeleteApisReq,
  BatchDeleteApisResp,
  CleanApisResp,
  CreateApiReq,
  DeleteApiReq,
  EmptyReq,
  EmptyResp,
  GetApiListReq,
  GetApiReq,
  PageResult,
  SyncApisResp,
  UpdateApiReq,
} from "./types";

/** 接口管理 */
export const ApiAPI = {
  /** 获取接口列表 */
  getApiList(params?: GetApiListReq): Promise<IApiResponse<PageResult>> {
    return request({
      url: `/admin-api/v1/apis`,
      method: "GET",
      params: params,
    });
  },

  /** 创建接口 */
  createApi(data?: CreateApiReq): Promise<IApiResponse<ApiVO>> {
    return request({
      url: `/admin-api/v1/apis`,
      method: "POST",
      data: data,
    });
  },

  /** 批量删除接口 */
  batchDeleteApis(data?: BatchDeleteApisReq): Promise<IApiResponse<BatchDeleteApisResp>> {
    return request({
      url: `/admin-api/v1/apis`,
      method: "DELETE",
      data: data,
    });
  },

  /** 获取接口详情 */
  getApi(params?: GetApiReq): Promise<IApiResponse<ApiVO>> {
    return request({
      url: `/admin-api/v1/apis/${params.id}`,
      method: "GET",
      params: params,
    });
  },

  /** 更新接口 */
  updateApi(data?: UpdateApiReq): Promise<IApiResponse<ApiVO>> {
    return request({
      url: `/admin-api/v1/apis/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除接口 */
  deleteApi(data?: DeleteApiReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/apis/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 清空接口列表 */
  cleanApis(data?: EmptyReq): Promise<IApiResponse<CleanApisResp>> {
    return request({
      url: `/admin-api/v1/apis/clean`,
      method: "POST",
      data: data,
    });
  },

  /** 同步接口列表 */
  syncApis(data?: EmptyReq): Promise<IApiResponse<SyncApisResp>> {
    return request({
      url: `/admin-api/v1/apis/sync`,
      method: "POST",
      data: data,
    });
  },
};
