import type { IContentConfig } from "@/components/CURD/types";
import { GenerationAPI } from "@/api/generation";
import { GENERATION_TYPE_SELECT_LIST } from "@/constants/options";

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
    if (!params.sorts || params.sorts.length == 0) {
      params.sorts = "created_at desc";
    }
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
  defaultToolbar: ["refresh", "filter", "imports", "exports", "search"],
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center", sortable: true },
    { label: "UUID", prop: "generation_id", width: 150, align: "center", show: false },
    {
      label: "用户",
      prop: "user_info",
      width: 150,
      align: "center",
      templet: "custom",
    },
    {
      label: "任务名称",
      prop: "generation_name",
      minWidth: 150,
      align: "center",
    },
    {
      label: "输入参数",
      prop: "variables",
      width: 200,
      align: "center",
      show: false,
    },
    {
      label: "生成类型",
      prop: "generation_type",
      width: 100,
      align: "center",
      templet: "list",
      selectList: GENERATION_TYPE_SELECT_LIST,
    },
    {
      label: "Agent",
      prop: "agent",
      width: 120,
      align: "center",
    },
    {
      label: "模型",
      prop: "model",
      width: 130,
      align: "center",
    },
    {
      label: "供应商",
      prop: "provider",
      width: 100,
      align: "center",
    },
    {
      label: "状态",
      prop: "status",
      width: 100,
      align: "center",
      templet: "custom",
      slotName: "status",
    },
    { label: "输入Token", prop: "input_tokens", width: 100, align: "center" },
    { label: "输出Token", prop: "output_tokens", width: 100, align: "center" },
    { label: "总Token", prop: "cost_tokens", width: 100, align: "center" },
    {
      label: "费用",
      prop: "cost_charge",
      width: 100,
      align: "center",
      templet: "custom",
      slotName: "cost_charge",
    },
    { label: "耗时(s)", prop: "cost_time", width: 100, align: "center" },
    {
      label: "错误信息",
      prop: "error_message",
      width: 200,
      align: "center",
      show: false,
    },
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
      width: 180,
      align: "center",
      fixed: "right",
      templet: "tool",
      operat: [
        { name: "view_result", text: "结果", attrs: { type: "primary", plain: true } },
        { name: "delete", text: "删除", attrs: { type: "danger", plain: true } },
      ],
    },
  ],
};

export default contentConfig;
