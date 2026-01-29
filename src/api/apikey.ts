import request from "@/utils/request";
import type { PageQuery } from "./types";

export interface GetApiKeyListReq extends PageQuery {
  provider_id?: number;
  status?: number;
  keyword?: string;
}

export interface ApiKeyItem {
  id: number;
  provider_id: number;
  provider_name: string;
  name: string;
  profile: string;
  api_key: string;
  priority: number;
  quota_limit: number;
  quota_used: number;
  quota_reset_at: string;
  status: number;
  last_used_at: string;
  created_at: string;
  updated_at: string;
}

export interface GetApiKeyListResp {
  page: number;
  page_size: number;
  total: number;
  list: ApiKeyItem[];
}

export interface CreateApiKeyReq {
  provider_id: number;
  name: string;
  profile?: string;
  api_key: string;
  secret_key?: string;
  priority?: number;
  quota_limit?: number;
  status?: number;
}

export interface UpdateApiKeyReq {
  id: number;
  name?: string;
  api_key?: string;
  secret_key?: string;
  priority?: number;
  quota_limit?: number;
  status?: number;
}

export interface TestApiKeyReq {
  id: number;
}

export interface TestApiKeyResp {
  success: boolean;
  message: string;
  latency: number;
}

export const ApiKeyAPI = {
  getApiKeyList(params?: GetApiKeyListReq): Promise<IApiResponse<GetApiKeyListResp>> {
    return request({ url: "/admin-api/v1/api-keys", method: "GET", params });
  },
  createApiKey(data: CreateApiKeyReq): Promise<IApiResponse<{ id: number }>> {
    return request({ url: "/admin-api/v1/api-keys", method: "POST", data });
  },
  updateApiKey(data: UpdateApiKeyReq): Promise<IApiResponse<any>> {
    return request({ url: `/admin-api/v1/api-keys/${data.id}`, method: "PUT", data });
  },
  deleteApiKey(data: { id: number }): Promise<IApiResponse<any>> {
    return request({ url: `/admin-api/v1/api-keys/${data.id}`, method: "DELETE" });
  },
  testApiKey(data: TestApiKeyReq): Promise<IApiResponse<TestApiKeyResp>> {
    return request({ url: `/admin-api/v1/api-keys/${data.id}/test`, method: "POST" });
  }
};
