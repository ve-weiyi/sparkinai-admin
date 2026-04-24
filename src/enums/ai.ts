/**
 * AI 相关枚举
 *
 * @description
 * 包含模型、引擎、内容生成等 AI 域枚举定义
 */

/**
 * AI 模型类型枚举
 */
export enum AiModelTypeEnum {
  TEXT = "text", // 文本
  IMAGE = "image", // 图片
  EMBEDDING = "embedding", // 嵌入
}

/**
 * Agent 类型枚举
 */
export enum AgentTypeEnum {
  CHAT_MODEL = "chat_model", // 对话模型
  TRANSFER = "transfer",     // 路由转发
}

/**
 * Agent 模型 key 枚举（对应 agent.json models）
 */
export enum AgentModelKeyEnum {
  CHAT = "chat",
  CHAT_VL = "chat-vl",
  EMBEDDING = "embedding",
  IMAGE = "image",
  NANO_IMAGE = "nano_image",
}

/**
 * 生成记录状态枚举
 */
export enum GenerationStatusEnum {
  IN_PROGRESS = 0, // 进行中
  SUCCESS = 1, // 成功
  FAILED = 2, // 失败
}

/**
 * 生成类型枚举
 */
export enum GenerationTypeEnum {
  AGENT = "agent", // Agent 调用
  COPY = "copy", // 文案
  IMAGE = "image", // 图片
  MIXED = "mixed", // 混合
}
