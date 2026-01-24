import type { IContentConfig } from "@/components/CURD/types";

const contentConfig: IContentConfig = {
  pageTitle: "内容生成记录",
  permPrefix: "admin:xhs:generation",
  table: { border: true, highlightCurrentRow: true },
  pagination: { background: true, layout: "prev,pager,next,jumper,total,sizes", pageSize: 10, pageSizes: [10, 20, 50] },
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  deleteAction: (ids) => Promise.resolve(),
  indexAction: (query) => Promise.resolve({ data: { total: 0, list: [] } }),
  pk: "id",
  toolbar: [
    { name: "export", text: "导出数据", perm: "export", attrs: { icon: "download", type: "success" } }
  ],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "记录ID", prop: "id", width: 200, align: "center", showOverflowTooltip: true },
    { label: "用户手机号", prop: "user.phone", width: 120, align: "center" },
    { label: "产品名称", prop: "productName", width: 150, align: "center" },
    { 
      label: "产品描述", 
      prop: "description", 
      width: 200, 
      align: "center",
      showOverflowTooltip: true
    },
    {
      label: "生成文案",
      prop: "copyResult",
      width: 200,
      align: "center",
      templet: "custom",
      customRender: (row: any) => {
        if (row.copyResult) {
          return `${row.copyResult.substring(0, 30)}...`;
        }
        return "无文案";
      }
    },
    {
      label: "生成图片",
      prop: "imageUrls",
      width: 120,
      align: "center",
      templet: "custom",
      customRender: (row: any) => {
        if (row.imageUrls) {
          try {
            const images = JSON.parse(row.imageUrls);
            return `${images.length} 张图片`;
          } catch {
            return "数据错误";
          }
        }
        return "无图片";
      }
    },
    {
      label: "创建时间",
      prop: "createdAt",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss"
    },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 200,
      templet: "tool",
      operat: [
        { name: "viewCopy", text: "查看文案", perm: "view", attrs: { icon: "document", type: "primary" } },
        { name: "viewImages", text: "查看图片", perm: "view", attrs: { icon: "picture", type: "success" } },
        { name: "delete", text: "删除", perm: "delete", attrs: { icon: "delete", type: "danger" } }
      ]
    }
  ]
};

export default contentConfig;