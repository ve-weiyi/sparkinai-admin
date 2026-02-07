import {
  AiEngineTypeEnum,
  AiModelTypeEnum,
  EngineConfigTypeEnum,
  GenerationStatusEnum,
  GenerationTypeEnum,
} from "@/enums/ai";
import { EnableStatusEnum, LoginStatusEnum } from "@/enums/common";

export const HTTP_METHODS = [
  { label: "GET", value: "GET" },
  { label: "POST", value: "POST" },
  { label: "PUT", value: "PUT" },
  { label: "DELETE", value: "DELETE" },
];

export const HTTP_METHODS_WITH_EMPTY = [...HTTP_METHODS, { label: "NULL", value: "" }];

export const ENABLE_STATUS_OPTIONS = [
  { label: "启用", value: EnableStatusEnum.ENABLED },
  { label: "禁用", value: EnableStatusEnum.DISABLED },
];

export const USER_STATUS_OPTIONS = [
  { label: "正常", value: EnableStatusEnum.ENABLED },
  { label: "禁用", value: EnableStatusEnum.DISABLED },
];

export const LOGIN_STATUS_OPTIONS = [
  { label: "成功", value: LoginStatusEnum.SUCCESS },
  { label: "失败", value: LoginStatusEnum.FAILED },
];

export const AI_MODEL_TYPE_OPTIONS = [
  { label: "文本", value: AiModelTypeEnum.TEXT },
  { label: "图片", value: AiModelTypeEnum.IMAGE },
  { label: "嵌入", value: AiModelTypeEnum.EMBEDDING },
];

export const AI_ENGINE_TYPE_OPTIONS = [
  { label: "产品分析 (Analysis)", value: AiEngineTypeEnum.ANALYSIS },
  { label: "文案生成 (Copy)", value: AiEngineTypeEnum.COPY },
  { label: "套图生成 (Image-Set)", value: AiEngineTypeEnum.IMAGE_SET },
  { label: "图片生成 (Image)", value: AiEngineTypeEnum.IMAGE },
];

export const ENGINE_CONFIG_TYPE_OPTIONS = [
  { label: "文案生成", value: EngineConfigTypeEnum.TEXT },
  { label: "图片生成", value: EngineConfigTypeEnum.IMAGE },
];

export const GENERATION_STATUS_OPTIONS = [
  { label: "成功", value: GenerationStatusEnum.SUCCESS },
  { label: "失败", value: GenerationStatusEnum.FAILED },
  { label: "进行中", value: GenerationStatusEnum.IN_PROGRESS },
];

export const GENERATION_TYPE_OPTIONS = [
  { label: "文案", value: GenerationTypeEnum.COPY },
  { label: "图片", value: GenerationTypeEnum.IMAGE },
  { label: "混合", value: GenerationTypeEnum.MIXED },
];

export const CONFIG_TYPE_OPTIONS = [
  { label: "字符串", value: "string" },
  { label: "JSON", value: "json" },
  { label: "数字", value: "number" },
  { label: "布尔值", value: "boolean" },
];

const toSelectList = (options: ReadonlyArray<{ label: string; value: string | number }>) =>
  options.reduce(
    (acc, option) => {
      acc[option.value] = option.label;
      return acc;
    },
    {} as Record<string, string>
  );

export const ENABLE_STATUS_SELECT_LIST = toSelectList(ENABLE_STATUS_OPTIONS);
export const USER_STATUS_SELECT_LIST = toSelectList(USER_STATUS_OPTIONS);
export const LOGIN_STATUS_SELECT_LIST = toSelectList(LOGIN_STATUS_OPTIONS);
export const AI_MODEL_TYPE_SELECT_LIST = toSelectList(AI_MODEL_TYPE_OPTIONS);
export const AI_ENGINE_TYPE_SELECT_LIST = toSelectList(AI_ENGINE_TYPE_OPTIONS);
export const ENGINE_CONFIG_TYPE_SELECT_LIST = toSelectList(ENGINE_CONFIG_TYPE_OPTIONS);
export const GENERATION_STATUS_SELECT_LIST = toSelectList(GENERATION_STATUS_OPTIONS);
export const GENERATION_TYPE_SELECT_LIST = toSelectList(GENERATION_TYPE_OPTIONS);
export const CONFIG_TYPE_SELECT_LIST = toSelectList(CONFIG_TYPE_OPTIONS);
