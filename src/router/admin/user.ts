import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/admin/user",
  name: "AdminUserRoot",
  component: Layout,
  redirect: "/admin/user/list",
  meta: {
    title: "用户管理",
    icon: "role",
    rank: 1,
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/admin/user/index.vue"),
      name: "AdminUser",
      meta: { title: "用户管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
