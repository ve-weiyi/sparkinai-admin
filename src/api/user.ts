import request from "@/utils/request";
import type {
  GetUserDetailReq,
  GetUserDetailResp,
  GetUserListReq,
  GetUserListResp,
  RechargeUserReq,
  RechargeUserResp,
  ResetUserPasswordReq,
  ResetUserPasswordResp
} from "./types";

/** 用户管理 */
export const UserAPI = {
  /** 获取用户列表 */
  getUserList(params?: GetUserListReq): Promise<IApiResponse<GetUserListResp>> {
    return request({
      url: `/admin-api/v1/users`,
      method: "GET",
      params: params,
    });
  },

  /** 获取用户详情 */
  getUserDetail(params?: GetUserDetailReq): Promise<IApiResponse<GetUserDetailResp>> {
    return request({
      url: `/admin-api/v1/users/${params.user_id}`,
      method: "GET",
      params: params,
    });
  },

  /** 用户充值 */
  rechargeUser(data?: RechargeUserReq): Promise<IApiResponse<RechargeUserResp>> {
    return request({
      url: `/admin-api/v1/users/${data.user_id}/recharge`,
      method: "POST",
      data: data,
    });
  },

  /** 重置用户密码 */
  resetUserPassword(data?: ResetUserPasswordReq): Promise<IApiResponse<ResetUserPasswordResp>> {
    return request({
      url: `/admin-api/v1/users/${data.user_id}/reset-password`,
      method: "POST",
      data: data,
    });
  },

};
