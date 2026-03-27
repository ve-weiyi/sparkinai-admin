import type { IModalConfig } from "@/components/CURD/types";
import { NotificationAPI } from "@/api/notification";

const addConfig: IModalConfig = {
  dialog: { title: "发布站内消息" },
  formItems: [
    { type: "input", label: "用户ID", prop: "user_id", attrs: { placeholder: "请输入接收用户ID" } },
    { type: "input", label: "标题", prop: "title", attrs: { placeholder: "请输入消息标题" } },
    {
      type: "input",
      label: "内容",
      prop: "content",
      attrs: { type: "textarea", placeholder: "请输入消息内容", rows: 5 },
    },
    {
      type: "select",
      label: "类型",
      prop: "type",
      initialValue: "system",
      attrs: { placeholder: "请选择消息类型" },
      options: [
        { label: "系统通知", value: "system" },
        { label: "生成通知", value: "generation" },
        { label: "支付通知", value: "payment" },
        { label: "账户通知", value: "account" },
      ],
    },
    {
      type: "input",
      label: "扩展信息",
      prop: "extra",
      attrs: { placeholder: "请输入扩展信息（可选）" },
    },
  ],
  formAction: (data) => NotificationAPI.createInboxMessage(data),
};

export default addConfig;
