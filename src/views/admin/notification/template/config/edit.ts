import type { IModalConfig } from "@/components/CURD/types";
import { NotificationAPI } from "@/api/notification";

const editConfig: IModalConfig = {
  dialog: { title: "编辑模板" },
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
      type: "input",
      label: "内容",
      prop: "content",
      attrs: { type: "textarea", placeholder: "请输入内容", rows: 5 },
    },
    {
      type: "switch",
      label: "启用状态",
      prop: "enabled",
      attrs: { activeValue: 1, inactiveValue: 0 },
    },
  ],
  formAction: (data) => NotificationAPI.updateNotifyTemplate(data),
};

export default editConfig;
