import request from "@/utils/request";
import type { PageQuery, PageResp } from "./types";

export interface ProviderItem {
  id: number;
  name: string;
  code: string;
  base_url: string;
  description: string;
  status: number;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface GetProviderListReq extends PageQuery {
  status?: number;
  keyword?: string;
}

export interface GetProviderListResp extends PageResp {
  list: ProviderItem[];
}

export interface CreateProviderReq {
  name: string;
  code: string;
  base_url?: string;
  description?: string;
  status?: number;
  sort_order?: number;
}

export interface CreateProviderResp {
  id: number;
}

export interface UpdateProviderReq {
  id: number;
  name?: string;
  base_url?: string;
  description?: string;
  status?: number;
  sort_order?: number;
}

export interface UpdateProviderResp {
  success: boolean;
  message: string;
}

export interface DeleteProviderReq {
  id: number;
}

export interface DeleteProviderResp {
  success: boolean;
  message: string;
}

export const ProviderAPI = {
  getProviderList(params?: GetProviderListReq): Promise<IApiResponse<GetProviderListResp>> {
    return request({
      url: "/admin-api/v1/providers",
      method: "GET",
      params,
    });
  },

  createProvider(data: CreateProviderReq): Promise<IApiResponse<CreateProviderResp>> {
    return request({
      url: "/admin-api/v1/providers",
      method: "POST",
      data,
    });
  },

  updateProvider(data: UpdateProviderReq): Promise<IApiResponse<UpdateProviderResp>> {
    const { id, ...rest } = data;
    return request({
      url: `/admin-api/v1/providers/${id}`,
      method: "PUT",
      data: rest,
    });
  },

  deleteProvider(data: DeleteProviderReq): Promise<IApiResponse<DeleteProviderResp>> {
    return request({
      url: `/admin-api/v1/providers/${data.id}`,
      method: "DELETE",
    });
  },
};
