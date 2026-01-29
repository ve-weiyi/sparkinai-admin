import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/admin/model",
  name: "AdminModelRoot",
  component: Layout,
  redirect: "/admin/model/list",
  meta: {
    title: "模型管理",
    icon: "component",
    rank: 3,
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/admin/model/index.vue"),
      name: "Model",
      meta: { title: "模型管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
