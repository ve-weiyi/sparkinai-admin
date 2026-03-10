import request from "@/utils/request";
import type {
  AdjustUserBalanceReq,
  AdjustUserBalanceResp,
  AdjustUserCreditLimitReq,
  AdjustUserCreditLimitResp,
  GetUserAccountListReq,
  GetUserAccountListResp,
} from "./types";

/** 用户账户管理 */
export const PaymentAccountAPI = {
  /** 获取用户账户列表 */
  getUserAccountList(
    params?: GetUserAccountListReq
  ): Promise<IApiResponse<GetUserAccountListResp>> {
    return request({
      url: `/admin-api/v1/payment/accounts`,
      method: "GET",
      params: params,
    });
  },

  /** 调整用户余额 */
  adjustUserBalance(data?: AdjustUserBalanceReq): Promise<IApiResponse<AdjustUserBalanceResp>> {
    return request({
      url: `/admin-api/v1/payment/accounts/adjust`,
      method: "POST",
      data: data,
    });
  },

  /** 更新用户信用额度 */
  adjustUserCreditLimit(
    data?: AdjustUserCreditLimitReq
  ): Promise<IApiResponse<AdjustUserCreditLimitResp>> {
    return request({
      url: `/admin-api/v1/payment/accounts/credit-limit`,
      method: "POST",
      data: data,
    });
  },
};
