import type { IModalConfig } from "@/components/CURD/types";
import { NotificationAPI } from "@/api/notification";

const addConfig: IModalConfig = {
  dialog: { title: "新增模板" },
  formItems: [
    { type: "input", label: "模板编码", prop: "code", attrs: { placeholder: "请输入模板编码" } },
    {
      type: "select",
      label: "通知渠道",
      prop: "channel",
      attrs: { placeholder: "请选择通知渠道" },
      options: [
        { label: "站内消息", value: "inbox" },
        { label: "邮件", value: "email" },
        { label: "短信", value: "sms" },
      ],
    },
    { type: "input", label: "使用场景", prop: "scene", attrs: { placeholder: "请输入使用场景" } },
    { type: "input", label: "标题", prop: "title", attrs: { placeholder: "请输入标题" } },
    {
      type: "text",
      label: "内容",
      prop: "content",
      attrs: { placeholder: "请输入内容", rows: 5 },
    },
  ],
  formAction: (data) => NotificationAPI.createNotifyTemplate(data),
};

export default addConfig;
