import type { IContentConfig } from "@/components/CURD/types";
import { AgentAgentAPI } from "@/api";
import { UpdateAgentReq } from "@/api/types";
import { EnableStatusEnum } from "@/enums";
import { AGENT_TYPE_SELECT_LIST } from "@/constants/options";

const contentConfig: IContentConfig = {
  pageTitle: "Agent 管理",
  permPrefix: "admin:agent",
  table: { border: true, highlightCurrentRow: true },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 50],
  },
  indexAction: (query) => AgentAgentAPI.getAgentList(query),
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  modifyAction: (row) => AgentAgentAPI.updateAgent(row as UpdateAgentReq),
  deleteAction: (ids) => {
    const idList = ids.split(",");
    if (idList.length === 1) {
      return AgentAgentAPI.deleteAgent({ id: parseInt(idList[0]) });
    }
    return Promise.all(
      idList.map((id) => AgentAgentAPI.deleteAgent({ id: parseInt(id) }))
    ).then(() => ({ code: 0, message: "success" }));
  },
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "ID", prop: "id", width: 70, align: "center" },
    { label: "名称", prop: "name", minWidth: 100, align: "center" },
    { label: "别名", prop: "alias_name", width: 100, align: "center" },
    { label: "Key", prop: "agent_key", width: 140, align: "center" },
    {
      label: "类型",
      prop: "agent_type",
      width: 130,
      align: "center",
      templet: "list",
      selectList: AGENT_TYPE_SELECT_LIST,
    },
    { label: "模型 Key", prop: "model_key", width: 120, align: "center" },
    { label: "描述", prop: "description", minWidth: 160, align: "center" },
    {
      label: "状态",
      prop: "status",
      width: 90,
      align: "center",
      templet: "switch",
      activeValue: EnableStatusEnum.ENABLED,
      inactiveValue: EnableStatusEnum.DISABLED,
      activeText: "启用",
      inactiveText: "禁用",
    },
    {
      label: "创建时间",
      prop: "created_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 140,
      templet: "tool",
      operat: [
        { name: "edit", text: "编辑", perm: "edit", attrs: { icon: "edit", type: "primary" } },
        { name: "delete", text: "删除", perm: "delete", attrs: { icon: "delete", type: "danger" } },
      ],
    },
  ],
};

export default contentConfig;
