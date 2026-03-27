import request from "@/utils/request";
import type {
  BatchMarkInboxMessagesReadReq,
  BatchMarkInboxMessagesReadResp,
  CreateInboxMessageReq,
  CreateInboxMessageResp,
  CreateNotifyTemplateReq,
  CreateNotifyTemplateResp,
  DeleteInboxMessageReq,
  DeleteInboxMessageResp,
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
  UpdateInboxMessageReq,
  UpdateInboxMessageResp,
  UpdateNotifyTemplateReq,
  UpdateNotifyTemplateResp,
} from "./types";

/** 通知管理 */
export const NotificationAPI = {
  /** 获取邮件消息列表 */
  getEmailMessageList(params?: GetEmailMessageListReq): Promise<IApiResponse<GetEmailMessageListResp>> {
    return request({
      url: `/api/v1/email-messages`,
      method: "GET",
      params: params,
    });
  },

  /** 获取站内消息列表 */
  getInboxMessageList(params?: GetInboxMessageListReq): Promise<IApiResponse<GetInboxMessageListResp>> {
    return request({
      url: `/api/v1/inbox-messages`,
      method: "GET",
      params: params,
    });
  },

  /** 创建站内消息 */
  createInboxMessage(data?: CreateInboxMessageReq): Promise<IApiResponse<CreateInboxMessageResp>> {
    return request({
      url: `/api/v1/inbox-messages`,
      method: "POST",
      data: data,
    });
  },

  /** 更新站内消息 */
  updateInboxMessage(data?: UpdateInboxMessageReq): Promise<IApiResponse<UpdateInboxMessageResp>> {
    return request({
      url: `/api/v1/inbox-messages/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除站内消息 */
  deleteInboxMessage(data?: DeleteInboxMessageReq): Promise<IApiResponse<DeleteInboxMessageResp>> {
    return request({
      url: `/api/v1/inbox-messages/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 批量标记站内消息已读 */
  batchMarkInboxMessagesRead(data?: BatchMarkInboxMessagesReadReq): Promise<IApiResponse<BatchMarkInboxMessagesReadResp>> {
    return request({
      url: `/api/v1/inbox-messages/batch-read`,
      method: "POST",
      data: data,
    });
  },

  /** 获取通知模板列表 */
  getNotifyTemplateList(params?: GetNotifyTemplateListReq): Promise<IApiResponse<GetNotifyTemplateListResp>> {
    return request({
      url: `/api/v1/notify-templates`,
      method: "GET",
      params: params,
    });
  },

  /** 创建通知模板 */
  createNotifyTemplate(data?: CreateNotifyTemplateReq): Promise<IApiResponse<CreateNotifyTemplateResp>> {
    return request({
      url: `/api/v1/notify-templates`,
      method: "POST",
      data: data,
    });
  },

  /** 更新通知模板 */
  updateNotifyTemplate(data?: UpdateNotifyTemplateReq): Promise<IApiResponse<UpdateNotifyTemplateResp>> {
    return request({
      url: `/api/v1/notify-templates/${data.id}`,
      method: "PUT",
      data: data,
    });
  },

  /** 删除通知模板 */
  deleteNotifyTemplate(data?: DeleteNotifyTemplateReq): Promise<IApiResponse<DeleteNotifyTemplateResp>> {
    return request({
      url: `/api/v1/notify-templates/${data.id}`,
      method: "DELETE",
      data: data,
    });
  },

  /** 获取短信消息列表 */
  getSmsMessageList(params?: GetSmsMessageListReq): Promise<IApiResponse<GetSmsMessageListResp>> {
    return request({
      url: `/api/v1/sms-messages`,
      method: "GET",
      params: params,
    });
  },

};
