import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: "input",
      label: "模板编码",
      prop: "code",
      attrs: { placeholder: "请输入模板编码" },
    },
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
