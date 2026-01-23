import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/provider",
  name: "",
  component: Layout,
  redirect: "/provider/list",
  meta: {
    title: "服务商管理",
    icon: "system",
    rank: 2,
  },
  children: [
    {
      path: "/provider/list",
      component: () => import("@/views/admin/provider/index.vue"),
      name: "Provider",
      meta: { title: "服务商管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
