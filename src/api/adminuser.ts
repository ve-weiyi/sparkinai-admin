import request from "@/utils/request";
import type {
  UpdateAdminPasswordReq,
  EmptyResp,
  UpdateAdminRolesReq,
  GetAdminListReq,
  PageResp,
  UpdateAdminStatusReq,
} from "./types";

/** 账号管理（Admin） */
export const AdminuserAPI = {
  /** 修改管理员密码 */
  updateAdminPassword(data?: UpdateAdminPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/adminuser/password`,
      method: "PUT",
      data: data,
    });
  },

  /** 修改管理员角色 */
  updateAdminRoles(data?: UpdateAdminRolesReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/adminuser/roles`,
      method: "PUT",
      data: data,
    });
  },

  /** 查询管理员列表 */
  getAdminList(data?: GetAdminListReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: `/admin-api/v1/adminusers`,
      method: "POST",
      data: data,
    });
  },

  /** 修改管理员状态 */
  updateAdminStatus(data?: UpdateAdminStatusReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/adminusers/status`,
      method: "PUT",
      data: data,
    });
  },
};
