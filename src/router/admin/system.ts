import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/admin/system",
  name: "AdminSystemRoot",
  component: Layout,
  redirect: "/admin/system/list",
  meta: {
    title: "系统配置",
    icon: "monitor",
    rank: 6,
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/admin/system/index.vue"),
      name: "System",
      meta: { title: "系统配置", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
