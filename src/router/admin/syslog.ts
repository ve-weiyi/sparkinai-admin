import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/syslog",
  name: "SyslogRoot",
  component: Layout,
  redirect: "/syslog/generation",
  meta: {
    title: "系统日志",
    icon: "document",
    rank: 6,
    alwaysShow: true,
  },
  children: [
    {
      path: "login",
      component: () => import("@/views/admin/syslog/login/index.vue"),
      name: "LoginLog",
      meta: { title: "登录日志", keepAlive: true },
    },
    {
      path: "operation",
      component: () => import("@/views/admin/syslog/operation/index.vue"),
      name: "OperationLog",
      meta: { title: "操作日志", keepAlive: true },
    },
    {
      path: "upload",
      component: () => import("@/views/admin/syslog/upload/index.vue"),
      name: "UploadLog",
      meta: { title: "文件上传日志", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
