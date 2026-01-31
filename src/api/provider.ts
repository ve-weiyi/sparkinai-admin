import request from "@/utils/request";


export interface CreateProviderReq {
  name: string; // 供应商名称
  code: string; // 供应商代码
  base_url?: string; // API基础URL
  description?: string; // 供应商描述
  status?: number; // 状态
  sort_order?: number; // 排序顺序
}

export interface CreateProviderResp {
  id: number; // 供应商ID
}

export interface DeleteProviderReq {
  id: number; // 供应商ID
}

export interface DeleteProviderResp {
  success: boolean; 
}

export interface GetProviderListReq extends PageQuery {
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索
}

export interface GetProviderListResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: ProviderItem[]; 
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface ProviderItem {
  id: number; // 供应商ID
  name: string; // 供应商名称
  code: string; // 供应商代码
  base_url: string; // API基础URL
  description: string; // 供应商描述
  status: number; // 状态
  sort_order: number; // 排序顺序
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

export interface UpdateProviderReq {
  id: number; // 供应商ID
  name?: string; // 供应商名称
  base_url?: string; // API基础URL
  description?: string; // 供应商描述
  status?: number; // 状态
  sort_order?: number; // 排序顺序
}

export interface UpdateProviderResp {
  success: boolean; 
}


export const ProviderAPI = {
  /** 获取供应商列表 */
  getProviderList(data?: GetProviderListReq): Promise<IApiResponse<GetProviderListResp>> {
    return request({
      url: "/admin-api/v1/providers",
      method: "GET",
      data: data,
    });
  },

  /** 创建供应商 */
  createProvider(data?: CreateProviderReq): Promise<IApiResponse<CreateProviderResp>> {
    return request({
      url: "/admin-api/v1/providers",
      method: "POST",
      data: data,
    });
  },

  /** 更新供应商 */
  updateProvider(data?: UpdateProviderReq): Promise<IApiResponse<UpdateProviderResp>> {
    return request({
      url: "/admin-api/v1/providers/:id",
      method: "PUT",
      data: data,
    });
  },

  /** 删除供应商 */
  deleteProvider(data?: DeleteProviderReq): Promise<IApiResponse<DeleteProviderResp>> {
    return request({
      url: "/admin-api/v1/providers/:id",
      method: "DELETE",
      data: data,
    });
  },
};
