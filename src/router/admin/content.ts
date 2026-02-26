import type { RouteRecordRaw } from "vue-router";

const generationRoutes: RouteRecordRaw = {
  path: "/content",
  component: () => import("@/layouts/index.vue"),
  redirect: "/content/generation",
  name: "Content",
  meta: {
    title: "内容管理",
    icon: "menu",
    rank: 5,
    alwaysShow: true,
  },
  children: [
    {
      path: "generation",
      component: () => import("@/views/admin/content/generation/index.vue"),
      name: "Generation",
      meta: {
        title: "生成记录",
        icon: "document",
      },
    },
  ],
};

export default generationRoutes;
