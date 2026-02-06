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
  roles: AdminRoleLabel[];
}

export interface AdminRoleLabel {
  role_id: number;
  role_key: string;
  role_label: string;
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

export interface CleanMenusReq {
}

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

export interface EmailLoginReq {
  email: string; // 邮箱
  password: string; // 密码
  captcha_key?: string; // 验证码key
  captcha_code?: string; // 验证码
}

export interface EmptyReq {
}

export interface EmptyResp {
}

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

// 导出统计报表请求
export interface ExportStatsReportReq {
  report_type: string; // 报表类型
  start_date: string; // 开始日期 YYYY-MM-DD
  end_date: string; // 结束日期 YYYY-MM-DD
  format?: string; // 导出格式
}

// 导出统计报表响应
export interface ExportStatsReportResp {
  file_url: string; // 文件下载URL
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
  user_phone: string; // 用户手机号
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
}

// 生成统计趋势数据项
export interface GenerationTrendItem {
  date: string; // 日期
  total_generations: number; // 总生成次数
  copy_generations: number; // 文案生成次数
  image_generations: number; // 图片生成次数
  success_generations: number; // 成功生成次数
  failed_generations: number; // 失败生成次数
}

export interface GetAdminListReq extends PageQuery {
  username?: string;
  email?: string;
  phone?: string;
  status?: number; // 状态: -1删除 0正常 1禁用
  user_ids?: string[]; // 管理员ID
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

// 获取API密钥使用统计请求
export interface GetApiKeyUsageStatsReq {
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

// 获取API密钥使用统计响应
export interface GetApiKeyUsageStatsResp {
  list: ApiKeyUsageStatsItem[]; // 统计数据列表
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

export interface GetClientInfoReq {
}

export interface GetClientInfoResp {
  id: number; // 访客唯一ID
  terminal_id: string; // 终端ID
  os: string; // 操作系统
  browser: string; // 浏览器
  ip_address: string; // IP地址
  ip_source: string; // IP归属地
}

// 获取仪表盘统计数据请求
export interface GetDashboardStatsReq {
}

// 仪表盘统计数据响应
export interface GetDashboardStatsResp {
  total_users: number; // 总用户数
  new_users_today: number; // 今日新增用户
  active_users_today: number; // 今日活跃用户
  total_generations: number; // 总生成次数
  generations_today: number; // 今日生成次数
  success_rate: number; // 成功率
  total_revenue: number; // 总收入
  revenue_today: number; // 今日收入
  total_tokens_consumed: number; // 总消耗token数
  tokens_consumed_today: number; // 今日消耗token数
  avg_generation_time: number; // 平均生成耗时（秒）
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

// 获取引擎使用统计请求
export interface GetEngineUsageStatsReq {
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

// 获取引擎使用统计响应
export interface GetEngineUsageStatsResp {
  list: EngineUsageStatsItem[]; // 统计数据列表
}

// 获取生成记录详情请求
export interface GetGenerationDetailReq {
  id: string; // 生成记录ID
}

// 生成记录详情响应
export interface GetGenerationDetailResp extends GenerationItem {
}

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

// 获取生成统计趋势请求
export interface GetGenerationTrendReq {
  start_date: string; // 开始日期 YYYY-MM-DD
  end_date: string; // 结束日期 YYYY-MM-DD
}

// 获取生成统计趋势响应
export interface GetGenerationTrendResp {
  list: GenerationTrendItem[]; // 趋势数据列表
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
export interface GetModelDetailResp extends ModelItem {
}

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

// 获取模型使用统计请求
export interface GetModelUsageStatsReq {
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

// 获取模型使用统计响应
export interface GetModelUsageStatsResp {
  list: ModelUsageStatsItem[]; // 统计数据列表
}

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

// 获取热门产品统计请求
export interface GetPopularProductsReq {
  limit?: number; // 返回数量限制
}

// 获取热门产品统计响应
export interface GetPopularProductsResp {
  list: PopularProductItem[]; // 热门产品列表
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

// 获取供应商使用统计请求
export interface GetProviderUsageStatsReq {
  start_date?: string; // 开始日期 YYYY-MM-DD
  end_date?: string; // 结束日期 YYYY-MM-DD
}

// 获取供应商使用统计响应
export interface GetProviderUsageStatsResp {
  list: ProviderUsageStatsItem[]; // 统计数据列表
}

// 获取公开配置请求（无需认证）
export interface GetPublicConfigReq {
}

// 获取公开配置响应
export interface GetPublicConfigResp {
  configs: Record<string, any>; // 公开配置键值对
}

// 获取收入统计趋势请求
export interface GetRevenueTrendReq {
  start_date: string; // 开始日期 YYYY-MM-DD
  end_date: string; // 结束日期 YYYY-MM-DD
}

// 获取收入统计趋势响应
export interface GetRevenueTrendResp {
  list: RevenueTrendItem[]; // 趋势数据列表
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
export interface GetSystemConfigResp extends SystemConfigItem {
}

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
  updated_at: number; // 更新时间
}

// 获取用户增长趋势请求
export interface GetUserGrowthTrendReq {
  start_date: string; // 开始日期 YYYY-MM-DD
  end_date: string; // 结束日期 YYYY-MM-DD
}

// 获取用户增长趋势响应
export interface GetUserGrowthTrendResp {
  list: UserGrowthTrendItem[]; // 趋势数据列表
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

export interface GetUserProfileReq {
}

export interface GetUserRolesResp {
  list: UserRole[];
}

export interface IdReq {
  id: number;
}

export interface IdsReq {
  ids: number[];
}

export interface ListFilesReq {
  file_path?: string; // 文件路径
  limit?: number; // 限制
}

// 用户登录请求（账号-密码/验证码登录）
export interface LoginReq {
  username: string;
  password: string;
  captcha_key?: string; // 验证码key
  captcha_code?: string; // 验证码
}

// 用户登录响应
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

export interface OauthLoginReq {
  platform: string; // 平台
  code?: string; // 授权码
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
}

export interface PageQuery {
  page?: number; // 当前页码
  page_size?: number; // 每页数量
  sorts?: string[]; // 排序
}

export interface PageResp {
  page: number;
  page_size: number;
  total: number;
  list: any;
}

export interface PhoneLoginReq {
  phone: string; // 手机号
  verify_code: string; // 验证码
}

export interface PingReq {
}

export interface PingResp {
  env: string;
  name: string;
  version: string;
  runtime: string;
  description: string;
}

// 热门产品统计数据项
export interface PopularProductItem {
  product_name: string; // 产品名称
  generation_count: number; // 生成次数
  success_count: number; // 成功次数
  last_generated_at: number; // 最后生成时间
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

export interface QueryUserLoginHistoryReq extends PageQuery {
}

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
  token_balance: number; // 充值后余额
}

export interface RefreshTokenReq {
  user_id: string; // 用户id
  grant_type: string; // 授权类型
  refresh_token: string; // 刷新令牌
}

// 重新生成请求
export interface RegenerateReq {
  id: string; // 生成记录ID
}

// 重新生成响应
export interface RegenerateResp {
  success: boolean;
  generation_id: string; // 新的生成记录ID
}

// 用户注册请求
export interface RegisterReq {
  email: string; // 邮箱
  password: string; // 密码
  confirm_password?: string; // 确认密码
  verify_code: string; // 验证码
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

// 收入统计趋势数据项
export interface RevenueTrendItem {
  date: string; // 日期
  revenue: number; // 收入金额
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

export interface SendEmailVerifyCodeReq {
  email: string; // 邮箱
  type: string; // 类型 register,reset_password,bind_email,bind_phone
}

export interface SendPhoneVerifyCodeReq {
  phone: string; // 手机号
  type: string; // 类型 register,reset_password,bind_email,bind_phone
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

// 测试供应商连接请求
export interface TestProviderReq {
  id: number; // 供应商ID
}

// 测试供应商连接响应
export interface TestProviderResp {
  success: boolean; // 是否连接成功
  message: string; // 提示信息
  latency: number; // 响应延迟(ms)
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
}

// 用户活跃度排行数据项
export interface UserActivityRankingItem {
  user_id: string; // 用户ID
  phone: string; // 手机号
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

// 用户增长趋势数据项
export interface UserGrowthTrendItem {
  date: string; // 日期
  new_users: number; // 新增用户数
  active_users: number; // 活跃用户数
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
  free_usage: number; // 免费使用次数
  token_balance: number; // Token余额
  total_generations: number; // 累计生成次数
  last_login_at: number; // 最后登录时间（时间戳）
  last_login_ip: string; // 最后登录IP
  created_at: number; // 创建时间（时间戳）
  roles: UserRoleLabel[];
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
  last_login_at: number; // 最后登录时间（毫秒时间戳）
  last_login_ip: string; // 最后登录IP
  created_at: number; // 创建时间（毫秒时间戳）
  updated_at: number; // 更新时间（毫秒时间戳）
  third_party: UserThirdPartyInfo[]; // 第三方绑定
  roles: string[];
  perms: string[];
}

