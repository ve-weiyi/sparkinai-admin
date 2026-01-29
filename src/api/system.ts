import request from "@/utils/request";
import type { PageQuery, PageResp } from "./types";

export interface SystemConfigItem {
  id: number;
  config_key: string;
  config_value: string;
  config_type: string;
  description: string;
  is_encrypted: number;
  is_public: number;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface GetSystemConfigListReq extends PageQuery {
  category?: string;
  keyword?: string;
}

export interface GetSystemConfigListResp extends PageResp {
  list: SystemConfigItem[];
}

export interface CreateSystemConfigReq {
  config_key: string;
  config_value: string;
  config_type?: string;
  description?: string;
  is_encrypted?: number;
  is_public?: number;
  category?: string;
}

export interface CreateSystemConfigResp {
  id: number;
}

export interface UpdateSystemConfigReq {
  id: number;
  config_value?: string;
  description?: string;
  is_public?: number;
}

export interface UpdateSystemConfigResp {
  success: boolean;
  message: string;
}

export interface DeleteSystemConfigReq {
  id: number;
}

export interface DeleteSystemConfigResp {
  success: boolean;
  message: string;
}

export class SystemConfigAPI {
  static getSystemConfigList(params: GetSystemConfigListReq) {
    return request<GetSystemConfigListResp>({
      url: "/admin-api/v1/system/configs",
      method: "get",
      params,
    });
  }

  static createSystemConfig(data: CreateSystemConfigReq) {
    return request<CreateSystemConfigResp>({
      url: "/admin-api/v1/system/configs",
      method: "post",
      data,
    });
  }

  static updateSystemConfig(data: UpdateSystemConfigReq) {
    return request<UpdateSystemConfigResp>({
      url: `/admin-api/v1/system/configs/${data.id}`,
      method: "put",
      data,
    });
  }

  static deleteSystemConfig(params: DeleteSystemConfigReq) {
    return request<DeleteSystemConfigResp>({
      url: `/admin-api/v1/system/configs/${params.id}`,
      method: "delete",
    });
  }
}
