import request from "@/utils/request";
import type {
  BatchDeleteMenusReq,
  BatchDeleteMenusResp,
  CleanMenusReq,
  CleanMenusResp,
  CreateMenuReq,
  DeleteMenuReq,
  EmptyResp,
  GetMenuReq,
  MenuVO,
  PageResp,
  QueryMenuReq,
  SyncMenusReq,
  SyncMenusResp,
  UpdateMenuReq
} from "./types";

/** 菜单管理 */
export const MenuAPI = {
  /** 获取菜单列表 */
  getMenus(params?: QueryMenuReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: `/admin-api/v1/menus`,
      method: "GET",
      params: params,
    });
  },

  /** 创建菜单 */
  createMenu(data?: CreateMenuReq): Promise<IApiResponse<MenuVO>> {
    return request({
      url: `/admin-api/v1/menus`,
      method: "POST",
      data: data,
    });
  },

  /** 批量删除菜单 */
  batchDeleteMenus(data?: BatchDeleteMenusReq): Promise<IApiResponse<BatchDeleteMenusResp>> {
    return request({
      url: `/admin-api/v1/menus`,
      method: "DELETE",
      data: data,
    });
  },

  /** 获取菜单详情 */
  getMenu(params?: GetMenuReq): Promise<IApiResponse<MenuVO>> {
    return request({
      url: `/admin-api/v1/menus/${params.id}`,
      method: "GET",
      params: params,
    });
  },

  /** 更新菜单 */
  updateMenu(data?: UpdateMenuReq): Promise<IApiResponse<MenuVO>> {
    return request({
      url: `/admin-api/v1/menus/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除菜单 */
  deleteMenu(data?: DeleteMenuReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/menus/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 清空菜单列表 */
  cleanMenus(data?: CleanMenusReq): Promise<IApiResponse<CleanMenusResp>> {
    return request({
      url: `/admin-api/v1/menus/clean`,
      method: "POST",
      data: data,
    });
  },

  /** 同步菜单列表 */
  syncMenus(data?: SyncMenusReq): Promise<IApiResponse<SyncMenusResp>> {
    return request({
      url: `/admin-api/v1/menus/sync`,
      method: "POST",
      data: data,
    });
  },

};
