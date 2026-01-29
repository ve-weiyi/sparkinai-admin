import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/admin/engine",
  name: "AdminEngineRoot",
  component: Layout,
  redirect: "/admin/engine/list",
  meta: {
    title: "引擎配置",
    icon: "setting",
    rank: 4,
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/admin/engine/index.vue"),
      name: "Engine",
      meta: { title: "引擎配置", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
