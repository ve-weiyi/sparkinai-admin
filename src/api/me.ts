import request from "@/utils/request";


export interface DeleteUserBindThirdPartyReq {
  platform: string; // 平台
}

export interface EmptyReq {
}

export interface EmptyResp {
}

export interface GetUserApisResp {
  list: UserApi[];
}

export interface GetUserMenusResp {
  list: UserMenu[];
}

export interface GetUserReq {
}

export interface GetUserRolesResp {
  list: UserRole[];
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

export interface QueryUserLoginHistoryReq extends PageQuery {
}

export interface UpdateUserAvatarReq {
  avatar: string; // 头像
}

export interface UpdateUserBindEmailReq {
  email: string; // 邮箱
  verify_code: string; // 验证码
}

export interface UpdateUserBindPhoneReq {
  phone: string; // 手机号
  verify_code: string; // 验证码
}

export interface UpdateUserBindThirdPartyReq {
  platform: string; // 平台
  code: string; // 授权码
  state?: string; // 状态
}

export interface UpdateUserPasswordReq {
  old_password: string; // 旧密码
  new_password: string; // 新密码
  confirm_password: string; // 确认密码
}

export interface UpdateUserProfileReq {
  nickname: string;
  avatar: string; // 用户头像
}

export interface UserApi {
  id?: number; // 主键id
  parent_id: number; // 父id
  name: string; // api名称
  path: string; // api路径
  method: string; // api请求方法
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
  children: UserApi[];
}

export interface UserMenu {
  id?: number; // 主键
  parent_id: number; // 父id
  path: string; // 路由地址
  name: string; // 路由名字
  component: string; // Layout组件
  redirect: string; // 路由重定向
  meta: UserMenuMeta; // meta配置
  children?: UserMenu[];
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

export interface UserMenuMeta {
  title?: string;
  icon?: string;
  hidden?: boolean;
  always_show?: boolean;
  affix?: boolean;
  keep_alive?: boolean;
  breadcrumb?: boolean;
}

export interface UserRole {
  id?: number; // 主键id
  parent_id: number; // 父id
  role_key: string; // 角色名
  role_label: string; // 角色标签
  role_comment: string; // 角色备注
}

export interface UserThirdPartyInfo {
  platform: string; // 平台
  open_id: string; // 平台用户id
  nickname: string; // 昵称
  avatar: string; // 头像
  created_at: number; // 创建时间
}

export interface UserVO {
  user_id: string; // 用户ID（UUID）
  username: string; // 用户名
  nickname: string; // 真实姓名
  avatar: string; // 头像
  email: string; // 邮箱
  phone: string; // 手机号
  status: number; // 状态：0-正常 1-禁用
  last_login_at: number; // 最后登录时间（毫秒时间戳）
  last_login_i_p: string; // 最后登录IP
  created_at: number; // 创建时间（毫秒时间戳）
  updated_at: number; // 更新时间（毫秒时间戳）
  third_party: UserThirdPartyInfo[]; // 第三方绑定
  roles: string[];
  perms: string[];
}


export const MeAPI = {
  /** 获取用户接口权限 */
  getUserApis(data?: EmptyReq): Promise<IApiResponse<GetUserApisResp>> {
    return request({
      url: "/admin-api/v1/user/me/apis",
      method: "GET",
      data: data,
    });
  },

  /** 获取用户菜单权限 */
  getUserMenus(data?: EmptyReq): Promise<IApiResponse<GetUserMenusResp>> {
    return request({
      url: "/admin-api/v1/user/me/menus",
      method: "GET",
      data: data,
    });
  },

  /** // ==================== 活动记录 ====================获取用户角色 */
  getUserRoles(data?: EmptyReq): Promise<IApiResponse<GetUserRolesResp>> {
    return request({
      url: "/admin-api/v1/user/me/roles",
      method: "GET",
      data: data,
    });
  },

  /** // ==================== 账号安全 ====================修改用户头像 */
  updateUserAvatar(data?: UpdateUserAvatarReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/users/me/avatar",
      method: "PUT",
      data: data,
    });
  },

  /** 绑定第三方平台账号 */
  bindUserThirdParty(data?: UpdateUserBindThirdPartyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/users/me/bindings/:platform",
      method: "PUT",
      data: data,
    });
  },

  /** 解绑第三方平台账号 */
  unbindUserThirdParty(data?: DeleteUserBindThirdPartyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/users/me/bindings/:platform",
      method: "DELETE",
      data: data,
    });
  },

  /** // ==================== 绑定管理 ====================绑定邮箱 */
  bindUserEmail(data?: UpdateUserBindEmailReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/users/me/bindings/email",
      method: "PUT",
      data: data,
    });
  },

  /** 绑定手机号 */
  bindUserPhone(data?: UpdateUserBindPhoneReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/users/me/bindings/phone",
      method: "PUT",
      data: data,
    });
  },

  /** // ==================== 活动记录 ====================查询用户登录历史 */
  getUserLoginHistory(data?: QueryUserLoginHistoryReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/users/me/login-history",
      method: "GET",
      data: data,
    });
  },

  /** 修改用户密码 */
  updateUserPassword(data?: UpdateUserPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/users/me/password",
      method: "PUT",
      data: data,
    });
  },

  /** // ==================== 基础信息 ====================获取当前用户信息 */
  getUserProfile(data?: GetUserReq): Promise<IApiResponse<UserVO>> {
    return request({
      url: "/admin-api/v1/users/me/profile",
      method: "GET",
      data: data,
    });
  },

  /** 更新当前用户信息 */
  updateUserProfile(data?: UpdateUserProfileReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/users/me/profile",
      method: "PUT",
      data: data,
    });
  },
};
