import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/system",
  name: "",
  component: Layout,
  redirect: "/system/list",
  meta: {
    title: "系统配置",
    icon: "monitor",
    rank: 5,
  },
  children: [
    {
      path: "/system/list",
      component: () => import("@/views/admin/system/index.vue"),
      name: "System",
      meta: { title: "系统配置", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
