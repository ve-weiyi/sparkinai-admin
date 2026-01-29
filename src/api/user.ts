import request from "@/utils/request";
import type { PageQuery, PageResp } from "./types";

export interface UserItem {
  id: string;
  phone: string;
  nickname: string;
  avatar: string;
  status: number;
  free_usage: number;
  token_balance: number;
  total_generations: number;
  last_login_at: string;
  last_login_ip: string;
  created_at: string;
}

export interface GetUserListReq extends PageQuery {
  phone?: string;
  status?: number;
  keyword?: string;
}

export interface GetUserListResp extends PageResp {
  list: UserItem[];
}

export interface GetUserDetailReq {
  id: string;
}

export interface GetUserDetailResp extends UserItem {
  updated_at: string;
}

export interface CreateUserReq {
  phone: string;
  password?: string;
  nickname?: string;
  free_usage?: number;
  token_balance?: number;
}

export interface CreateUserResp {
  id: string;
}

export interface UpdateUserReq {
  id: string;
  nickname?: string;
  status?: number;
}

export interface UpdateUserResp {
  success: boolean;
  message: string;
}

export interface RechargeUserReq {
  id: string;
  token_amount: number;
  description?: string;
}

export interface RechargeUserResp {
  success: boolean;
  token_balance: number;
}

export interface ResetUserPasswordReq {
  id: string;
  new_password: string;
}

export interface ResetUserPasswordResp {
  success: boolean;
  message: string;
}

export interface DeleteUserReq {
  id: string;
}

export interface DeleteUserResp {
  success: boolean;
  message: string;
}

export interface BatchDeleteUsersReq {
  ids: string[];
}

export interface BatchDeleteUsersResp {
  success_count: number;
}

export const UserAPI = {
  getUserList(params?: GetUserListReq): Promise<IApiResponse<GetUserListResp>> {
    return request({
      url: "/admin-api/v1/users",
      method: "GET",
      params,
    });
  },

  getUserDetail(params: GetUserDetailReq): Promise<IApiResponse<GetUserDetailResp>> {
    return request({
      url: `/admin-api/v1/users/${params.id}`,
      method: "GET",
    });
  },

  createUser(data: CreateUserReq): Promise<IApiResponse<CreateUserResp>> {
    return request({
      url: "/admin-api/v1/users",
      method: "POST",
      data,
    });
  },

  updateUser(data: UpdateUserReq): Promise<IApiResponse<UpdateUserResp>> {
    const { id, ...rest } = data;
    return request({
      url: `/admin-api/v1/users/${id}`,
      method: "PUT",
      data: rest,
    });
  },

  rechargeUser(data: RechargeUserReq): Promise<IApiResponse<RechargeUserResp>> {
    const { id, ...rest } = data;
    return request({
      url: `/admin-api/v1/users/${id}/recharge`,
      method: "POST",
      data: rest,
    });
  },

  resetUserPassword(data: ResetUserPasswordReq): Promise<IApiResponse<ResetUserPasswordResp>> {
    const { id, ...rest } = data;
    return request({
      url: `/admin-api/v1/users/${id}/reset-password`,
      method: "POST",
      data: rest,
    });
  },

  deleteUser(data: DeleteUserReq): Promise<IApiResponse<DeleteUserResp>> {
    return request({
      url: `/admin-api/v1/users/${data.id}`,
      method: "DELETE",
    });
  },

  batchDeleteUsers(data: BatchDeleteUsersReq): Promise<IApiResponse<BatchDeleteUsersResp>> {
    return request({
      url: "/admin-api/v1/users/batch-delete",
      method: "POST",
      data,
    });
  },
};
