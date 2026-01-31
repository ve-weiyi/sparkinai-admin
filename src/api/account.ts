import request from "@/utils/request";


export interface EmptyResp {
}

export interface GetAccountListReq extends PageQuery {
  username?: string; 
  email?: string; 
  phone?: string; 
  status?: number; // 状态: -1删除 0正常 1禁用
  user_ids?: string[]; // 用户ID
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface PageResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: any; 
}

export interface UpdateAccountPasswordReq {
  user_id: string; 
  password: string; 
}

export interface UpdateAccountRolesReq {
  user_id: string; 
  role_ids: number[]; 
}

export interface UpdateAccountStatusReq {
  user_id: string; 
  status: number; // 状态: -1删除 0正常 1禁用
}


export const AccountAPI = {
  /** 修改用户密码 */
  updateAccountPassword(data?: UpdateAccountPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/account/password",
      method: "PUT",
      data: data,
    });
  },

  /** 修改用户角色 */
  updateAccountRoles(data?: UpdateAccountRolesReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/account/roles",
      method: "PUT",
      data: data,
    });
  },

  /** 查询用户列表 */
  getAccountList(data?: GetAccountListReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/accounts",
      method: "POST",
      data: data,
    });
  },

  /** 查询在线用户列表 */
  getAccountOnlineList(data?: GetAccountListReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/accounts/onlinet",
      method: "POST",
      data: data,
    });
  },

  /** 修改用户状态 */
  updateAccountStatus(data?: UpdateAccountStatusReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/accounts/status",
      method: "PUT",
      data: data,
    });
  },
};
