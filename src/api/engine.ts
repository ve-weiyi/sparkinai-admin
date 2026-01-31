import request from "@/utils/request";


export interface CreateEngineConfigReq {
  name: string; // 配置名称
  engine_type: string; // 引擎类型
  model_id: number; // 模型ID
  system_prompt?: string; // 系统提示词
  user_prompt_template?: string; // 用户提示词模板
  temperature?: number; // 温度参数
  max_tokens?: number; // 最大生成token数
  top_p?: number; // Top-p采样参数
  frequency_penalty?: number; // 频率惩罚
  presence_penalty?: number; // 存在惩罚
  extra_params?: string; // 额外参数（JSON）
  is_default?: number; // 是否为默认配置
  status?: number; // 状态
}

export interface CreateEngineConfigResp {
  id: number; // 引擎配置ID
}

export interface DeleteEngineConfigReq {
  id: number; // 引擎配置ID
}

export interface DeleteEngineConfigResp {
  success: boolean; 
}

export interface EngineConfigItem {
  id: number; // 引擎配置ID
  name: string; // 配置名称
  engine_type: string; // 引擎类型
  model_id: number; // 模型ID
  model_name: string; // 模型名称
  system_prompt: string; // 系统提示词
  user_prompt_template: string; // 用户提示词模板
  temperature: number; // 温度参数
  max_tokens: number; // 最大生成token数
  top_p: number; // Top-p采样参数
  frequency_penalty: number; // 频率惩罚
  presence_penalty: number; // 存在惩罚
  extra_params: string; // 额外参数（JSON）
  is_default: number; // 是否为默认配置
  status: number; // 状态
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

export interface GetEngineConfigListReq extends PageQuery {
  engine_type?: string; // 引擎类型筛选
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索
}

export interface GetEngineConfigListResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: EngineConfigItem[]; 
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface SetDefaultEngineConfigReq {
  id: number; // 引擎配置ID
}

export interface SetDefaultEngineConfigResp {
  success: boolean; 
}

export interface UpdateEngineConfigReq {
  id: number; // 引擎配置ID
  name?: string; // 配置名称
  system_prompt?: string; // 系统提示词
  user_prompt_template?: string; // 用户提示词模板
  temperature?: number; // 温度参数
  max_tokens?: number; // 最大生成token数
  top_p?: number; // Top-p采样参数
  frequency_penalty?: number; // 频率惩罚
  presence_penalty?: number; // 存在惩罚
  extra_params?: string; // 额外参数（JSON）
  is_default?: number; // 是否为默认配置
  status?: number; // 状态
}

export interface UpdateEngineConfigResp {
  success: boolean; 
}


export const EngineAPI = {
  /** 获取引擎配置列表 */
  getEngineConfigList(data?: GetEngineConfigListReq): Promise<IApiResponse<GetEngineConfigListResp>> {
    return request({
      url: "/admin-api/v1/engines",
      method: "GET",
      data: data,
    });
  },

  /** 创建引擎配置 */
  createEngineConfig(data?: CreateEngineConfigReq): Promise<IApiResponse<CreateEngineConfigResp>> {
    return request({
      url: "/admin-api/v1/engines",
      method: "POST",
      data: data,
    });
  },

  /** 更新引擎配置 */
  updateEngineConfig(data?: UpdateEngineConfigReq): Promise<IApiResponse<UpdateEngineConfigResp>> {
    return request({
      url: "/admin-api/v1/engines/:id",
      method: "PUT",
      data: data,
    });
  },

  /** 删除引擎配置 */
  deleteEngineConfig(data?: DeleteEngineConfigReq): Promise<IApiResponse<DeleteEngineConfigResp>> {
    return request({
      url: "/admin-api/v1/engines/:id",
      method: "DELETE",
      data: data,
    });
  },

  /** 设置默认引擎配置 */
  setDefaultEngineConfig(data?: SetDefaultEngineConfigReq): Promise<IApiResponse<SetDefaultEngineConfigResp>> {
    return request({
      url: "/admin-api/v1/engines/:id/default",
      method: "PUT",
      data: data,
    });
  },
};
