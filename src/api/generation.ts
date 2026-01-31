import request from "@/utils/request";


export interface BatchDeleteGenerationsReq {
  ids: string[]; // 生成记录ID列表
}

export interface BatchDeleteGenerationsResp {
  success_count: number; // 成功删除数量
}

export interface DeleteGenerationReq {
  id: string; // 生成记录ID
}

export interface DeleteGenerationResp {
  success: boolean; 
}

export interface GenerationItem {
  id: string; // 生成记录ID
  user_id: string; // 用户ID
  user_phone: string; // 用户手机号
  product_name: string; // 产品名称
  description: string; // 产品描述
  image_url: string; // 上传的产品图片URL
  copy_result: string; // 生成的文案结果（JSON）
  image_urls: string[]; // 生成的图片URL列表
  generation_type: string; // 生成类型
  status: number; // 生成状态
  error_message: string; // 错误信息
  cost_tokens: number; // 消耗的token数量
  generation_time: number; // 生成耗时（秒）
  engine_config_id: number; // 使用的引擎配置ID
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

export interface GetGenerationDetailReq {
  id: string; // 生成记录ID
}

export interface GetGenerationDetailResp extends GenerationItem {
}

export interface GetGenerationListReq extends PageQuery {
  user_id?: string; // 用户ID筛选
  status?: number; // 生成状态筛选
  generation_type?: string; // 生成类型筛选
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
  keyword?: string; // 关键词搜索（产品名称）
}

export interface GetGenerationListResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: GenerationItem[]; 
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface RegenerateReq {
  id: string; // 生成记录ID
}

export interface RegenerateResp {
  success: boolean; 
  generation_id: string; // 新的生成记录ID
}


export const GenerationAPI = {
  /** 获取生成记录列表 */
  getGenerationList(data?: GetGenerationListReq): Promise<IApiResponse<GetGenerationListResp>> {
    return request({
      url: "/admin-api/v1/generations",
      method: "GET",
      data: data,
    });
  },

  /** 获取生成记录详情 */
  getGenerationDetail(data?: GetGenerationDetailReq): Promise<IApiResponse<GetGenerationDetailResp>> {
    return request({
      url: "/admin-api/v1/generations/:id",
      method: "GET",
      data: data,
    });
  },

  /** 删除生成记录 */
  deleteGeneration(data?: DeleteGenerationReq): Promise<IApiResponse<DeleteGenerationResp>> {
    return request({
      url: "/admin-api/v1/generations/:id",
      method: "DELETE",
      data: data,
    });
  },

  /** 重新生成 */
  regenerate(data?: RegenerateReq): Promise<IApiResponse<RegenerateResp>> {
    return request({
      url: "/admin-api/v1/generations/:id/regenerate",
      method: "POST",
      data: data,
    });
  },

  /** 批量删除生成记录 */
  batchDeleteGenerations(data?: BatchDeleteGenerationsReq): Promise<IApiResponse<BatchDeleteGenerationsResp>> {
    return request({
      url: "/admin-api/v1/generations/batch",
      method: "DELETE",
      data: data,
    });
  },
};
