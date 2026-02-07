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
 * AI 引擎类型枚举
 */
export enum AiEngineTypeEnum {
  ANALYSIS = "analysis", // 产品分析
  COPY = "copy", // 文案生成
  IMAGE_SET = "image_set", // 套图生成
  IMAGE = "image", // 图片生成
}

/**
 * 引擎配置类型枚举
 */
export enum EngineConfigTypeEnum {
  TEXT = "text", // 文案生成
  IMAGE = "image", // 图片生成
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
  COPY = "copy", // 文案
  IMAGE = "image", // 图片
  MIXED = "mixed", // 混合
}
