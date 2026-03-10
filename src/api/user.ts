import request from "@/utils/request";
import type {
  GetUserProfileReq,
  GetUserProfileResp,
  GetUserListReq,
  GetUserListResp,
  RechargeUserReq,
  RechargeUserResp,
  ResetUserPasswordReq,
  ResetUserPasswordResp,
  UpdateUserStatusReq,
  UpdateUserStatusResp,
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
  getUserProfile(params?: GetUserProfileReq): Promise<IApiResponse<GetUserProfileResp>> {
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

  /** 更新用户状态 */
  updateUserStatus(data?: UpdateUserStatusReq): Promise<IApiResponse<UpdateUserStatusResp>> {
    return request({
      url: `/admin-api/v1/users/${data.user_id}/status`,
      method: "PUT",
      data: data,
    });
  },
};
