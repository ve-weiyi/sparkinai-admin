import request from "@/utils/request";
import type {
  BatchDeleteGenerationsReq,
  BatchDeleteGenerationsResp,
  DeleteGenerationReq,
  DeleteGenerationResp,
  GetGenerationDetailReq,
  GetGenerationDetailResp,
  GetGenerationListReq,
  GetGenerationListResp,
} from "./types";

/** 生成记录管理 */
export const GenerationAPI = {
  /** 获取生成记录列表 */
  getGenerationList(params?: GetGenerationListReq): Promise<IApiResponse<GetGenerationListResp>> {
    return request({
      url: `/admin-api/v1/generations`,
      method: "GET",
      params: params,
    });
  },

  /** 获取生成记录详情 */
  getGenerationDetail(
    params?: GetGenerationDetailReq
  ): Promise<IApiResponse<GetGenerationDetailResp>> {
    return request({
      url: `/admin-api/v1/generations/${params.id}`,
      method: "GET",
      params: params,
    });
  },

  /** 删除生成记录 */
  deleteGeneration(data?: DeleteGenerationReq): Promise<IApiResponse<DeleteGenerationResp>> {
    return request({
      url: `/admin-api/v1/generations/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 批量删除生成记录 */
  batchDeleteGenerations(
    data?: BatchDeleteGenerationsReq
  ): Promise<IApiResponse<BatchDeleteGenerationsResp>> {
    return request({
      url: `/admin-api/v1/generations/batch`,
      method: "DELETE",
      data: data,
    });
  },
};
