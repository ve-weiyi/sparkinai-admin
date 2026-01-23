import request from "@/utils/request";
import type { PageQuery, PageResp, IdsReq, BatchResp } from "./types";

export interface AdminUser {
  id: number;
  username: string;
  phone: string;
  email: string;
  balance: number;
  status: number;
  created_at: number;
  updated_at: number;
}

export interface QueryAdminUserReq extends PageQuery {
  phone?: string;
  username?: string;
}

export interface RechargeReq {
  user_id: number;
  amount: number;
  remark?: string;
}

export interface Provider {
  id: number;
  name: string;
  code: string;
  status: number;
  created_at: number;
  updated_at: number;
}

export interface Model {
  id: number;
  provider_id: number;
  name: string;
  code: string;
  status: number;
  created_at: number;
  updated_at: number;
}

export interface EngineConfig {
  id: number;
  type: string;
  name: string;
  prompt: string;
  model_id: number;
  params: Record<string, any>;
  status: number;
  created_at: number;
  updated_at: number;
}

export interface SystemConfig {
  id: number;
  key: string;
  value: string;
  description: string;
  created_at: number;
  updated_at: number;
}

export interface ApiKey {
  id: number;
  provider_id: number;
  name: string;
  key: string;
  priority: number;
  status: number;
  created_at: number;
  updated_at: number;
}

export const AdminUserAPI = {
  findUserListApi(data?: QueryAdminUserReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/admin/find_user_list",
      method: "POST",
      data,
    });
  },

  rechargeApi(data: RechargeReq): Promise<IApiResponse<AdminUser>> {
    return request({
      url: "/admin-api/v1/admin/recharge",
      method: "POST",
      data,
    });
  },

  deletesUserApi(data: IdsReq): Promise<IApiResponse<BatchResp>> {
    return request({
      url: "/admin-api/v1/admin/deletes_user",
      method: "DELETE",
      data,
    });
  },
};

export const ProviderAPI = {
  findProviderListApi(data?: PageQuery): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/provider/find_provider_list",
      method: "POST",
      data,
    });
  },

  addProviderApi(data: Provider): Promise<IApiResponse<Provider>> {
    return request({
      url: "/admin-api/v1/provider/add_provider",
      method: "POST",
      data,
    });
  },

  updateProviderApi(data: Provider): Promise<IApiResponse<Provider>> {
    return request({
      url: "/admin-api/v1/provider/update_provider",
      method: "PUT",
      data,
    });
  },

  deletesProviderApi(data: IdsReq): Promise<IApiResponse<BatchResp>> {
    return request({
      url: "/admin-api/v1/provider/deletes_provider",
      method: "DELETE",
      data,
    });
  },
};

export const ModelAPI = {
  findModelListApi(data?: PageQuery): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/model/find_model_list",
      method: "POST",
      data,
    });
  },

  addModelApi(data: Model): Promise<IApiResponse<Model>> {
    return request({
      url: "/admin-api/v1/model/add_model",
      method: "POST",
      data,
    });
  },

  updateModelApi(data: Model): Promise<IApiResponse<Model>> {
    return request({
      url: "/admin-api/v1/model/update_model",
      method: "PUT",
      data,
    });
  },

  deletesModelApi(data: IdsReq): Promise<IApiResponse<BatchResp>> {
    return request({
      url: "/admin-api/v1/model/deletes_model",
      method: "DELETE",
      data,
    });
  },
};

export const EngineConfigAPI = {
  findEngineConfigListApi(data?: PageQuery): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/engine/find_config_list",
      method: "POST",
      data,
    });
  },

  addEngineConfigApi(data: EngineConfig): Promise<IApiResponse<EngineConfig>> {
    return request({
      url: "/admin-api/v1/engine/add_config",
      method: "POST",
      data,
    });
  },

  updateEngineConfigApi(data: EngineConfig): Promise<IApiResponse<EngineConfig>> {
    return request({
      url: "/admin-api/v1/engine/update_config",
      method: "PUT",
      data,
    });
  },

  deletesEngineConfigApi(data: IdsReq): Promise<IApiResponse<BatchResp>> {
    return request({
      url: "/admin-api/v1/engine/deletes_config",
      method: "DELETE",
      data,
    });
  },
};

export const SystemConfigAPI = {
  findSystemConfigListApi(data?: PageQuery): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/system/find_config_list",
      method: "POST",
      data,
    });
  },

  updateSystemConfigApi(data: SystemConfig): Promise<IApiResponse<SystemConfig>> {
    return request({
      url: "/admin-api/v1/system/update_config",
      method: "PUT",
      data,
    });
  },

  fillTemplateApi(data: Record<string, any>): Promise<IApiResponse<any>> {
    return request({
      url: "/admin-api/v1/system/fill_template",
      method: "POST",
      data,
    });
  },
};

export const ApiKeyAPI = {
  findApiKeyListApi(data?: PageQuery): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/apikey/find_apikey_list",
      method: "POST",
      data,
    });
  },

  addApiKeyApi(data: ApiKey): Promise<IApiResponse<ApiKey>> {
    return request({
      url: "/admin-api/v1/apikey/add_apikey",
      method: "POST",
      data,
    });
  },

  updateApiKeyApi(data: ApiKey): Promise<IApiResponse<ApiKey>> {
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
};
