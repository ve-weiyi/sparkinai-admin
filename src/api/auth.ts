import request from "@/utils/request";


export interface EmailLoginReq {
  email: string; // 邮箱
  password: string; // 密码
  captcha_key?: string; // 验证码key
  captcha_code?: string; // 验证码
}

export interface EmptyReq {
}

export interface EmptyResp {
}

export interface GetCaptchaCodeReq {
  width?: number; // 宽度
  height?: number; // 高度
}

export interface GetCaptchaCodeResp {
  captcha_key: string; // 验证码key
  captcha_base64: string; // 验证码base64
  captcha_code: string; // 验证码
}

export interface GetClientInfoReq {
}

export interface GetClientInfoResp {
  id: number; // 访客唯一ID
  terminal_id: string; // 终端ID
  os: string; // 操作系统
  browser: string; // 浏览器
  ip_address: string; // IP地址
  ip_source: string; // IP归属地
}

export interface GetOauthAuthorizeUrlReq {
  platform: string; // 平台
  state?: string; // 状态
}

export interface GetOauthAuthorizeUrlResp {
  authorize_url: string; // 授权地址
}

export interface LoginReq {
  username: string; 
  password: string; 
  captcha_key?: string; // 验证码key
  captcha_code?: string; // 验证码
}

export interface LoginResp {
  user_id: string; // 用户id
  user_type: string; // 用户类型：user-普通用户 admin-管理员
  scope: string; // 作用域
  token?: Token; 
}

export interface OauthLoginReq {
  platform: string; // 平台
  code?: string; // 授权码
}

export interface PhoneLoginReq {
  phone: string; // 手机号
  verify_code: string; // 验证码
}

export interface RefreshTokenReq {
  user_id: string; // 用户id
  grant_type: string; // 授权类型
  refresh_token: string; // 刷新令牌
}

export interface RegisterReq {
  email: string; // 邮箱
  password: string; // 密码
  verify_code: string; // 验证码
  confirm_password?: string; // 确认密码（仅用于前端验证）
}

export interface ResetPasswordReq {
  email: string; // 邮箱
  password: string; // 新密码
  verify_code: string; // 验证码
  confirm_password?: string; // 确认密码（仅用于前端验证）
}

export interface SendEmailVerifyCodeReq {
  email: string; // 邮箱
  type: string; // 类型 register,reset_password,bind_email,bind_phone
}

export interface SendPhoneVerifyCodeReq {
  phone: string; // 手机号
  type: string; // 类型 register,reset_password,bind_email,bind_phone
}

export interface ThirdLoginReq {
  platform: string; // 平台
  code: string; // 授权码
  state?: string; // 状态
}

export interface Token {
  token_type: string; // Token 类型（如 "Bearer"）
  access_token: string; // 访问令牌：用于接口访问，有效期短
  expires_in: number; // AccessToken 有效期（秒），如 3600（1小时）
  refresh_token: string; // 刷新令牌：仅用于刷新 AccessToken，有效期长
  refresh_expires_in: number; // RefreshToken 有效期（秒），如 604800（7天）
  refresh_expires_at: number; // RefreshToken 过期时间戳（秒）
}


export const AuthAPI = {
  /** 获取客户端信息 */
  getClientInfo(data?: GetClientInfoReq): Promise<IApiResponse<GetClientInfoResp>> {
    return request({
      url: "/admin-api/v1/auth/client-info",
      method: "GET",
      data: data,
    });
  },

  /** 获取验证码 */
  getCaptchaCode(data?: GetCaptchaCodeReq): Promise<IApiResponse<GetCaptchaCodeResp>> {
    return request({
      url: "/admin-api/v1/auth/captcha-code",
      method: "GET",
      data: data,
    });
  },

  /** 邮箱登录 */
  emailLogin(data?: EmailLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: "/admin-api/v1/auth/email/login",
      method: "POST",
      data: data,
    });
  },

  /** 发送邮件验证码 */
  sendEmailVerifyCode(data?: SendEmailVerifyCodeReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/auth/email/verify-code",
      method: "POST",
      data: data,
    });
  },

  /** 登录 */
  login(data?: LoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: "/admin-api/v1/auth/login",
      method: "POST",
      data: data,
    });
  },

  /** 第三方登录授权地址 */
  getOauthAuthorizeUrl(data?: GetOauthAuthorizeUrlReq): Promise<IApiResponse<GetOauthAuthorizeUrlResp>> {
    return request({
      url: "/admin-api/v1/auth/oauth/authorize-url",
      method: "GET",
      data: data,
    });
  },

  /** 第三方登录 */
  oauthLogin(data?: OauthLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: "/admin-api/v1/auth/oauth/login",
      method: "POST",
      data: data,
    });
  },

  /** 第三方登录 */
  thirdLogin(data?: ThirdLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: "/admin-api/v1/auth/third/login",
      method: "POST",
      data: data,
    });
  },

  /** 重置密码 */
  resetPassword(data?: ResetPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/auth/password/reset",
      method: "POST",
      data: data,
    });
  },

  /** 手机登录 */
  phoneLogin(data?: PhoneLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: "/admin-api/v1/auth/phone/login",
      method: "POST",
      data: data,
    });
  },

  /** 发送手机验证码 */
  sendPhoneVerifyCode(data?: SendPhoneVerifyCodeReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/auth/phone/verify-code",
      method: "POST",
      data: data,
    });
  },

  /** 刷新token */
  refreshToken(data?: RefreshTokenReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: "/admin-api/v1/auth/refresh-token",
      method: "POST",
      data: data,
    });
  },

  /** 注册 */
  register(data?: RegisterReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/auth/register",
      method: "POST",
      data: data,
    });
  },

  /** 注销 */
  logoff(data?: EmptyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/auth/logoff",
      method: "DELETE",
      data: data,
    });
  },

  /** 登出 */
  logout(data?: EmptyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: "/admin-api/v1/auth/logout",
      method: "POST",
      data: data,
    });
  },
};
