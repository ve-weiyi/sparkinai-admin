import request from "@/utils/request";
import type {
  BatchDeleteRolesReq,
  BatchDeleteRolesResp,
  CreateRoleReq,
  DeleteRoleReq,
  EmptyResp,
  GetRoleListReq,
  GetRolePermissionsReq,
  GetRoleReq,
  PageResp,
  RolePermissionsResp,
  RoleVO,
  UpdateRoleApiPermissionsReq,
  UpdateRoleMenuPermissionsReq,
  UpdateRoleReq,
} from "./types";

/** 角色管理 */
export const RoleAPI = {
  /** 获取角色列表 */
  getRoleList(params?: GetRoleListReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: `/admin-api/v1/roles`,
      method: "GET",
      params: params,
    });
  },

  /** 创建角色 */
  createRole(data?: CreateRoleReq): Promise<IApiResponse<RoleVO>> {
    return request({
      url: `/admin-api/v1/roles`,
      method: "POST",
      data: data,
    });
  },

  /** 批量删除角色 */
  batchDeleteRoles(data?: BatchDeleteRolesReq): Promise<IApiResponse<BatchDeleteRolesResp>> {
    return request({
      url: `/admin-api/v1/roles`,
      method: "DELETE",
      data: data,
    });
  },

  /** 获取角色详情 */
  getRole(params?: GetRoleReq): Promise<IApiResponse<RoleVO>> {
    return request({
      url: `/admin-api/v1/roles/${params.id}`,
      method: "GET",
      params: params,
    });
  },

  /** 更新角色信息 */
  updateRole(data?: UpdateRoleReq): Promise<IApiResponse<RoleVO>> {
    return request({
      url: `/admin-api/v1/roles/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除角色 */
  deleteRole(data?: DeleteRoleReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/roles/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 查询角色权限配置 */
  getRolePermissions(data?: GetRolePermissionsReq): Promise<IApiResponse<RolePermissionsResp>> {
    return request({
      url: `/admin-api/v1/roles/permissions`,
      method: "POST",
      data: data,
    });
  },

  /** 更新角色接口权限 */
  updateRoleApiPermissions(data?: UpdateRoleApiPermissionsReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/roles/permissions/apis`,
      method: "PUT",
      data: data,
    });
  },

  /** 更新角色菜单权限 */
  updateRoleMenuPermissions(data?: UpdateRoleMenuPermissionsReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/roles/permissions/menus`,
      method: "PUT",
      data: data,
    });
  },
};
