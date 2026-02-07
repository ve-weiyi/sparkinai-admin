/**
 * 通用枚举
 *
 * @description
 * 包含对话框模式、通用状态等跨业务的枚举定义
 */

/**
 * 对话框模式枚举
 *
 * @description
 * 定义对话框的操作模式（创建、编辑、查看）
 */
export enum DialogMode {
  /** 创建模式 - 新增数据 */
  CREATE = "create",
  /** 编辑模式 - 修改数据 */
  EDIT = "edit",
  /** 查看模式 - 只读展示 */
  VIEW = "view",
}

/**
 * 通用状态枚举
 *
 * @description
 * 适用于大多数业务实体的启用/禁用状态
 */
export enum CommonStatus {
  /** 禁用 */
  DISABLED = 0,
  /** 启用 */
  ENABLED = 1,
}

/**
 * 是否枚举
 *
 * @description
 * 适用于通用的 Yes/No 或开关型字段
 */
export enum YesNoEnum {
  /** 否 */
  NO = 0,
  /** 是 */
  YES = 1,
}

/**
 * 启用状态枚举
 *
 * @description
 * 适用于启用/禁用为 1/2 的业务状态
 */
export enum EnableStatusEnum {
  /** 启用 */
  ENABLED = 1,
  /** 禁用 */
  DISABLED = 2,
}

/**
 * 登录状态枚举
 */
export enum LoginStatusEnum {
  /** 成功 */
  SUCCESS = 1,
  /** 失败 */
  FAILED = 0,
}

/**
 * 审核状态枚举
 */
export enum AuditStatus {
  /** 待审核 */
  PENDING = 0,
  /** 已通过 */
  APPROVED = 1,
  /** 已拒绝 */
  REJECTED = 2,
}
