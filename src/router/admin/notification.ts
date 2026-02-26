import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/notification",
  name: "NotificationRoot",
  component: Layout,
  redirect: "/notification/template",
  meta: {
    title: "通知管理",
    icon: "menu",
    rank: 5,
    alwaysShow: true,
  },
  children: [
    {
      path: "template",
      component: () => import("@/views/admin/notification/template/index.vue"),
      name: "NotifyTemplate",
      meta: { title: "模版管理", keepAlive: true },
    },
    {
      path: "inbox",
      component: () => import("@/views/admin/notification/inbox/index.vue"),
      name: "InboxMessage",
      meta: { title: "站内消息", keepAlive: true },
    },
    {
      path: "email",
      component: () => import("@/views/admin/notification/email/index.vue"),
      name: "EmailMessage",
      meta: { title: "邮件消息", keepAlive: true },
    },
    {
      path: "sms",
      component: () => import("@/views/admin/notification/sms/index.vue"),
      name: "SmsMessage",
      meta: { title: "短信消息", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
