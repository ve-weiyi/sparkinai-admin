import * as imageConversion from "image-conversion";
import { UploadAPI } from "@/api/upload";

export function compressImage(rawFile: Blob) {
  return new Promise<Blob>((resolve, reject) => {
    // 压缩到200KB,这里的200就是要压缩的大小,可自定义
    imageConversion.compressAccurately(rawFile, 200).then((res: Blob) => {
      console.log("compressAccurately", res.size);
      resolve(res);
    });
  });
}

/**
 * 使用上传凭证上传文件（前端直传）
 */
export async function uploadFileWithToken(file: File, fileName?: string): Promise<string> {
  try {
    // 获取上传凭证
    const { data: tokenData } = await UploadAPI.getUploadToken({
      file_name: fileName || file.name
    })

    // 构建上传表单数据
    const formData = new FormData()
    formData.append('token', tokenData.token)
    formData.append('policy', tokenData.policy)
    formData.append('signature', tokenData.signature)
    formData.append('key', tokenData.file_key)
    
    // 添加额外数据
    Object.entries(tokenData.extra_data || {}).forEach(([key, value]) => {
      formData.append(key, String(value))
    })
    
    formData.append('file', file)

    // 直接上传到第三方存储
    const response = await fetch(tokenData.upload_url, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${tokenData.token}`
      }
    })

    if (!response.ok) {
      throw new Error('上传失败')
    }

    return tokenData.access_url
  } catch (error) {
    console.error('上传失败:', error)
    throw error
  }
}

/**
 * 批量上传文件（使用上传凭证）
 */
export async function multipleUploadFileWithToken(files: File[]): Promise<string[]> {
  const uploadPromises = files.map(file => uploadFileWithToken(file))
  return Promise.all(uploadPromises)
}

export const calculateFileSize = (size: number, isInteger = false) => {
  if (size === 0) {
    return "--";
  }
  const B = 1024;
  const KB = Math.pow(1024, 2);
  const MB = Math.pow(1024, 3);
  const GB = Math.pow(1024, 4);
  if (isInteger) {
    // 截取为整数
    if (size < B) {
      return `${size}B`;
    } else if (size < KB) {
      return `${(size / B).toFixed(0)}KB`;
    } else if (size < MB) {
      return `${(size / KB).toFixed(0)}MB`;
    } else if (size < GB) {
      return `${(size / MB).toFixed(0)}GB`;
    } else {
      return `${(size / GB).toFixed(0)}TB`;
    }
  } else {
    // 保留小数位
    if (size < B) {
      return `${size}B`;
    } else if (size < KB) {
      return `${(size / B).toFixed(0)}KB`;
    } else if (size < MB) {
      return `${(size / KB).toFixed(1)}MB`;
    } else if (size < GB) {
      return `${(size / MB).toFixed(2)}GB`;
    } else {
      return `${(size / GB).toFixed(3)}TB`;
    }
  }
};

export function downloadFile(url: string, filename: string) {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      // 创建下载链接
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;

      // 触发下载
      document.body.appendChild(link);
      link.click();

      // 清理
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    });
}
