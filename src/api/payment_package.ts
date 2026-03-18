import request from "@/utils/request";
import type {
  CreateRechargePackageReq,
  CreateRechargePackageResp,
  DeleteRechargePackageReq,
  DeleteRechargePackageResp,
  GetRechargePackageListReq,
  GetRechargePackageListResp,
  UpdateRechargePackageReq,
  UpdateRechargePackageResp
} from "./types";

/** 充值套餐管理 */
export const PaymentPackageAPI = {
  /** 获取充值套餐列表 */
  getRechargePackageList(params?: GetRechargePackageListReq): Promise<IApiResponse<GetRechargePackageListResp>> {
    return request({
      url: `/api/v1/payment/packages`,
      method: "GET",
      params: params,
    });
  },

  /** 创建充值套餐 */
  createRechargePackage(data?: CreateRechargePackageReq): Promise<IApiResponse<CreateRechargePackageResp>> {
    return request({
      url: `/api/v1/payment/packages`,
      method: "POST",
      data: data,
    });
  },

  /** 更新充值套餐 */
  updateRechargePackage(data?: UpdateRechargePackageReq): Promise<IApiResponse<UpdateRechargePackageResp>> {
    return request({
      url: `/api/v1/payment/packages/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除充值套餐 */
  deleteRechargePackage(data?: DeleteRechargePackageReq): Promise<IApiResponse<DeleteRechargePackageResp>> {
    return request({
      url: `/api/v1/payment/packages/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

};
