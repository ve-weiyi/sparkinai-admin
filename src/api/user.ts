import request from "@/utils/request";


export interface GetUserDetailReq {
  id: string; // 用户ID
}

export interface GetUserDetailResp extends UserItem {
  updated_at: number; // 更新时间
}

export interface GetUserListReq extends PageQuery {
  phone?: string; // 手机号筛选
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索（昵称/手机号）
}

export interface GetUserListResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: UserItem[]; 
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface RechargeUserReq {
  id: string; // 用户ID
  token_amount: number; // 充值token数量
  description?: string; // 充值说明
}

export interface RechargeUserResp {
  success: boolean; 
  token_balance: number; // 充值后余额
}

export interface ResetUserPasswordReq {
  id: string; // 用户ID
  new_password: string; // 新密码
}

export interface ResetUserPasswordResp {
  success: boolean; 
}

export interface UserItem {
  id: string; // 用户ID (UUID)
  user_id: string; // 用户ID (UUID)
  username: string; //  用户名
  nickname: string; // 用户昵称
  avatar: string; // 用户头像
  phone?: string; // 用户手机号
  email?: string; // 用户邮箱
  status: number; // 状态：0-禁用 1-正常 2-冻结
  free_usage: number; // 免费使用次数
  token_balance: number; // Token余额
  total_generations: number; // 累计生成次数
  last_login_at: number; // 最后登录时间（时间戳）
  last_login_ip: string; // 最后登录IP
  created_at: number; // 创建时间（时间戳）
  role_labels: UserRoleLabel[]; 
}

export interface UserRoleLabel {
  role_id: number; 
  role_key: string; 
  role_label: string; 
}


export const UserAPI = {
  /** 获取用户列表 */
  getUserList(data?: GetUserListReq): Promise<IApiResponse<GetUserListResp>> {
    return request({
      url: "/admin-api/v1/users",
      method: "GET",
      data: data,
    });
  },

  /** 获取用户详情 */
  getUserDetail(data?: GetUserDetailReq): Promise<IApiResponse<GetUserDetailResp>> {
    return request({
      url: "/admin-api/v1/users/:id",
      method: "GET",
      data: data,
    });
  },

  /** 用户充值 */
  rechargeUser(data?: RechargeUserReq): Promise<IApiResponse<RechargeUserResp>> {
    return request({
      url: "/admin-api/v1/users/:id/recharge",
      method: "POST",
      data: data,
    });
  },

  /** 重置用户密码 */
  resetUserPassword(data?: ResetUserPasswordReq): Promise<IApiResponse<ResetUserPasswordResp>> {
    return request({
      url: "/admin-api/v1/users/:id/reset-password",
      method: "POST",
      data: data,
    });
  },
};
