import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/engine",
  name: "",
  component: Layout,
  redirect: "/engine/list",
  meta: {
    title: "引擎配置",
    icon: "setting",
    rank: 4,
  },
  children: [
    {
      path: "/engine/list",
      component: () => import("@/views/admin/engine/index.vue"),
      name: "Engine",
      meta: { title: "引擎配置", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
