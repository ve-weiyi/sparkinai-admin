import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/user",
  name: "UserRoot",
  component: Layout,
  redirect: "/user/list",
  meta: {
    title: "用户管理",
    icon: "role",
    rank: 1,
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/admin/account/user/index.vue"),
      name: "User",
      meta: { title: "用户管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
