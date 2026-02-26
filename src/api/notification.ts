import request from "@/utils/request";
import type {
  CreateNotifyTemplateReq,
  CreateNotifyTemplateResp,
  DeleteNotifyTemplateReq,
  DeleteNotifyTemplateResp,
  GetEmailMessageListReq,
  GetEmailMessageListResp,
  GetInboxMessageListReq,
  GetInboxMessageListResp,
  GetNotifyTemplateListReq,
  GetNotifyTemplateListResp,
  GetSmsMessageListReq,
  GetSmsMessageListResp,
  UpdateNotifyTemplateReq,
  UpdateNotifyTemplateResp,
} from "./types";

/** 通知管理 */
export const NotificationAPI = {
  /** 获取邮件消息列表 */
  getEmailMessageList(
    params?: GetEmailMessageListReq
  ): Promise<IApiResponse<GetEmailMessageListResp>> {
    return request({
      url: `/admin-api/v1/email-messages`,
      method: "GET",
      params: params,
    });
  },

  /** 获取站内消息列表 */
  getInboxMessageList(
    params?: GetInboxMessageListReq
  ): Promise<IApiResponse<GetInboxMessageListResp>> {
    return request({
      url: `/admin-api/v1/inbox-messages`,
      method: "GET",
      params: params,
    });
  },

  /** 获取通知模板列表 */
  getNotifyTemplateList(
    params?: GetNotifyTemplateListReq
  ): Promise<IApiResponse<GetNotifyTemplateListResp>> {
    return request({
      url: `/admin-api/v1/notify-templates`,
      method: "GET",
      params: params,
    });
  },

  /** 创建通知模板 */
  createNotifyTemplate(
    data?: CreateNotifyTemplateReq
  ): Promise<IApiResponse<CreateNotifyTemplateResp>> {
    return request({
      url: `/admin-api/v1/notify-templates`,
      method: "POST",
      data: data,
    });
  },

  /** 更新通知模板 */
  updateNotifyTemplate(
    data?: UpdateNotifyTemplateReq
  ): Promise<IApiResponse<UpdateNotifyTemplateResp>> {
    return request({
      url: `/admin-api/v1/notify-templates/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除通知模板 */
  deleteNotifyTemplate(
    data?: DeleteNotifyTemplateReq
  ): Promise<IApiResponse<DeleteNotifyTemplateResp>> {
    return request({
      url: `/admin-api/v1/notify-templates/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 获取短信消息列表 */
  getSmsMessageList(params?: GetSmsMessageListReq): Promise<IApiResponse<GetSmsMessageListResp>> {
    return request({
      url: `/admin-api/v1/sms-messages`,
      method: "GET",
      params: params,
    });
  },
};
