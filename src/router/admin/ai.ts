import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/ai",
  name: "AiRoot",
  component: Layout,
  redirect: "/ai/provider",
  meta: {
    title: "AI 管理",
    icon: "menu",
    rank: 3,
  },
  children: [
    {
      path: "provider",
      component: () => import("@/views/admin/ai/provider/index.vue"),
      name: "Provider",
      meta: { title: "服务商管理", keepAlive: true },
    },
    {
      path: "model",
      component: () => import("@/views/admin/ai/model/index.vue"),
      name: "Model",
      meta: { title: "模型管理", keepAlive: true },
    },
    {
      path: "apikey",
      component: () => import("@/views/admin/ai/apikey/index.vue"),
      name: "ApiKey",
      meta: { title: "密钥管理", keepAlive: true },
    },
    {
      path: "engine",
      component: () => import("@/views/admin/ai/engine/index.vue"),
      name: "Engine",
      meta: { title: "引擎配置", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
