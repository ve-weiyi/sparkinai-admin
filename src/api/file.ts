import request from "@/utils/request";


export interface BatchDeleteFilesReq {
  ids: string[]; 
}

export interface BatchDeleteFilesResp {
  success_count: number; 
}

export interface DeleteFileReq {
  id: string; 
}

export interface DeleteFileResp {
  success: boolean; 
}

export interface FileInfoVO {
  file_path: string; // 文件路径
  file_name: string; // 文件名称
  file_type: string; // 文件类型
  file_size: number; // 文件大小
  file_url: string; // 上传路径
  updated_at: number; // 更新时间
}

export interface ListFileReq {
  file_path?: string; // 文件路径
  limit?: number; // 限制
}

export interface MultiUploadFilesReq {
  files?: any[]; // 文件列表
  file_path?: string; // 文件路径
}

export interface PageResp {
  page: number; 
  page_size: number; 
  total: number; 
  list: any; 
}

export interface UploadFileReq {
  file?: any; // 文件
  file_path?: string; // 文件路径
}


export const FileAPI = {
  /** 上传文件 */
  uploadFile(data?: UploadFileReq): Promise<IApiResponse<FileInfoVO>> {
    return request({
      url: "/admin-api/v1/files",
      method: "POST",
      data: data,
    });
  },

  /** 批量删除文件 */
  deleteFile(data?: DeleteFileReq): Promise<IApiResponse<DeleteFileResp>> {
    return request({
      url: "/admin-api/v1/files/:id",
      method: "DELETE",
      data: data,
    });
  },

  /** 批量删除文件 */
  batchDeleteFile(data?: BatchDeleteFilesReq): Promise<IApiResponse<BatchDeleteFilesResp>> {
    return request({
      url: "/admin-api/v1/files/batch-delete",
      method: "DELETE",
      data: data,
    });
  },

  /** 获取文件列表 */
  listFile(data?: ListFileReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: "/admin-api/v1/files/list",
      method: "POST",
      data: data,
    });
  },

  /** 上传文件列表 */
  multiUploadFiles(data?: MultiUploadFilesReq): Promise<IApiResponse<FileInfoVO[]>> {
    return request({
      url: "/admin-api/v1/files/multi",
      method: "POST",
      data: data,
    });
  },
};
