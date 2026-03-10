import request from "@/utils/request";
import type {
  GetPaymentOrderDetailReq,
  GetPaymentOrderDetailResp,
  GetPaymentOrderListReq,
  GetPaymentOrderListResp,
} from "./types";

/** 支付订单管理 */
export const PaymentOrderAPI = {
  /** 获取支付订单列表 */
  getPaymentOrderList(
    params?: GetPaymentOrderListReq
  ): Promise<IApiResponse<GetPaymentOrderListResp>> {
    return request({
      url: `/admin-api/v1/payment/orders`,
      method: "GET",
      params: params,
    });
  },

  /** 获取支付订单详情 */
  getPaymentOrderDetail(
    params?: GetPaymentOrderDetailReq
  ): Promise<IApiResponse<GetPaymentOrderDetailResp>> {
    return request({
      url: `/admin-api/v1/payment/orders/${params.id}`,
      method: "GET",
      params: params,
    });
  },
};
