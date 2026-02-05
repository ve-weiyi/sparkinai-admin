import request from "@/utils/request";
import type {
  CreatePromptReq,
  CreatePromptResp,
  DeletePromptReq,
  DeletePromptResp,
  GetPromptListReq,
  GetPromptListResp,
  UpdatePromptReq,
  UpdatePromptResp,
} from "./types";

/** 提示词管理 */
export const PromptAPI = {
  /** 获取提示词列表 */
  getPromptList(params?: GetPromptListReq): Promise<IApiResponse<GetPromptListResp>> {
    return request({
      url: `/admin-api/v1/prompts`,
      method: "GET",
      params: params,
    });
  },

  /** 创建提示词 */
  createPrompt(data?: CreatePromptReq): Promise<IApiResponse<CreatePromptResp>> {
    return request({
      url: `/admin-api/v1/prompts`,
      method: "POST",
      data: data,
    });
  },

  /** 更新提示词 */
  updatePrompt(data?: UpdatePromptReq): Promise<IApiResponse<UpdatePromptResp>> {
    return request({
      url: `/admin-api/v1/prompts/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除提示词 */
  deletePrompt(data?: DeletePromptReq): Promise<IApiResponse<DeletePromptResp>> {
    return request({
      url: `/admin-api/v1/prompts/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },
};
