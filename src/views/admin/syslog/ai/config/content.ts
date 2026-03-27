import type { IContentConfig } from "@/components/CURD/types";
import { SyslogAPI } from "@/api/syslog";

const contentConfig: IContentConfig = {
  pageTitle: "AI调用日志",
  permPrefix: "syslog:ai",
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
  indexAction: (params) => SyslogAPI.getAiLogList(params),
  parseData: (res) => {
    return {
      total: res.data.total,
      list: res.data.list || [],
    };
  },
  deleteAction: (ids) => SyslogAPI.batchDeleteAiLogs({ ids: ids.split(",").map(Number) }),
  pk: "id",
  toolbar: [
    {
      name: "delete",
      text: "删除",
      perm: "delete",
      attrs: {
        icon: "delete",
        type: "danger",
      },
    },
  ],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    {
      type: "selection",
      label: "批量操作",
      width: 50,
      align: "center",
    },
    {
      label: "ID",
      prop: "id",
      width: 70,
      align: "center",
      sortable: true,
    },
    {
      label: "用户",
      prop: "user_info",
      width: 150,
      align: "center",
      templet: "custom",
    },
    {
      label: "客户端",
      prop: "client_info",
      width: 150,
      align: "center",
      templet: "custom",
    },
    {
      label: "模型",
      prop: "model",
      width: 150,
      align: "center",
    },
    {
      label: "状态",
      prop: "status",
      width: 80,
      align: "center",
      templet: "custom",
    },
    {
      label: "耗时(ms)",
      prop: "cost_ms",
      width: 100,
      align: "center",
      sortable: true,
    },
    {
      label: "输入token",
      prop: "input_tokens",
      width: 100,
      align: "center",
      sortable: true,
    },
    {
      label: "输出token",
      prop: "output_tokens",
      width: 100,
      align: "center",
      sortable: true,
    },
    {
      label: "总token",
      prop: "total_tokens",
      width: 100,
      align: "center",
      sortable: true,
    },
    {
      label: "费用",
      prop: "cost_charge",
      width: 100,
      align: "center",
      sortable: true,
      templet: "custom",
    },
    {
      label: "结算状态",
      prop: "billing_status",
      width: 100,
      align: "center",
      templet: "custom",
    },
    {
      label: "流水号",
      prop: "transaction_no",
      width: 180,
      align: "center",
    },
    {
      label: "请求体",
      prop: "request_body",
      width: 80,
      align: "center",
      templet: "custom",
    },
    {
      label: "响应体",
      prop: "response_body",
      width: 80,
      align: "center",
      templet: "custom",
    },
    {
      label: "错误信息",
      prop: "error_msg",
      width: 200,
      align: "center",
    },
    {
      label: "结算时间",
      prop: "billed_at",
      width: 170,
      align: "center",
      sortable: true,
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
    {
      label: "创建时间",
      prop: "created_at",
      width: 170,
      align: "center",
      sortable: true,
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
    {
      label: "操作栏",
      align: "center",
      fixed: "right",
      width: 100,
      templet: "tool",
      operat: ["delete"],
    },
  ],
};

export default contentConfig;
