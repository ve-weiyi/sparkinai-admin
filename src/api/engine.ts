import request from "@/utils/request";
import type { PageQuery, PageResp } from "./types";

export interface EngineConfigItem {
  id: number;
  name: string;
  engine_type: string;
  model_id: number;
  model_name: string;
  system_prompt: string;
  user_prompt_template: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  extra_params: string;
  is_default: number;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface GetEngineConfigListReq extends PageQuery {
  engine_type?: string;
  status?: number;
  keyword?: string;
}

export interface GetEngineConfigListResp extends PageResp {
  list: EngineConfigItem[];
}

export interface CreateEngineConfigReq {
  name: string;
  engine_type: string;
  model_id: number;
  system_prompt?: string;
  user_prompt_template?: string;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  extra_params?: string;
  is_default?: number;
  status?: number;
}

export interface CreateEngineConfigResp {
  id: number;
}

export interface UpdateEngineConfigReq {
  id: number;
  name?: string;
  system_prompt?: string;
  user_prompt_template?: string;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  extra_params?: string;
  is_default?: number;
  status?: number;
}

export interface UpdateEngineConfigResp {
  success: boolean;
  message: string;
}

export interface DeleteEngineConfigReq {
  id: number;
}

export interface DeleteEngineConfigResp {
  success: boolean;
  message: string;
}

export interface SetDefaultEngineConfigReq {
  id: number;
}

export interface SetDefaultEngineConfigResp {
  success: boolean;
  message: string;
}

export const EngineAPI = {
  getEngineConfigList(params?: GetEngineConfigListReq): Promise<IApiResponse<GetEngineConfigListResp>> {
    return request({
      url: "/admin-api/v1/engines",
      method: "GET",
      params,
    });
  },

  createEngineConfig(data: CreateEngineConfigReq): Promise<IApiResponse<CreateEngineConfigResp>> {
    return request({
      url: "/admin-api/v1/engines",
      method: "POST",
      data,
    });
  },

  updateEngineConfig(data: UpdateEngineConfigReq): Promise<IApiResponse<UpdateEngineConfigResp>> {
    const { id, ...rest } = data;
    return request({
      url: `/admin-api/v1/engines/${id}`,
      method: "PUT",
      data: rest,
    });
  },

  deleteEngineConfig(data: DeleteEngineConfigReq): Promise<IApiResponse<DeleteEngineConfigResp>> {
    return request({
      url: `/admin-api/v1/engines/${data.id}`,
      method: "DELETE",
    });
  },

  setDefaultEngineConfig(data: SetDefaultEngineConfigReq): Promise<IApiResponse<SetDefaultEngineConfigResp>> {
    return request({
      url: `/admin-api/v1/engines/${data.id}/set-default`,
      method: "POST",
    });
  },
};
