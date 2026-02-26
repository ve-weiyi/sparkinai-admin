import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/member",
  name: "MemberRoot",
  component: Layout,
  redirect: "/member/list",
  meta: {
    title: "会员管理",
    icon: "menu",
    rank: 2,
    alwaysShow: true,
  },
  children: [
    {
      path: "customer",
      component: () => import("@/views/admin/member/customer/index.vue"),
      name: "customer",
      meta: { title: "客户管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
