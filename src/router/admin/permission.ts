import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/permission",
  name: "PermissionRoot",
  component: Layout,
  redirect: "/permission/user",
  meta: {
    title: "权限管理",
    icon: "monitor",
    rank: 1,
  },
  children: [
    {
      path: "user",
      component: () => import("@/views/admin/permission/user/User.vue"),
      name: "PermissionUser",
      meta: { title: "账号管理", keepAlive: true },
    },
    {
      path: "role",
      component: () => import("@/views/admin/permission/role/Role.vue"),
      name: "PermissionRole",
      meta: { title: "角色管理", keepAlive: true },
    },
    {
      path: "menu",
      component: () => import("@/views/admin/permission/menu/Menu.vue"),
      name: "PermissionMenu",
      meta: { title: "菜单管理", keepAlive: true },
    },
    {
      path: "api",
      component: () => import("@/views/admin/permission/api/Api.vue"),
      name: "PermissionApi",
      meta: { title: "接口管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
