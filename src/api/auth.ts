import request from "@/utils/request";
import type {
  EmailCodeLoginReq,
  EmptyReq,
  EmptyResp,
  GetCaptchaCodeReq,
  GetCaptchaCodeResp,
  GetClientInfoReq,
  GetClientInfoResp,
  GetOauthAuthorizeUrlReq,
  GetOauthAuthorizeUrlResp,
  LoginResp,
  OauthLoginReq,
  PasswordLoginReq,
  PhoneCodeLoginReq,
  RefreshTokenReq,
  RegisterReq,
  ResetPasswordReq,
  SendEmailCodeReq,
  SendPhoneCodeReq,
} from "./types";

/** 登录认证 */
export const AuthAPI = {
  /** 获取验证码 */
  getCaptchaCode(params?: GetCaptchaCodeReq): Promise<IApiResponse<GetCaptchaCodeResp>> {
    return request({
      url: `/admin-api/v1/auth/captcha-code`,
      method: "GET",
      params: params,
    });
  },

  /** 获取客户端信息 */
  getClientInfo(params?: GetClientInfoReq): Promise<IApiResponse<GetClientInfoResp>> {
    return request({
      url: `/admin-api/v1/auth/client-info`,
      method: "GET",
      params: params,
    });
  },

  /** 邮箱验证码登录（仅登录，未注册报错） */
  emailCodeLogin(data?: EmailCodeLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/email/login/code`,
      method: "POST",
      data: data,
    });
  },

  /** 发送邮箱验证码 */
  sendEmailCode(data?: SendEmailCodeReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/email/send-code`,
      method: "POST",
      data: data,
    });
  },

  /** 密码登录（账号/手机号/邮箱） */
  passwordLogin(data?: PasswordLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/login/password`,
      method: "POST",
      data: data,
    });
  },

  /** 获取第三方授权URL */
  getOauthAuthorizeUrl(
    params?: GetOauthAuthorizeUrlReq
  ): Promise<IApiResponse<GetOauthAuthorizeUrlResp>> {
    return request({
      url: `/admin-api/v1/auth/oauth/${params.platform}/authorize`,
      method: "GET",
      params: params,
    });
  },

  /** 第三方登录（自动注册） */
  oauthLogin(data?: OauthLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/oauth/${data.platform}/login`,
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

  /** 手机验证码登录（自动注册） */
  phoneCodeLogin(data?: PhoneCodeLoginReq): Promise<IApiResponse<LoginResp>> {
    return request({
      url: `/admin-api/v1/auth/phone/login/code`,
      method: "POST",
      data: data,
    });
  },

  /** 发送手机验证码 */
  sendPhoneCode(data?: SendPhoneCodeReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/phone/send-code`,
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

  /** 邮箱注册 */
  register(data?: RegisterReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/register`,
      method: "POST",
      data: data,
    });
  },

  /** 退出登录（需登录） */
  logout(data?: EmptyReq): Promise<IApiResponse<EmptyResp>> {
    return request({
      url: `/admin-api/v1/auth/logout`,
      method: "POST",
      data: data,
    });
  },
};
