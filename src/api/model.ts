import request from "@/utils/request";
import type {
  CreateModelReq,
  CreateModelResp,
  DeleteModelReq,
  DeleteModelResp,
  GetModelDetailReq,
  GetModelDetailResp,
  GetModelListReq,
  GetModelListResp,
  UpdateModelReq,
  UpdateModelResp,
} from "./types";

/** AI模型管理 */
export const ModelAPI = {
  /** 获取模型列表 */
  getModelList(params?: GetModelListReq): Promise<IApiResponse<GetModelListResp>> {
    return request({
      url: `/admin-api/v1/models`,
      method: "GET",
      params: params,
    });
  },

  /** 创建模型 */
  createModel(data?: CreateModelReq): Promise<IApiResponse<CreateModelResp>> {
    return request({
      url: `/admin-api/v1/models`,
      method: "POST",
      data: data,
    });
  },

  /** 获取模型详情 */
  getModelDetail(params?: GetModelDetailReq): Promise<IApiResponse<GetModelDetailResp>> {
    return request({
      url: `/admin-api/v1/models/${params.id}`,
      method: "GET",
      params: params,
    });
  },

  /** 更新模型 */
  updateModel(data?: UpdateModelReq): Promise<IApiResponse<UpdateModelResp>> {
    return request({
      url: `/admin-api/v1/models/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除模型 */
  deleteModel(data?: DeleteModelReq): Promise<IApiResponse<DeleteModelResp>> {
    return request({
      url: `/admin-api/v1/models/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },
};
