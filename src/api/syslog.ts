import request from "@/utils/request";
import type {
  GetGenerationLogListReq,
  GetGenerationLogListResp,
  GetOperationLogListReq,
  GetOperationLogListResp,
  GetUploadLogListReq,
  GetUploadLogListResp,
  GetUserLoginLogListReq,
  GetUserLoginLogListResp
} from "./types";

/** 系统日志管理 */
export const SyslogAPI = {
  /** 获取生成任务日志列表 */
  getGenerationLogList(params?: GetGenerationLogListReq): Promise<IApiResponse<GetGenerationLogListResp>> {
    return request({
      url: `/admin-api/v1/syslogs/generation_log`,
      method: "GET",
      params: params,
    });
  },

  /** 获取用户登录日志列表 */
  getUserLoginLogList(params?: GetUserLoginLogListReq): Promise<IApiResponse<GetUserLoginLogListResp>> {
    return request({
      url: `/admin-api/v1/syslogs/login_log`,
      method: "GET",
      params: params,
    });
  },

  /** 获取操作日志列表 */
  getOperationLogList(params?: GetOperationLogListReq): Promise<IApiResponse<GetOperationLogListResp>> {
    return request({
      url: `/admin-api/v1/syslogs/operation_log`,
      method: "GET",
      params: params,
    });
  },

  /** 获取文件上传日志列表 */
  getUploadLogList(params?: GetUploadLogListReq): Promise<IApiResponse<GetUploadLogListResp>> {
    return request({
      url: `/admin-api/v1/syslogs/upload_log`,
      method: "GET",
      params: params,
    });
  },

};
