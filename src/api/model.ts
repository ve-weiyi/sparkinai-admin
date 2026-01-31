import request from "@/utils/request";


export interface CreateModelReq {
  provider_id: number; // 供应商ID
  name: string; // 模型名称
  code: string; // 模型代码
  model_type: string; // 模型类型
  description?: string; // 模型描述
  max_tokens?: number; // 最大token数
  support_vision?: number; // 是否支持视觉输入
  status?: number; // 状态
  sort_order?: number; // 排序顺序
}

export interface CreateModelResp {
  id: number; // 模型ID
}

export interface DeleteModelReq {
  id: number; // 模型ID
}

export interface DeleteModelResp {
  success: boolean; 
}

export interface GetModelListReq extends PageQuery {
  provider_id?: number; // 供应商ID筛选
  model_type?: string; // 模型类型筛选
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索
}

export interface GetModelListResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: ModelItem[]; 
}

export interface ModelItem {
  id: number; // 模型ID
  provider_id: number; // 供应商ID
  provider_name: string; // 供应商名称
  name: string; // 模型名称
  code: string; // 模型代码
  model_type: string; // 模型类型
  description: string; // 模型描述
  max_tokens: number; // 最大token数
  support_vision: number; // 是否支持视觉输入
  status: number; // 状态
  sort_order: number; // 排序顺序
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface UpdateModelReq {
  id: number; // 模型ID
  name?: string; // 模型名称
  description?: string; // 模型描述
  max_tokens?: number; // 最大token数
  support_vision?: number; // 是否支持视觉输入
  status?: number; // 状态
  sort_order?: number; // 排序顺序
}

export interface UpdateModelResp {
  success: boolean; 
}


export const ModelAPI = {
  /** 获取模型列表 */
  getModelList(data?: GetModelListReq): Promise<IApiResponse<GetModelListResp>> {
    return request({
      url: "/admin-api/v1/models",
      method: "GET",
      data: data,
    });
  },

  /** 创建模型 */
  createModel(data?: CreateModelReq): Promise<IApiResponse<CreateModelResp>> {
    return request({
      url: "/admin-api/v1/models",
      method: "POST",
      data: data,
    });
  },

  /** 更新模型 */
  updateModel(data?: UpdateModelReq): Promise<IApiResponse<UpdateModelResp>> {
    return request({
      url: "/admin-api/v1/models/:id",
      method: "PUT",
      data: data,
    });
  },

  /** 删除模型 */
  deleteModel(data?: DeleteModelReq): Promise<IApiResponse<DeleteModelResp>> {
    return request({
      url: "/admin-api/v1/models/:id",
      method: "DELETE",
      data: data,
    });
  },
};
