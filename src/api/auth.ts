import request from "@/utils/request";
import type { GetClientInfoReq, GetClientInfoResp, SendEmailVerifyCodeReq, EmptyResp, SendPhoneVerifyCodeReq, RegisterReq, GetCaptchaCodeReq, EmailLoginReq, ResetPasswordReq, LoginResp, GetOauthAuthorizeUrlReq, GetOauthAuthorizeUrlResp, OauthLoginReq, PhoneLoginReq, RefreshTokenReq, EmptyReq, GetCaptchaCodeResp, LoginReq } from "./types";

/** 登录认证 */
export const AuthAPI = {
  /** 获取客户端信息 */
  getClientInfo(params?: GetClientInfoReq): Promise<IApiResponse<GetClientInfoResp>> {
    return request({
      url: `/admin-api/v1/auth/client-info`,
      method: "GET",
      params: params,
    });
  },

  /** 获取验证码 */
  getCaptchaCode(params?: GetCaptchaCodeReq): Promise<IApiResponse<GetCaptchaCodeResp>> {
    return request({
      url: `/admin-api/v1/auth/captcha-code`,
      method: "GET",
      params: params,
    });
  },

  /** 邮箱登录 */
  emailLogin(data?: EmailLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/email/login`,
      method: "POST",
      data: data,
    });
  },

  /** 发送邮件验证码 */
  sendEmailVerifyCode(data?: SendEmailVerifyCodeReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/email/verify-code`,
      method: "POST",
      data: data,
    });
  },

  /** 登录 */
  login(data?: LoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/login`,
      method: "POST",
      data: data,
    });
  },

  /** 第三方登录授权地址 */
  getOauthAuthorizeUrl(params?: GetOauthAuthorizeUrlReq): Promise<IApiResponse<GetOauthAuthorizeUrlResp>> {
    return request({
      url: `/admin-api/v1/auth/oauth/authorize-url`,
      method: "GET",
      params: params,
    });
  },

  /** 第三方登录 */
  oauthLogin(data?: OauthLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/oauth/login`,
      method: "POST",
      data: data,
    });
  },

  /** 重置密码 */
  resetPassword(data?: ResetPasswordReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/password/reset`,
      method: "POST",
      data: data,
    });
  },

  /** 手机登录 */
  phoneLogin(data?: PhoneLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/phone/login`,
      method: "POST",
      data: data,
    });
  },

  /** 发送手机验证码 */
  sendPhoneVerifyCode(data?: SendPhoneVerifyCodeReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/phone/verify-code`,
      method: "POST",
      data: data,
    });
  },

  /** 刷新token */
  refreshToken(data?: RefreshTokenReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/refresh-token`,
      method: "POST",
      data: data,
    });
  },

  /** 注册 */
  register(data?: RegisterReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/register`,
      method: "POST",
      data: data,
    });
  },

  /** 登出 */
  logout(data?: EmptyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/logout`,
      method: "POST",
      data: data,
    });
  },

};
