import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/user",
  name: "",
  component: Layout,
  redirect: "/user/list",
  meta: {
    title: "用户管理",
    icon: "role",
    rank: 1,
  },
  children: [
    {
      path: "/user/list",
      component: () => import("@/views/admin/user/index.vue"),
      name: "AdminUser",
      meta: { title: "用户管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
