import request from "@/utils/request";
import type {
  DeleteUserBindThirdPartyReq,
  EmptyReq,
  EmptyResp,
  GetUserApisResp,
  GetUserMenusResp,
  GetUserProfileReq,
  GetUserRolesResp,
  PageResult,
  QueryUserLoginHistoryReq,
  UpdateUserAvatarReq,
  UpdateUserBindEmailReq,
  UpdateUserBindPhoneReq,
  UpdateUserBindThirdPartyReq,
  UpdateUserPasswordReq,
  UpdateUserProfileReq,
  UserVO,
} from "./types";

/** 个人中心 */
export const MeAPI = {
  /** 获取用户接口权限 */
  getUserApis(params?: EmptyReq): Promise<IApiResponse<GetUserApisResp>> {
    return request({
      url: `/admin-api/v1/user/me/apis`,
      method: "GET",
      params: params,
    });
  },

  /** 获取用户菜单权限 */
  getUserMenus(params?: EmptyReq): Promise<IApiResponse<GetUserMenusResp>> {
    return request({
      url: `/admin-api/v1/user/me/menus`,
      method: "GET",
      params: params,
    });
  },

  /** 获取用户角色 */
  getUserRoles(params?: EmptyReq): Promise<IApiResponse<GetUserRolesResp>> {
    return request({
      url: `/admin-api/v1/user/me/roles`,
      method: "GET",
      params: params,
    });
  },

  /** 修改用户头像 */
  updateUserAvatar(data?: UpdateUserAvatarReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/users/me/avatar`,
      method: "PUT",
      data: data,
    });
  },

  /** 绑定第三方平台账号 */
  bindUserThirdParty(data?: UpdateUserBindThirdPartyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/users/me/bindings/${data.platform}`,
      method: "PUT",
      data: data,
    });
  },

  /** 解绑第三方平台账号 */
  unbindUserThirdParty(data?: DeleteUserBindThirdPartyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/users/me/bindings/${data.platform}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 绑定邮箱 */
  bindUserEmail(data?: UpdateUserBindEmailReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/users/me/bindings/email`,
      method: "PUT",
      data: data,
    });
  },

  /** 绑定手机号 */
  bindUserPhone(data?: UpdateUserBindPhoneReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/users/me/bindings/phone`,
      method: "PUT",
      data: data,
    });
  },

  /** 查询用户登录历史 */
  getUserLoginHistory(params?: QueryUserLoginHistoryReq): Promise<IApiResponse<PageResult>> {
    return request({
      url: `/admin-api/v1/users/me/login-history`,
      method: "GET",
      params: params,
    });
  },

  /** 修改用户密码 */
  updateUserPassword(data?: UpdateUserPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/users/me/password`,
      method: "PUT",
      data: data,
    });
  },

  /** 获取当前用户信息 */
  getUserProfile(params?: GetUserProfileReq): Promise<IApiResponse<UserVO>> {
    return request({
      url: `/admin-api/v1/users/me/profile`,
      method: "GET",
      params: params,
    });
  },

  /** 更新当前用户信息 */
  updateUserProfile(data?: UpdateUserProfileReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/users/me/profile`,
      method: "PUT",
      data: data,
    });
  },
};
