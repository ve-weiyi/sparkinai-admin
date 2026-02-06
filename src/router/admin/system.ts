import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/system",
  name: "SystemRoot",
  component: Layout,
  redirect: "/system/list",
  meta: {
    title: "系统配置",
    icon: "system",
    rank: 7,
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
