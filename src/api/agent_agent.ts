import request from "@/utils/request";
import type {
  CreateAgentReq,
  CreateAgentResp,
  DeleteAgentReq,
  DeleteAgentResp,
  GetAgentDetailReq,
  GetAgentDetailResp,
  GetAgentListReq,
  GetAgentListResp,
  UpdateAgentReq,
  UpdateAgentResp,
} from "./types";

/** Agent管理 */
export const AgentAgentAPI = {
  /** 获取 Agent 列表 */
  getAgentList(params?: GetAgentListReq): Promise<IApiResponse<GetAgentListResp>> {
    return request({
      url: `/api/v1/agents`,
      method: "GET",
      params: params,
    });
  },

  /** 创建 Agent */
  createAgent(data?: CreateAgentReq): Promise<IApiResponse<CreateAgentResp>> {
    return request({
      url: `/api/v1/agents`,
      method: "POST",
      data: data,
    });
  },

  /** 获取 Agent 详情 */
  getAgentDetail(params?: GetAgentDetailReq): Promise<IApiResponse<GetAgentDetailResp>> {
    return request({
      url: `/api/v1/agents/${params.id}`,
      method: "GET",
      params: params,
    });
  },

  /** 更新 Agent */
  updateAgent(data?: UpdateAgentReq): Promise<IApiResponse<UpdateAgentResp>> {
    return request({
      url: `/api/v1/agents/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除 Agent */
  deleteAgent(data?: DeleteAgentReq): Promise<IApiResponse<DeleteAgentResp>> {
    return request({
      url: `/api/v1/agents/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

};
