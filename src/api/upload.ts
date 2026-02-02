import request from "@/utils/request";


export interface FileInfoVO {
  file_path: string; // 文件路径
  file_name: string; // 文件名称
  file_type: string; // 文件类型
  file_size: number; // 文件大小
  file_url: string; // 上传路径
  updated_at: number; // 更新时间
}

export interface GetUploadTokenReq {
  file_name: string; // 文件名称
  expire_seconds?: number; // 凭证有效期（秒），默认1小时
}

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

export interface ListFilesReq {
  file_path?: string; // 文件路径
  limit?: number; // 限制
}

export interface PageResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: any; 
}

export interface UploadFilesReq {
  files?: any[]; // 文件列表
  file_path?: string; // 文件路径
}


export const UploadAPI = {
  /** 获取文件列表 */
  listFiles(data?: ListFilesReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/upload/files",
      method: "GET",
      data: data,
    });
  },

  /** 上传文件（服务端上传） */
  uploadFiles(data?: UploadFilesReq): Promise<IApiResponse<FileInfoVO[]>> {
    return request({
      url: "/admin-api/v1/upload/files",
      method: "POST",
      data: data,
    });
  },

  /** 获取上传凭证（前端直传） */
  getUploadToken(data?: GetUploadTokenReq): Promise<IApiResponse<GetUploadTokenResp>> {
    return request({
      url: "/admin-api/v1/upload/upload-token",
      method: "POST",
      data: data,
    });
  },
};
