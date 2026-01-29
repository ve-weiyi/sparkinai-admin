import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/admin/provider",
  name: "AdminProviderRoot",
  component: Layout,
  redirect: "/admin/provider/list",
  meta: {
    title: "服务商管理",
    icon: "system",
    rank: 2,
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/admin/provider/index.vue"),
      name: "Provider",
      meta: { title: "服务商管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
