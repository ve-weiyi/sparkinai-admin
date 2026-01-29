import request from "@/utils/request";
import type { PageQuery, PageResp } from "./types";

export interface GenerationItem {
  id: string;
  user_id: string;
  user_phone: string;
  product_name: string;
  description: string;
  image_url: string;
  copy_result: string;
  image_urls: string[];
  generation_type: string;
  status: number;
  error_message: string;
  cost_tokens: number;
  generation_time: number;
  engine_config_id: number;
  created_at: string;
  updated_at: string;
}

export interface GetGenerationListReq extends PageQuery {
  user_id?: string;
  status?: number;
  generation_type?: string;
  start_date?: string;
  end_date?: string;
  keyword?: string;
}

export interface GetGenerationListResp extends PageResp {
  list: GenerationItem[];
}

export interface GetGenerationDetailReq {
  id: string;
}

export interface GetGenerationDetailResp extends GenerationItem {}

export interface DeleteGenerationReq {
  id: string;
}

export interface DeleteGenerationResp {
  success: boolean;
  message: string;
}

export interface BatchDeleteGenerationsReq {
  ids: string[];
}

export interface BatchDeleteGenerationsResp {
  success_count: number;
}

export interface RegenerateReq {
  id: string;
}

export interface RegenerateResp {
  success: boolean;
  generation_id: string;
}

export class GenerationAPI {
  static getGenerationList(params: GetGenerationListReq) {
    return request<GetGenerationListResp>({
      url: "/admin-api/v1/generations",
      method: "get",
      params,
    });
  }

  static getGenerationDetail(params: GetGenerationDetailReq) {
    return request<GetGenerationDetailResp>({
      url: `/admin-api/v1/generations/${params.id}`,
      method: "get",
    });
  }

  static deleteGeneration(params: DeleteGenerationReq) {
    return request<DeleteGenerationResp>({
      url: `/admin-api/v1/generations/${params.id}`,
      method: "delete",
    });
  }

  static batchDeleteGenerations(data: BatchDeleteGenerationsReq) {
    return request<BatchDeleteGenerationsResp>({
      url: "/admin-api/v1/generations/batch",
      method: "delete",
      data,
    });
  }

  static regenerate(data: RegenerateReq) {
    return request<RegenerateResp>({
      url: "/admin-api/v1/generations/regenerate",
      method: "post",
      data,
    });
  }
}
