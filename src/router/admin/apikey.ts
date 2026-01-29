import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/admin/apikey",
  name: "AdminApiKeyRoot",
  component: Layout,
  redirect: "/admin/apikey/list",
  meta: {
    title: "API密钥管理",
    icon: "api",
    rank: 5,
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/admin/apikey/index.vue"),
      name: "ApiKey",
      meta: { title: "API密钥管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
