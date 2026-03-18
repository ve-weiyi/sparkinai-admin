export enum PaymentOrderStatus {
  PENDING = 1,
  PAID = 2,
  CANCELLED = 3,
  REFUNDED = 4,
}

export const PaymentOrderStatusText: Record<PaymentOrderStatus, string> = {
  [PaymentOrderStatus.PENDING]: "待支付",
  [PaymentOrderStatus.PAID]: "已支付",
  [PaymentOrderStatus.CANCELLED]: "已取消",
  [PaymentOrderStatus.REFUNDED]: "已退款",
};

export enum RechargePackageStatus {
  OFF = 0,
  ON = 1,
}

export const RechargePackageStatusText: Record<RechargePackageStatus, string> = {
  [RechargePackageStatus.OFF]: "下架",
  [RechargePackageStatus.ON]: "上架",
};
