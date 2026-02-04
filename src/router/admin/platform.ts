import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/admin/platform",
  name: "AdminPlatformRoot",
  component: Layout,
  redirect: "/admin/platform/provider",
  meta: {
    title: "平台管理",
    icon: "setting",
    rank: 3,
  },
  children: [
    {
      path: "provider",
      component: () => import("@/views/admin/platform/provider/index.vue"),
      name: "Provider",
      meta: { title: "服务商管理", keepAlive: true },
    },
    {
      path: "model",
      component: () => import("@/views/admin/platform/model/index.vue"),
      name: "Model",
      meta: { title: "模型管理", keepAlive: true },
    },
    {
      path: "engine",
      component: () => import("@/views/admin/platform/engine/index.vue"),
      name: "Engine",
      meta: { title: "引擎配置", keepAlive: true },
    },
    {
      path: "apikey",
      component: () => import("@/views/admin/platform/apikey/index.vue"),
      name: "ApiKey",
      meta: { title: "API密钥管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;