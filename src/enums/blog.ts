
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
  /** 禁用 */
  DISABLED = 0,
  /** 启用 */
  ENABLED = 1,
}

/**
 * 登录状态枚举
 */
export enum LoginStatusEnum {
  /** 失败 */
  FAILED = 0,
  /** 成功 */
  SUCCESS = 1,
}

/**
 * 用户状态枚举
 */
export enum UserStatusEnum {
  NORMAL = 0, // 正常
  DISABLED = 1, // 禁用
}

/**
 * 登录类型枚举
 */
export enum LoginTypeEnum {
  USERNAME = "username", // 用户名
  EMAIL = "email", // 邮箱
  PHONE = "phone", // 手机
  OAUTH = "oauth", // 第三方登录
}

/**
 * 角色状态枚举
 */
export enum RoleStatusEnum {
  NORMAL = 0, // 正常
  DISABLED = 1, // 禁用
}

/**
 * 角色默认枚举
 */
export enum RoleDefaultEnum {
  NO = 0, // 非默认
  YES = 1, // 默认
}

/**
 * 菜单类型枚举
 */
export enum MenuTypeEnum {
  CATALOG = "CATALOG", // 目录
  MENU = "MENU", // 菜单
  BUTTON = "BUTTON", // 按钮
}

/**
 * 菜单显示状态枚举
 */
export enum MenuVisibleEnum {
  HIDDEN = 0, // 隐藏
  VISIBLE = 1, // 显示
}

/**
 * 菜单状态枚举
 */
export enum MenuStatusEnum {
  NORMAL = 0, // 正常
  DISABLED = 1, // 禁用
}

/**
 * 接口状态枚举
 */
export enum ApiStatusEnum {
  NORMAL = 0, // 正常
  DISABLED = 1, // 禁用
}

/**
 * 接口日志记录枚举
 */
export enum ApiTraceableEnum {
  NO = 0, // 不记录
  YES = 1, // 记录
}


/**
 * 通知发布状态枚举
 */
export enum NoticePublishStatusEnum {
  DRAFT = 1, // 草稿
  PUBLISHED = 2, // 已发布
  REVOKED = 3, // 已撤回
}

/**
 * 通知类型枚举
 */
export enum NoticeTypeEnum {
  SYSTEM = "system", // 系统公告
  MAINTENANCE = "maintenance", // 维护通知
  UPDATE = "update", // 功能更新
  REMIND = "remind", // 重要提醒
}

/**
 * 通知等级枚举
 */
export enum NoticeLevelEnum {
  INFO = "info", // 普通
  SUCCESS = "success", // 提醒
  WARNING = "warning", // 警告
  ERROR = "error", // 紧急
}

/**
 * 通知应用枚举
 */
export enum NoticeAppEnum {
  BLOG = "blog-web", //
  ADMIN = "admin-web", // 管理
}
