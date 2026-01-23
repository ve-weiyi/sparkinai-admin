import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/apikey",
  name: "",
  component: Layout,
  redirect: "/apikey/list",
  meta: {
    title: "API密钥管理",
    icon: "api",
    rank: 3,
  },
  children: [
    {
      path: "/apikey/list",
      component: () => import("@/views/admin/apikey/index.vue"),
      name: "ApiKey",
      meta: { title: "API密钥管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
