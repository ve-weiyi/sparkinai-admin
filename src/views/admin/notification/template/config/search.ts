import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
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
  ],
};

export default searchConfig;
