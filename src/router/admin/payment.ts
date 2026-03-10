import type { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layouts/index.vue");

export default {
  path: "/payment",
  name: "PaymentRoot",
  component: Layout,
  redirect: "/payment/package",
  meta: {
    title: "支付管理",
    icon: "menu",
    rank: 5,
  },
  children: [
    {
      path: "package",
      component: () => import("@/views/admin/payment/package/index.vue"),
      name: "Package",
      meta: { title: "套餐管理", keepAlive: true },
    },
    {
      path: "order",
      component: () => import("@/views/admin/payment/order/index.vue"),
      name: "PaymentOrder",
      meta: { title: "订单管理", keepAlive: true },
    },
  ],
} satisfies RouteRecordRaw;
