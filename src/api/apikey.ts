import request from "@/utils/request";
import type { PageQuery, PageResp, IdsReq, BatchResp } from "./types";

export interface ApiKey {
  id: number;
  provider_id: number;
  provider_name?: string;
  name: string;
  key: string;
  status: number;
  priority: number;
  created_at: number;
  updated_at: number;
}

export interface QueryApiKeyReq extends PageQuery {
  provider_id?: number;
}

export interface NewApiKeyReq {
  id?: number;
  provider_id: number;
  name: string;
  key: string;
  status: number;
  priority: number;
}

export interface UpdateApiKeyStatusReq {
  id: number;
  status: number;
}

export const ApiKeyAPI = {
  findApiKeyListApi(data?: QueryApiKeyReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/apikey/find_apikey_list",
      method: "POST",
      data,
    });
  },

  addApiKeyApi(data: NewApiKeyReq): Promise<IApiResponse<ApiKey>> {
    return request({
      url: "/admin-api/v1/apikey/add_apikey",
      method: "POST",
      data,
    });
  },

  updateApiKeyApi(data: NewApiKeyReq): Promise<IApiResponse<ApiKey>> {
    return request({
      url: "/admin-api/v1/apikey/update_apikey",
      method: "PUT",
      data,
    });
  },

  deletesApiKeyApi(data: IdsReq): Promise<IApiResponse<BatchResp>> {
    return request({
      url: "/admin-api/v1/apikey/deletes_apikey",
      method: "DELETE",
      data,
    });
  },

  updateApiKeyStatusApi(data: UpdateApiKeyStatusReq): Promise<IApiResponse<ApiKey>> {
    return request({
      url: "/admin-api/v1/apikey/update_apikey_status",
      method: "PUT",
      data,
    });
  },
};
