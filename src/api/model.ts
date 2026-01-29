import request from "@/utils/request";
import type { PageQuery, PageResp } from "./types";

export interface ModelItem {
  id: number;
  provider_id: number;
  provider_name: string;
  name: string;
  code: string;
  model_type: string;
  description: string;
  max_tokens: number;
  support_vision: number;
  status: number;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface GetModelListReq extends PageQuery {
  provider_id?: number;
  model_type?: string;
  status?: number;
  keyword?: string;
}

export interface GetModelListResp extends PageResp {
  list: ModelItem[];
}

export interface CreateModelReq {
  provider_id: number;
  name: string;
  code: string;
  model_type: string;
  description?: string;
  max_tokens?: number;
  support_vision?: number;
  status?: number;
  sort_order?: number;
}

export interface CreateModelResp {
  id: number;
}

export interface UpdateModelReq {
  id: number;
  name?: string;
  description?: string;
  max_tokens?: number;
  support_vision?: number;
  status?: number;
  sort_order?: number;
}

export interface UpdateModelResp {
  success: boolean;
  message: string;
}

export interface DeleteModelReq {
  id: number;
}

export interface DeleteModelResp {
  success: boolean;
  message: string;
}

export const ModelAPI = {
  getModelList(params?: GetModelListReq): Promise<IApiResponse<GetModelListResp>> {
    return request({
      url: "/admin-api/v1/models",
      method: "GET",
      params,
    });
  },

  createModel(data: CreateModelReq): Promise<IApiResponse<CreateModelResp>> {
    return request({
      url: "/admin-api/v1/models",
      method: "POST",
      data,
    });
  },

  updateModel(data: UpdateModelReq): Promise<IApiResponse<UpdateModelResp>> {
    const { id, ...rest } = data;
    return request({
      url: `/admin-api/v1/models/${id}`,
      method: "PUT",
      data: rest,
    });
  },

  deleteModel(data: DeleteModelReq): Promise<IApiResponse<DeleteModelResp>> {
    return request({
      url: `/admin-api/v1/models/${data.id}`,
      method: "DELETE",
    });
  },
};
