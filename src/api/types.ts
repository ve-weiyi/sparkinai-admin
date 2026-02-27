export interface AdminInfoDetail {
  user_id: string; // 管理员ID（UUID）
  username: string; // 管理员名
  nickname: string; // 真实姓名
  email: string; // 邮箱
  phone: string; // 手机号
  status: number; // 状态：0-正常 1-禁用
  last_login_at: number; // 最后登录时间（毫秒时间戳）
  last_login_ip: string; // 最后登录IP
  created_at: number; // 创建时间（毫秒时间戳）
  updated_at: number; // 更新时间（毫秒时间戳）
  roles: string[];
}

// API密钥信息项
export interface ApiKeyItem {
  id: number; // API密钥ID
  provider_id: number; // 供应商ID
  provider_name: string; // 供应商名称
  name: string; // 密钥名称
  profile: string; // 配置文件名称
  api_key: string; // API密钥（脱敏显示）
  priority: number; // 优先级
  quota_limit: number; // 配额限制
  quota_used: number; // 已使用配额
  quota_reset_at: number; // 配额重置时间
  status: number; // 状态
  last_used_at: number; // 最后使用时间
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

// API密钥使用统计数据项
export interface ApiKeyUsageStatsItem {
  apikey_id: number; // API密钥ID
  apikey_name: string; // API密钥名称
  provider_name: string; // 供应商名称
  total_calls: number; // 总调用次数
  quota_usage_rate: number; // 配额使用率
  last_used_at: number; // 最后使用时间
}

export interface ApiVO {
  id?: number; // 主键id
  parent_id: number; // 分组id
  name: string; // api名称
  path: string; // api路径
  method: string; // api请求方法
  traceable: number; // 是否追溯操作记录 0不需要，1需要
  status: number; // 状态 0正常 1禁用
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
  children?: ApiVO[];
}

export interface BatchDeleteApisReq {
  ids: number[]; // 接口ID列表
}

export interface BatchDeleteApisResp {
  success_count: number; // 删除成功数量
}

// 批量删除生成记录请求
export interface BatchDeleteGenerationsReq {
  ids: string[]; // 生成记录ID列表
}

// 批量删除生成记录响应
export interface BatchDeleteGenerationsResp {
  success_count: number; // 成功删除数量
}

export interface BatchDeleteMenusReq {
  ids: number[]; // 菜单ID列表
}

export interface BatchDeleteMenusResp {
  success_count: number; // 删除成功数量
}

// 批量删除角色请求
export interface BatchDeleteRolesReq {
  ids: number[]; // 角色ID列表
}

// 批量删除角色响应
export interface BatchDeleteRolesResp {
  success_count: number; // 删除成功数量
}

// 批量删除请求
export interface BatchDeleteSyslogReq {
  ids: number[]; // 日志ID列表
}

// 批量删除响应
export interface BatchDeleteSyslogResp {
  success_count: number; // 成功删除数量
}

export interface BatchResp {
  success_count: number;
}

// 批量更新系统配置请求
export interface BatchUpdateSystemConfigReq {
  configs: SystemConfigUpdateItem[]; // 配置列表
}

// 批量更新系统配置响应
export interface BatchUpdateSystemConfigResp {
  success_count: number; // 成功更新数量
}

export interface CleanApisResp {
  success_count: number; // 清空成功数量
}

export interface CleanMenusReq {}

export interface CleanMenusResp {
  success_count: number; // 清空成功数量
}

export interface ClientInfoVO {
  terminal_id: string; // 终端ID
  os: string; // 操作系统
  browser: string; // 浏览器
  ip_address: string; // IP地址
  ip_source: string; // IP归属地
}

// 创建API密钥请求
export interface CreateApiKeyReq {
  provider_id: number; // 供应商ID
  name: string; // 密钥名称
  profile?: string; // 配置文件名称
  api_key: string; // API密钥
  secret_key?: string; // Secret Key
  priority?: number; // 优先级
  quota_limit?: number; // 配额限制
  status?: number; // 状态
}

// 创建API密钥响应
export interface CreateApiKeyResp {
  id: number; // API密钥ID
}

export interface CreateApiReq {
  parent_id: number; // 分组id
  name: string; // api名称
  path: string; // api路径
  method: string; // api请求方法
  traceable: number; // 是否追溯操作记录 0不需要，1需要
  status: number; // 状态 0正常 1禁用
}

// 创建引擎配置请求
export interface CreateEngineReq {
  name: string; // 配置名称
  engine_type: string; // 引擎类型
  model_id: number; // 模型ID
  system_prompt?: string; // 系统提示词
  user_prompt_template?: string; // 用户提示词模板
  temperature?: number; // 温度参数
  max_tokens?: number; // 最大生成token数
  top_p?: number; // Top-p采样参数
  frequency_penalty?: number; // 频率惩罚
  presence_penalty?: number; // 存在惩罚
  extra_params?: string; // 额外参数（JSON）
  is_default?: number; // 是否为默认配置
  status?: number; // 状态
}

// 创建引擎配置响应
export interface CreateEngineResp {
  id: number; // 引擎配置ID
}

export interface CreateMenuReq extends MenuMeta {
  parent_id: number; // 父id
  path: string; // 路由地址
  name: string; // 路由名字
  component: string; // Layout组件
  redirect?: string; // 路由重定向
}

// 创建模型请求
export interface CreateModelReq {
  provider_id: number; // 供应商ID
  name: string; // 模型名称
  code: string; // 模型代码
  model_type: string; // 模型类型
  description?: string; // 模型描述
  max_tokens?: number; // 最大token数
  support_vision?: number; // 是否支持视觉输入
  status?: number; // 状态
  sort_order?: number; // 排序顺序
}

// 创建模型响应
export interface CreateModelResp {
  id: number; // 模型ID
}

export interface CreateNotifyTemplateReq {
  code: string;
  channel: string;
  scene: string;
  title: string;
  content: string;
  enabled?: number;
}

export interface CreateNotifyTemplateResp {
  id: number;
}

// 创建供应商请求
export interface CreateProviderReq {
  name: string; // 供应商名称
  code: string; // 供应商代码
  base_url?: string; // API基础URL
  description?: string; // 供应商描述
  status?: number; // 状态
  sort_order?: number; // 排序顺序
}

// 创建供应商响应
export interface CreateProviderResp {
  id: number; // 供应商ID
}

// 角色创建请求
export interface CreateRoleReq {
  parent_id?: number; // 父角色ID（可选，默认顶级角色）
  role_key: string; // 角色标识（必填，唯一）
  role_label: string; // 角色名称（必填）
  role_comment: string; // 角色备注（必填）
  is_default: number; // 是否默认角色 0-否 1-是（必填）
  status: number; // 状态 0-正常 1-禁用（必填）
}

// 创建系统配置请求
export interface CreateSystemConfigReq {
  config_key: string; // 配置键
  config_value: string; // 配置值
  config_type?: string; // 配置类型
  description?: string; // 配置描述
  is_encrypted?: number; // 是否加密存储
  is_public?: number; // 是否公开
  category?: string; // 配置分类
}

// 创建系统配置响应
export interface CreateSystemConfigResp {
  id: number; // 配置ID
}

// 删除API密钥请求
export interface DeleteApiKeyReq {
  id: number; // API密钥ID
}

// 删除API密钥响应
export interface DeleteApiKeyResp {
  success: boolean;
}

export interface DeleteApiReq {
  id: number; // 主键id
}

// 删除引擎配置请求
export interface DeleteEngineReq {
  id: number; // 引擎配置ID
}

// 删除引擎配置响应
export interface DeleteEngineResp {
  success: boolean;
}

// 删除生成记录请求
export interface DeleteGenerationReq {
  id: string; // 生成记录ID
}

// 删除生成记录响应
export interface DeleteGenerationResp {
  success: boolean;
}

export interface DeleteMenuReq {
  id: number; // 主键
}

// 删除模型请求
export interface DeleteModelReq {
  id: number; // 模型ID
}

// 删除模型响应
export interface DeleteModelResp {
  success: boolean;
}

export interface DeleteNotifyTemplateReq {
  id: number;
}

export interface DeleteNotifyTemplateResp {
  success: boolean;
}

// 删除供应商请求
export interface DeleteProviderReq {
  id: number; // 供应商ID
}

// 删除供应商响应
export interface DeleteProviderResp {
  success: boolean;
}

// 删除角色请求
export interface DeleteRoleReq {
  id: number; // 主键ID
}

// 删除系统配置请求
export interface DeleteSystemConfigReq {
  id: number; // 配置ID
}

// 删除系统配置响应
export interface DeleteSystemConfigResp {
  success: boolean;
}

export interface DeleteUserBindThirdPartyReq {
  platform: string; // 平台
}

// 邮箱验证码登录（仅登录，未注册报错）
export interface EmailCodeLoginReq {
  email: string; // 邮箱
  verify_code: string; // 验证码
}

export interface EmailMessageItem {
  id: number;
  email: string;
  template_code: string;
  title: string;
  content: string;
  scene: string;
  status: string;
  biz_id: string;
  error_msg: string;
  created_at: number;
  updated_at: number;
}

export interface EmptyReq {}

export interface EmptyResp {}

// 引擎配置信息项
export interface EngineItem {
  id: number; // 引擎配置ID
  name: string; // 配置名称
  engine_type: string; // 引擎类型
  model_id: number; // 模型ID
  model_name: string; // 模型名称
  system_prompt: string; // 系统提示词
  user_prompt_template: string; // 用户提示词模板
  temperature: number; // 温度参数
  max_tokens: number; // 最大生成token数
  top_p: number; // Top-p采样参数
  frequency_penalty: number; // 频率惩罚
  presence_penalty: number; // 存在惩罚
  extra_params: string; // 额外参数（JSON）
  is_default: number; // 是否为默认配置
  status: number; // 状态
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

// 引擎使用统计数据项
export interface EngineUsageStatsItem {
  engine_id: number; // 引擎ID
  engine_name: string; // 引擎名称
  engine_type: string; // 引擎类型
  total_generations: number; // 总生成次数
  success_generations: number; // 成功生成次数
  failed_generations: number; // 失败生成次数
  success_rate: number; // 成功率
  avg_generation_time: number; // 平均生成耗时（秒）
}

export interface FileInfoVO {
  file_path: string; // 文件路径
  file_name: string; // 文件名称
  file_type: string; // 文件类型
  file_size: number; // 文件大小
  file_url: string; // 上传路径
  updated_at: number; // 更新时间
}

// 生成记录信息项
export interface GenerationItem {
  id: string; // 生成记录ID
  user_id: string; // 用户ID
  product_name: string; // 产品名称
  description: string; // 产品描述
  image_url: string; // 上传的产品图片URL
  copy_result: string; // 生成的文案结果（JSON）
  image_urls: string[]; // 生成的图片URL列表
  generation_type: string; // 生成类型
  status: number; // 生成状态
  error_message: string; // 错误信息
  cost_tokens: number; // 消耗的token数量
  generation_time: number; // 生成耗时（秒）
  engine_id: number; // 使用的引擎配置ID
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
  user_info: UserInfoVO; // 用户信息
}

export interface GetAdminListReq extends PageQuery {
  username?: string;
  email?: string;
  phone?: string;
  status?: number; // 状态: -1删除 0正常 1禁用
  user_ids?: string[]; // 管理员ID
}

// 获取AI使用统计请求
export interface GetAiUsageStatsReq {
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

// 获取AI使用统计响应
export interface GetAiUsageStatsResp {
  models: ModelUsageStatsItem[]; // 模型统计列表
  providers: ProviderUsageStatsItem[]; // 供应商统计列表
  engines: EngineUsageStatsItem[]; // 引擎统计列表
  apikeys: ApiKeyUsageStatsItem[]; // API密钥统计列表
}

// API密钥列表查询请求
export interface GetApiKeyListReq extends PageQuery {
  provider_id?: number; // 供应商ID筛选
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索
}

// API密钥列表响应
export interface GetApiKeyListResp {
  page: number;
  page_size: number;
  total: number;
  list: ApiKeyItem[];
}

export interface GetApiListReq extends PageQuery {
  name?: string; // api名称
  path?: string; // api路径
  method?: string; // api请求方法
  status?: number; // 状态
}

export interface GetApiReq {
  id: number; // 主键id
}

export interface GetCaptchaCodeReq {
  width?: number; // 宽度
  height?: number; // 高度
}

export interface GetCaptchaCodeResp {
  captcha_key: string; // 验证码key
  captcha_base64: string; // 验证码base64
  captcha_code: string; // 验证码
}

export interface GetClientInfoReq {}

export interface GetClientInfoResp {
  id: number; // 访客唯一ID
  terminal_id: string; // 终端ID
  os: string; // 操作系统
  browser: string; // 浏览器
  ip_address: string; // IP地址
  ip_source: string; // IP归属地
}

// 获取仪表盘统计数据请求
export interface GetDashboardStatsReq {}

// 仪表盘统计数据响应 - 对应数据库字段
export interface GetDashboardStatsResp {
  total_users: number; // 总用户数
  today_new_users: number; // 今日新增用户
  total_generations: number; // 总生成次数
  today_generations: number; // 今日生成次数
  total_tokens: number; // 总消耗token数
  today_tokens: number; // 今日消耗token数
  total_revenue: number; // 总收入
  today_revenue: number; // 今日收入
}

// 获取仪表盘统计数据趋势请求
export interface GetDashboardTrendReq {
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

export interface GetDashboardTrendResp {
  list: StatsTrendItem[];
}

export interface GetEmailMessageListReq extends PageQuery {
  email?: string;
  scene?: string;
  status?: string;
}

export interface GetEmailMessageListResp {
  page: number;
  page_size: number;
  total: number;
  list: EmailMessageItem[];
}

// 引擎配置列表查询请求
export interface GetEngineListReq extends PageQuery {
  engine_type?: string; // 引擎类型筛选
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索
}

// 引擎配置列表响应
export interface GetEngineListResp {
  page: number;
  page_size: number;
  total: number;
  list: EngineItem[];
}

// 获取生成记录详情请求
export interface GetGenerationDetailReq {
  id: string; // 生成记录ID
}

// 生成记录详情响应
export interface GetGenerationDetailResp extends GenerationItem {}

// 生成记录列表查询请求
export interface GetGenerationListReq extends PageQuery {
  user_id?: string; // 用户ID筛选
  status?: number; // 生成状态筛选
  generation_type?: string; // 生成类型筛选
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
  keyword?: string; // 关键词搜索（产品名称）
}

// 生成记录列表响应
export interface GetGenerationListResp {
  page: number;
  page_size: number;
  total: number;
  list: GenerationItem[];
}

export interface GetInboxMessageListReq extends PageQuery {
  user_id?: string;
  only_unread?: number;
}

export interface GetInboxMessageListResp {
  page: number;
  page_size: number;
  total: number;
  list: InboxMessageItem[];
}

export interface GetMenuListReq extends PageQuery {
  name?: string; // 路由名字
  title?: string; // 菜单标题
  status?: number; // 状态
}

export interface GetMenuReq {
  id: number; // 主键
}

// 获取模型详情请求
export interface GetModelDetailReq {
  id: number; // 模型ID
}

// 获取模型详情响应
export interface GetModelDetailResp extends ModelItem {}

// 模型列表查询请求
export interface GetModelListReq extends PageQuery {
  provider_id?: number; // 供应商ID筛选
  model_type?: string; // 模型类型筛选
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索
}

// 模型列表响应
export interface GetModelListResp {
  page: number;
  page_size: number;
  total: number;
  list: ModelItem[];
}

export interface GetNotifyTemplateListReq extends PageQuery {
  channel?: string;
}

export interface GetNotifyTemplateListResp {
  page: number;
  page_size: number;
  total: number;
  list: NotifyTemplateItem[];
}

// 第三方登录授权URL
export interface GetOauthAuthorizeUrlReq {
  platform: string; // 平台
  state?: string; // 状态
}

export interface GetOauthAuthorizeUrlResp {
  authorize_url: string; // 授权地址
}

// 操作日志列表查询请求
export interface GetOperationLogListReq extends PageQuery {
  user_id?: string; // 用户ID筛选
  module?: string; // 操作模块筛选
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

// 操作日志列表响应
export interface GetOperationLogListResp {
  page: number;
  page_size: number;
  total: number;
  list: OperationLogItem[];
}

// 供应商列表查询请求
export interface GetProviderListReq extends PageQuery {
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索
}

// 供应商列表响应
export interface GetProviderListResp {
  page: number;
  page_size: number;
  total: number;
  list: ProviderItem[];
}

// 获取公开配置请求（无需认证）
export interface GetPublicConfigReq {}

// 获取公开配置响应
export interface GetPublicConfigResp {
  configs: Record<string, any>; // 公开配置键值对
}

// 角色列表查询请求
export interface GetRoleListReq extends PageQuery {
  role_key?: string; // 角色标识（模糊查询）
  role_label?: string; // 角色名称（模糊查询）
  status?: number; // 状态 0-正常 1-禁用（精确查询）
}

// 获取角色权限请求
export interface GetRolePermissionsReq {
  role_id: number; // 角色ID
}

// 获取角色详情请求
export interface GetRoleReq {
  id: number; // 主键ID
}

export interface GetSmsMessageListReq extends PageQuery {
  phone?: string;
  scene?: string;
  status?: string;
}

export interface GetSmsMessageListResp {
  page: number;
  page_size: number;
  total: number;
  list: SmsMessageItem[];
}

// 系统配置列表查询请求
export interface GetSystemConfigListReq extends PageQuery {
  category?: string; // 配置分类筛选
  keyword?: string; // 关键词搜索
}

// 系统配置列表响应
export interface GetSystemConfigListResp {
  page: number;
  page_size: number;
  total: number;
  list: SystemConfigItem[];
}

// 获取系统配置请求
export interface GetSystemConfigReq {
  config_key: string; // 配置键
}

// 获取系统配置响应
export interface GetSystemConfigResp extends SystemConfigItem {}

// 文件上传日志列表查询请求
export interface GetUploadLogListReq extends PageQuery {
  user_id?: string; // 用户ID筛选
  file_type?: string; // 文件类型筛选
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

// 文件上传日志列表响应
export interface GetUploadLogListResp {
  page: number;
  page_size: number;
  total: number;
  list: UploadLogItem[];
}

// 获取上传凭证请求
export interface GetUploadTokenReq {
  file_name: string; // 文件名称
  file_path?: string; // 文件路径
  expire_seconds?: number; // 凭证有效期（秒），默认1小时
}

// 获取上传凭证响应（完整的UploadToken结构）
export interface GetUploadTokenResp {
  upload_url: string; // 上传地址
  token: string; // 上传凭证/Token
  policy: string; // 上传策略
  signature: string; // 签名
  file_key: string; // 文件Key/路径
  access_url: string; // 上传成功后的访问URL
  expire_at: number; // 凭证过期时间戳（秒）
  extra_data: Record<string, any>; // 额外数据
}

// 获取用户活跃度排行请求
export interface GetUserActivityRankingReq {
  limit?: number; // 返回数量限制
}

// 获取用户活跃度排行响应
export interface GetUserActivityRankingResp {
  list: UserActivityRankingItem[]; // 用户活跃度排行列表
}

export interface GetUserApisResp {
  list: UserApi[];
}

// 获取用户详情请求
export interface GetUserDetailReq {
  user_id: string; // 用户ID (UUID)
}

// 用户详情响应
export interface GetUserDetailResp extends UserItem {
  account: UserAccount;
  last_login: UserLastLogin;
  updated_at: number; // 更新时间
}

// 用户列表查询请求
export interface GetUserListReq extends PageQuery {
  phone?: string; // 手机号筛选
  status?: number; // 状态筛选
  keyword?: string; // 关键词搜索（昵称/手机号）
}

// 用户列表响应
export interface GetUserListResp {
  page: number;
  page_size: number;
  total: number;
  list: UserItem[];
}

// 用户登录日志列表查询请求
export interface GetUserLoginLogListReq extends PageQuery {
  user_id?: string; // 用户ID筛选
  status?: number; // 登录状态筛选
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

// 用户登录日志列表响应
export interface GetUserLoginLogListResp {
  page: number;
  page_size: number;
  total: number;
  list: UserLoginLogItem[];
}

export interface GetUserMenusResp {
  list: UserMenu[];
}

export interface GetUserProfileReq {}

export interface GetUserRolesResp {
  list: UserRole[];
}

export interface IdReq {
  id: number;
}

export interface IdsReq {
  ids: number[];
}

export interface InboxMessageItem {
  id: number;
  user_id: string;
  title: string;
  content: string;
  type: string;
  extra: string;
  is_read: number;
  read_at: number;
  created_at: number;
  updated_at: number;
}

export interface ListFilesReq {
  file_path?: string; // 文件路径
  limit?: number; // 限制
}

// 登录响应
export interface LoginResp {
  user_id: string; // 用户id
  user_type: string; // 用户类型：user-普通用户 admin-管理员
  scope: string; // 作用域
  token: Token;
}

export interface MenuMeta {
  type: string; // 菜单类型（0代表目录、1代表菜单、2代表按钮、3代表外链）
  title?: string; // 菜单标题
  icon?: string; // 菜单图标
  rank?: number; // 排序
  perm?: string; // 权限标识
  params?: MenuMetaParams[]; // 参数
  keep_alive?: number; // 是否缓存
  always_show?: number; // 是否一直显示菜单
  visible?: number; // 菜单是否可见
  status: number; // 状态 0正常 1禁用
}

export interface MenuMetaParams {
  key: string;
  value: string;
}

export interface MenuVO extends MenuMeta {
  id?: number; // 主键
  parent_id: number; // 父id
  path: string; // 路由地址
  name: string; // 路由名字
  component: string; // Layout组件
  redirect?: string; // 路由重定向
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
  children?: MenuVO[];
}

// 模型信息项
export interface ModelItem {
  id: number; // 模型ID
  provider_id: number; // 供应商ID
  provider_name: string; // 供应商名称
  provider_code: string; // 供应商代码
  name: string; // 模型名称
  code: string; // 模型代码
  model_type: string; // 模型类型
  description: string; // 模型描述
  max_tokens: number; // 最大token数
  support_vision: number; // 是否支持视觉输入
  status: number; // 状态
  sort_order: number; // 排序顺序
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

// 模型使用统计数据项
export interface ModelUsageStatsItem {
  model_id: number; // 模型ID
  model_name: string; // 模型名称
  provider_name: string; // 供应商名称
  usage_count: number; // 使用次数
  success_count: number; // 成功次数
  failed_count: number; // 失败次数
  success_rate: number; // 成功率
  avg_latency: number; // 平均延迟（毫秒）
  total_tokens: number; // 总消耗token数
}

export interface NotifyTemplateItem {
  id: number;
  code: string;
  channel: string;
  scene: string;
  title: string;
  content: string;
  enabled: number;
  created_at: number;
  updated_at: number;
}

// 第三方登录（前端携带code）
export interface OauthLoginReq {
  platform: string; // 平台
  code: string; // 授权码
  state?: string; // 状态
}

// 操作日志信息项
export interface OperationLogItem {
  id: number; // 主键ID
  user_id: string; // 用户ID
  terminal_id: string; // 设备ID
  module: string; // 操作模块
  description: string; // 操作描述
  request_uri: string; // 请求地址
  request_method: string; // 请求方式
  request_data: string; // 请求参数
  response_data: string; // 返回数据
  response_status: number; // 响应状态码
  cost: string; // 耗时（ms）
  created_at: number; // 创建时间
  user_info: UserInfoVO; // 用户信息
  client_info: ClientInfoVO; // 客户端信息
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface PageResult {
  page: number;
  page_size: number;
  total: number;
  list: any;
}

// 密码登录（账号/手机号/邮箱 + 密码）
export interface PasswordLoginReq {
  account: string; // 账号/手机号/邮箱
  password: string; // 密码
  captcha_key?: string; // 图形验证码key
  captcha_code?: string; // 图形验证码
}

// 手机验证码登录（自动注册）
export interface PhoneCodeLoginReq {
  phone: string; // 手机号
  verify_code: string; // 验证码
}

export interface PingReq {}

export interface PingResp {
  env: string;
  name: string;
  version: string;
  runtime: string;
  description: string;
}

// 供应商信息项
export interface ProviderItem {
  id: number; // 供应商ID
  name: string; // 供应商名称
  code: string; // 供应商代码
  base_url: string; // API基础URL
  description: string; // 供应商描述
  status: number; // 状态
  sort_order: number; // 排序顺序
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

// 供应商使用统计数据项
export interface ProviderUsageStatsItem {
  provider_id: number; // 供应商ID
  provider_name: string; // 供应商名称
  total_calls: number; // 总调用次数
  success_calls: number; // 成功调用次数
  failed_calls: number; // 失败调用次数
  success_rate: number; // 成功率
  total_tokens: number; // 总消耗token数
  avg_latency: number; // 平均延迟（毫秒）
}

export interface QueryUserLoginHistoryReq extends PageQuery {}

export interface QuotaInfo {
  total: number;
  used: number;
  remaining: number;
}

// 用户充值请求
export interface RechargeUserReq {
  user_id: string; // 用户ID (UUID)
  token_amount: number; // 充值token数量
  description?: string; // 充值说明
}

// 用户充值响应
export interface RechargeUserResp {
  success: boolean;
  balance: number; // 充值后余额
}

export interface RefreshTokenReq {
  user_id: string; // 用户id
  grant_type: string; // 授权类型
  refresh_token: string; // 刷新令牌
}

// 邮箱注册（必须设密码）
export interface RegisterReq {
  email: string; // 邮箱
  password: string; // 密码
  confirm_password?: string; // 确认密码
  verify_code: string; // 验证码
  username?: string; // 用户名
  nickname?: string; // 昵称
}

// 重置密码请求（免登录，通过验证码）
export interface ResetPasswordReq {
  email: string; // 邮箱
  password: string; // 新密码
  confirm_password?: string; // 确认密码
  verify_code: string; // 验证码
}

// 重置配额请求
export interface ResetQuotaReq {
  id: number; // API密钥ID
}

// 重置配额响应
export interface ResetQuotaResp {
  success: boolean;
}

// 重置用户密码请求
export interface ResetUserPasswordReq {
  user_id: string; // 用户ID (UUID)
  new_password: string; // 新密码
}

// 重置用户密码响应
export interface ResetUserPasswordResp {
  success: boolean;
}

// 角色资源权限响应
export interface RolePermissionsResp {
  role_id: number; // 角色ID
  api_ids: number[]; // 绑定的接口权限ID列表
  menu_ids: number[]; // 绑定的菜单权限ID列表
}

// 角色信息VO - 后端返回视图对象
export interface RoleVO {
  id?: number; // 主键ID
  parent_id: number; // 父角色ID
  role_key: string; // 角色标识（唯一）
  role_label: string; // 角色名称（展示用）
  role_comment: string; // 角色备注说明
  is_default: number; // 是否默认角色 0-否 1-是
  status: number; // 状态 0-正常 1-禁用
  created_at: number; // 创建时间（时间戳）
  updated_at: number; // 更新时间（时间戳）
}

// 发送邮箱验证码
export interface SendEmailCodeReq {
  email: string; // 邮箱
  type: string; // login / register / reset_password / bind_email
}

// 发送手机验证码
export interface SendPhoneCodeReq {
  phone: string; // 手机号
  type: string; // login / reset_password / bind_phone
}

// 设置默认引擎配置请求
export interface SetDefaultEngineReq {
  id: number; // 引擎配置ID
  is_default?: number; // 是否为默认配置
}

// 设置默认引擎配置响应
export interface SetDefaultEngineResp {
  success: boolean;
}

export interface SmsMessageItem {
  id: number;
  phone: string;
  template_code: string;
  title: string;
  content: string;
  scene: string;
  status: string;
  biz_id: string;
  error_msg: string;
  created_at: number;
  updated_at: number;
}

export interface StatsTrendItem {
  date: string; // 日期
  new_users: number; // 新增用户数
  active_users: number; // 活跃用户数
  daily_generations: number; // 日生成次数
  daily_revenue: number; // 日收入
}

export interface SyncApisResp {
  success_count: number; // 同步成功数量
}

export interface SyncMenusReq {
  menus: CreateMenuReq[];
}

export interface SyncMenusResp {
  success_count: number; // 同步成功数量
}

// 系统配置信息项
export interface SystemConfigItem {
  id: number; // 配置ID
  config_key: string; // 配置键
  config_value: string; // 配置值
  config_type: string; // 配置类型
  description: string; // 配置描述
  is_encrypted: number; // 是否加密存储
  is_public: number; // 是否公开
  category: string; // 配置分类
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

// 系统配置更新项
export interface SystemConfigUpdateItem {
  config_key: string; // 配置键
  config_value: string; // 配置值
}

// 测试API密钥请求
export interface TestApiKeyReq {
  id: number; // API密钥ID
}

// 测试API密钥响应
export interface TestApiKeyResp {
  success: boolean; // 是否测试成功
  message: string; // 测试结果信息
  latency: number; // 响应延迟（毫秒）
  quota_info?: QuotaInfo; // 配额信息
}

export interface Token {
  token_type: string; // Token 类型（如 "Bearer"）
  access_token: string; // 访问令牌：用于接口访问，有效期短
  expires_in: number; // AccessToken 有效期（秒），如 3600（1小时）
  refresh_token: string; // 刷新令牌：仅用于刷新 AccessToken，有效期长
  refresh_expires_in: number; // RefreshToken 有效期（秒），如 604800（7天）
  refresh_expires_at: number; // RefreshToken 过期时间戳（秒）
}

export interface UpdateAdminPasswordReq {
  user_id: string;
  password: string;
}

export interface UpdateAdminRolesReq {
  user_id: string;
  role_ids: number[];
}

export interface UpdateAdminStatusReq {
  user_id: string;
  status: number; // 状态: -1删除 0正常 1禁用
}

// 更新API密钥请求
export interface UpdateApiKeyReq {
  id: number; // API密钥ID
  name?: string; // 密钥名称
  api_key?: string; // API密钥
  secret_key?: string; // Secret Key
  priority?: number; // 优先级
  quota_limit?: number; // 配额限制
  status?: number; // 状态
}

// 更新API密钥响应
export interface UpdateApiKeyResp {
  success: boolean;
}

export interface UpdateApiReq {
  id: number; // 主键id
  parent_id: number; // 分组id
  name: string; // api名称
  path: string; // api路径
  method: string; // api请求方法
  traceable: number; // 是否追溯操作记录 0不需要，1需要
  status: number; // 状态 0正常 1禁用
}

// 更新引擎配置请求
export interface UpdateEngineReq {
  id: number; // 引擎配置ID
  name?: string; // 配置名称
  engine_type: string; // 引擎类型
  model_id: number; // 模型ID
  system_prompt?: string; // 系统提示词
  user_prompt_template?: string; // 用户提示词模板
  temperature?: number; // 温度参数
  max_tokens?: number; // 最大生成token数
  top_p?: number; // Top-p采样参数
  frequency_penalty?: number; // 频率惩罚
  presence_penalty?: number; // 存在惩罚
  extra_params?: string; // 额外参数（JSON）
  is_default?: number; // 是否为默认配置
  status?: number; // 状态
}

// 更新引擎配置响应
export interface UpdateEngineResp {
  success: boolean;
}

export interface UpdateMenuReq extends MenuMeta {
  id: number; // 主键
  parent_id: number; // 父id
  path: string; // 路由地址
  name: string; // 路由名字
  component: string; // Layout组件
  redirect?: string; // 路由重定向
}

// 更新模型请求
export interface UpdateModelReq {
  id: number; // 模型ID
  name?: string; // 模型名称
  description?: string; // 模型描述
  max_tokens?: number; // 最大token数
  support_vision?: number; // 是否支持视觉输入
  status?: number; // 状态
  sort_order?: number; // 排序顺序
}

// 更新模型响应
export interface UpdateModelResp {
  success: boolean;
}

export interface UpdateNotifyTemplateReq {
  id: number;
  code: string;
  channel: string;
  scene: string;
  title: string;
  content: string;
  enabled: number;
}

export interface UpdateNotifyTemplateResp {
  success: boolean;
}

// 更新供应商请求
export interface UpdateProviderReq {
  id: number; // 供应商ID
  name?: string; // 供应商名称
  base_url?: string; // API基础URL
  description?: string; // 供应商描述
  status?: number; // 状态
  sort_order?: number; // 排序顺序
}

// 更新供应商响应
export interface UpdateProviderResp {
  success: boolean;
}

// 更新角色接口权限请求
export interface UpdateRoleApiPermissionsReq {
  role_id: number; // 角色ID（必填）
  api_ids: number[]; // 接口权限ID列表（必填，空数组表示清空权限）
}

// 更新角色菜单权限请求
export interface UpdateRoleMenuPermissionsReq {
  role_id: number; // 角色ID（必填）
  menu_ids: number[]; // 菜单权限ID列表（必填，空数组表示清空权限）
}

// 角色更新请求
export interface UpdateRoleReq {
  id: number; // 主键ID（必填）
  parent_id?: number; // 父角色ID（可选）
  role_key: string; // 角色标识（必填，唯一）
  role_label: string; // 角色名称（必填）
  role_comment: string; // 角色备注（必填）
  is_default: number; // 是否默认角色 0-否 1-是（必填）
  status: number; // 状态 0-正常 1-禁用（必填）
}

// 更新系统配置请求
export interface UpdateSystemConfigReq {
  id: number; // 配置ID
  config_value?: string; // 配置值
  description?: string; // 配置描述
  is_public?: number; // 是否公开
}

// 更新系统配置响应
export interface UpdateSystemConfigResp {
  success: boolean;
}

export interface UpdateUserAvatarReq {
  avatar: string; // 头像
}

export interface UpdateUserBindEmailReq {
  email: string; // 邮箱
  verify_code: string; // 验证码
}

export interface UpdateUserBindPhoneReq {
  phone: string; // 手机号
  verify_code: string; // 验证码
}

export interface UpdateUserBindThirdPartyReq {
  platform: string; // 平台
  code: string; // 授权码
  state?: string; // 状态
}

export interface UpdateUserPasswordReq {
  old_password: string; // 旧密码
  new_password: string; // 新密码
  confirm_password: string; // 确认密码
}

export interface UpdateUserProfileReq {
  nickname: string;
  avatar: string; // 用户头像
}

// 更新用户状态请求
export interface UpdateUserStatusReq {
  user_id: string; // 用户ID (UUID)
  status: number; // 状态：0-禁用 1-正常 2-冻结
}

// 更新用户状态响应
export interface UpdateUserStatusResp {
  success: boolean;
}

export interface UploadFilesReq {
  files?: any[]; // 文件列表
  file_path?: string; // 文件路径
}

// 文件上传日志信息项
export interface UploadLogItem {
  id: number; // ID
  user_id: string; // 用户ID
  terminal_id: string; // 设备ID
  file_path: string; // 文件路径
  file_name: string; // 文件名称
  file_type: string; // 文件类型
  file_size: number; // 文件大小
  file_url: string; // 上传路径
  created_at: number; // 创建时间
  user_info: UserInfoVO; // 用户信息
  client_info: ClientInfoVO; // 客户端信息
}

export interface UserAccount {
  balance: string; // 账户余额（元，字符串格式，如"0.00"）
  credit_limit: string; // 信用额度（元，字符串格式）
  total_recharge: string; // 累计充值金额（元，字符串格式）
  total_consume: string; // 累计消费金额（元，字符串格式）
  coin: number; // 积分
  status: number; // 账户状态
}

// 用户活跃度排行数据项
export interface UserActivityRankingItem {
  user_id: string; // 用户ID
  nickname: string; // 昵称
  generation_count: number; // 生成次数
  tokens_consumed: number; // 消耗token数
  last_generated_at: number; // 最后生成时间
}

export interface UserApi {
  id?: number; // 主键id
  parent_id: number; // 父id
  name: string; // api名称
  path: string; // api路径
  method: string; // api请求方法
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
  children: UserApi[];
}

export interface UserInfoVO {
  user_id: string;
  username: string;
  avatar: string;
  nickname: string;
  user_type: string;
}

// 用户信息项
export interface UserItem {
  id: number; // 用户ID (UUID)
  user_id: string; // 用户ID (UUID)
  usernmae: string; // 用户名
  nickname: string; // 用户昵称
  avatar: string; // 用户头像
  phone?: string; // 用户手机号
  email?: string; // 用户邮箱
  status: number; // 状态：0-禁用 1-正常 2-冻结
  register_type: string; // 注册方式
  ip_address: string; // IP地址
  ip_source: string; // IP归属地
  created_at: number;
  updated_at: number;
  roles: UserRoleLabel[];
}

export interface UserLastLogin {
  login_at: number; // 最后登录时间（毫秒时间戳）
  login_ip_address: string; // 最后登录IP地址
  login_ip_source: string; // 最后登录IP归属地
}

// 用户登录日志信息项
export interface UserLoginLogItem {
  id: number; // 日志ID
  user_id: string; // 用户ID
  terminal_id: string; // 设备ID
  login_type: string; // 登录类型
  status: number; // 登录状态
  fail_reason: string; // 失败原因
  logout_at: number; // 登出时间
  created_at: number; // 创建时间
  user_info: UserInfoVO; // 用户信息
  client_info: ClientInfoVO; // 客户端信息
}

export interface UserMenu {
  id?: number; // 主键
  parent_id: number; // 父id
  path: string; // 路由地址
  name: string; // 路由名字
  component: string; // Layout组件
  redirect: string; // 路由重定向
  meta: UserMenuMeta; // meta配置
  children?: UserMenu[];
  created_at: number; // 创建时间
  updated_at: number; // 更新时间
}

export interface UserMenuMeta {
  title?: string;
  icon?: string;
  hidden?: boolean;
  alwaysShow?: boolean;
  affix?: boolean;
  keepAlive?: boolean;
  breadcrumb?: boolean;
}

export interface UserRole {
  id?: number; // 主键id
  parent_id: number; // 父id
  role_key: string; // 角色名
  role_label: string; // 角色标签
  role_comment: string; // 角色备注
}

export interface UserRoleLabel {
  role_id: number;
  role_key: string;
  role_label: string;
}

export interface UserThirdPartyInfo {
  platform: string; // 平台
  open_id: string; // 平台用户id
  nickname: string; // 昵称
  avatar: string; // 头像
  created_at: number; // 创建时间
}

export interface UserVO {
  user_id: string; // 用户ID（UUID）
  username: string; // 用户名
  nickname: string; // 真实姓名
  avatar: string; // 头像
  email: string; // 邮箱
  phone: string; // 手机号
  status: number; // 状态：0-正常 1-禁用
  created_at: number; // 创建时间（毫秒时间戳）
  updated_at: number; // 更新时间（毫秒时间戳）
  third_party: UserThirdPartyInfo[]; // 第三方绑定
  roles: string[];
  perms: string[];
}
