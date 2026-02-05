import type { IContentConfig } from "@/components/CURD/types.ts";
import { GenerationAPI } from "@/api/generation.ts";

const contentConfig: IContentConfig = {
  pageTitle: "生成记录管理",
  pk: "id",
  cols: [
    { label: "ID", prop: "id", width: 150, align: "center", showOverflowTooltip: true },
    { label: "用户手机", prop: "user_phone", width: 120, align: "center" },
    {
      label: "产品名称",
      prop: "product_name",
      width: 150,
      align: "center",
      showOverflowTooltip: true,
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
  indexAction: function (params) {
    return GenerationAPI.getGenerationList(params);
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
};

export default contentConfig;
