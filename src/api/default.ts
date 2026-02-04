import request from "@/utils/request";
import type { PingReq, PingResp } from "./types";

export const DefaultAPI = {
  /** 健康检查 */
  ping(params?: PingReq): Promise<IApiResponse<PingResp>> {
    return request({
      url: `/admin-api/v1/ping`,
      method: "GET",
      params: params,
    });
  },

};
