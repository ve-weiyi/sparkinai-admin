import request from "@/utils/request";


export interface PingReq {
}

export interface PingResp {
  env: string; 
  name: string; 
  version: string; 
  runtime: string; 
  description: string; 
}


export const AdminApiAPI = {
  /** 健康检查 */
  ping(data?: PingReq): Promise<IApiResponse<PingResp>> {
    return request({
      url: "/admin-api/v1/ping",
      method: "GET",
      data: data,
    });
  },
};
