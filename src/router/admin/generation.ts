import type { RouteRecordRaw } from "vue-router";

const generationRoutes: RouteRecordRaw = {
  path: "/generation",
  component: () => import("@/layouts/index.vue"),
  redirect: "/generation",
  name: "Content",
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
