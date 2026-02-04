import type { RouteRecordRaw } from "vue-router";

const generationRoutes: RouteRecordRaw = {
  path: "/admin/generation",
  component: () => import("@/layouts/index.vue"),
  redirect: "/admin/generation",
  name: "AdminContent",
  meta: {
    title: "内容管理",
    icon: "document",
    rank: 7,
  },
  children: [
    {
      path: "generation",
      component: () => import("@/views/admin/generation/index.vue"),
      name: "Generation",
      meta: {
        title: "生成记录",
        icon: "document",
      },
    },
  ],
};

export default generationRoutes;
