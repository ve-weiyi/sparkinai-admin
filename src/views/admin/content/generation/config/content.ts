import type { IContentConfig } from "@/components/CURD/types.ts";
import { GenerationAPI } from "@/api/generation.ts";

const contentConfig: IContentConfig = {
  pageTitle: "生成记录管理",
  permPrefix: "admin:generation",
  table: {
    border: true,
    highlightCurrentRow: true,
  },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 30, 50],
  },
  indexAction: function (params) {
    return GenerationAPI.getGenerationList(params);
  },
  parseData: (res) => {
    return {
      total: res.data.total,
      list: res.data.list || [],
    };
  },
  deleteAction: (ids) => {
    const idList = ids.split(",");
    if (idList.length === 1) {
      return GenerationAPI.deleteGeneration({ id: idList[0] });
    }
    return GenerationAPI.batchDeleteGenerations({ ids: idList }).then((res) => ({
      code: 0,
      message: `成功删除 ${res.data.success_count} 条记录`,
    }));
  },
  pk: "id",
  cols: [
    { label: "ID", prop: "id", width: 150, align: "center",  },
    {
      label: "用户",
      prop: "user_info",
      width: 150,
      align: "center",
      templet: "custom",
    },
    {
      label: "产品名称",
      prop: "product_name",
      width: 150,
      align: "center",
    },
    { label: "生成类型", prop: "generation_type", width: 100, align: "center" },
    {
      label: "状态",
      prop: "status",
      width: 100,
      align: "center",
      templet: "custom",
      slotName: "status",
    },
    { label: "Token消耗", prop: "cost_tokens", width: 100, align: "center" },
    { label: "耗时(s)", prop: "generation_time", width: 100, align: "center" },
    {
      label: "创建时间",
      prop: "created_at",
      width: 180,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
    {
      label: "操作",
      width: 250,
      align: "center",
      fixed: "right",
      templet: "tool",
      operat: [
        { name: "view_copy", text: "文案", attrs: { type: "primary", plain: true } },
        { name: "view_images", text: "图片", attrs: { type: "success", plain: true } },
        { name: "regenerate", text: "重试", attrs: { type: "warning", plain: true } },
        { name: "delete", text: "删除", attrs: { type: "danger", plain: true } },
      ],
    },
  ],
};

export default contentConfig;
