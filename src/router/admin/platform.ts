import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/platform",
  name: "PlatformRoot",
  component: Layout,
  redirect: "/platform/list",
  meta: {
    title: "平台管理",
    icon: "role",
    rank: 2,
    alwaysShow: true,
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/admin/platform/user/index.vue"),
      name: "User",
      meta: { title: "用户管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
