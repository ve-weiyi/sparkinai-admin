import request from "@/utils/request";
import type {
  FileInfoVO,
  GetUploadTokenReq,
  GetUploadTokenResp,
  ListFilesReq,
  PageResp,
  UploadFilesReq
} from "./types";

/** 文件上传 */
export const UploadAPI = {
  /** 获取文件列表 */
  listFiles(params?: ListFilesReq): Promise<IApiResponse<PageResp>> {
    return request({
      url: `/admin-api/v1/upload/files`,
      method: "GET",
      params: params,
    });
  },

  /** 上传文件（服务端上传） */
  uploadFiles(data?: UploadFilesReq): Promise<IApiResponse<FileInfoVO[]>> {
    return request({
      url: `/admin-api/v1/upload/files`,
      method: "POST",
      data: data,
    });
  },

  /** 获取上传凭证（前端直传） */
  getUploadToken(data?: GetUploadTokenReq): Promise<IApiResponse<GetUploadTokenResp>> {
    return request({
      url: `/admin-api/v1/upload/upload-token`,
      method: "POST",
      data: data,
    });
  },

};
