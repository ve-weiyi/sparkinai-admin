import request from "@/utils/request";
import type { EmptyResp, UpdateAccountRolesReq, GetAccountListReq, PageResp, UpdateAccountStatusReq, UpdateAccountPasswordReq } from "./types";

/** 账号管理（Admin） */
export const AccountAPI = {
  /** 修改用户密码 */
  updateAccountPassword(data?: UpdateAccountPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/account/password`,
      method: "PUT",
      data: data,
    });
  },

  /** 修改用户角色 */
  updateAccountRoles(data?: UpdateAccountRolesReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/account/roles`,
      method: "PUT",
      data: data,
    });
  },

  /** 查询用户列表 */
  getAccountList(data?: GetAccountListReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: `/admin-api/v1/accounts`,
      method: "POST",
      data: data,
    });
  },

  /** 查询在线用户列表 */
  getAccountOnlineList(data?: GetAccountListReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: `/admin-api/v1/accounts/onlinet`,
      method: "POST",
      data: data,
    });
  },

  /** 修改用户状态 */
  updateAccountStatus(data?: UpdateAccountStatusReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/accounts/status`,
      method: "PUT",
      data: data,
    });
  },

};
