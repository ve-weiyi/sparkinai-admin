import request from '@/utils/request'

export interface ContentGeneration {
  id: number
  userId: string
  productName: string
  description: string
  copyResult: string
  imageUrls: string
  createdAt: string
  user?: {
    phone: string
  }
}

export interface ContentListParams {
  page: number
  size: number
  userId?: string
  productName?: string
  startDate?: string
  endDate?: string
}

export interface ContentListResponse {
  list: ContentGeneration[]
  total: number
}

export function getContentList(params: ContentListParams) {
  return request<ContentListResponse>({
    url: '/api/content/generations',
    method: 'get',
    params
  })
}

export function deleteContent(id: number) {
  return request({
    url: `/api/content/generations/${id}`,
    method: 'delete'
  })
}

export function batchDeleteContent(ids: number[]) {
  return request({
    url: '/api/content/generations/batch',
    method: 'delete',
    data: { ids }
  })
}

export function exportContentData(params: any) {
  return request({
    url: '/api/content/generations/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
}
