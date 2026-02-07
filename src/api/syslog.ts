import request from "@/utils/request";
import type {
  BatchDeleteSyslogReq,
  BatchDeleteSyslogResp,
  GetOperationLogListReq,
  GetOperationLogListResp,
  GetUploadLogListReq,
  GetUploadLogListResp,
  GetUserLoginLogListReq,
  GetUserLoginLogListResp,
} from "./types";

/** 系统日志管理 */
export const SyslogAPI = {
  /** 获取用户登录日志列表 */
  getUserLoginLogList(
    params?: GetUserLoginLogListReq
  ): Promise<IApiResponse<GetUserLoginLogListResp>> {
    return request({
      url: `/admin-api/v1/syslogs/login_log`,
      method: "GET",
      params: params,
    });
  },

  /** 批量删除用户登录日志 */
  batchDeleteUserLoginLogs(
    data?: BatchDeleteSyslogReq
  ): Promise<IApiResponse<BatchDeleteSyslogResp>> {
    return request({
      url: `/admin-api/v1/syslogs/login_log/batch_delete`,
      method: "POST",
      data: data,
    });
  },

  /** 获取操作日志列表 */
  getOperationLogList(
    params?: GetOperationLogListReq
  ): Promise<IApiResponse<GetOperationLogListResp>> {
    return request({
      url: `/admin-api/v1/syslogs/operation_log`,
      method: "GET",
      params: params,
    });
  },

  /** 批量删除操作日志 */
  batchDeleteOperationLogs(
    data?: BatchDeleteSyslogReq
  ): Promise<IApiResponse<BatchDeleteSyslogResp>> {
    return request({
      url: `/admin-api/v1/syslogs/operation_log/batch_delete`,
      method: "POST",
      data: data,
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

  /** 批量删除文件上传日志 */
  batchDeleteUploadLogs(data?: BatchDeleteSyslogReq): Promise<IApiResponse<BatchDeleteSyslogResp>> {
    return request({
      url: `/admin-api/v1/syslogs/upload_log/batch_delete`,
      method: "POST",
      data: data,
    });
  },
};
