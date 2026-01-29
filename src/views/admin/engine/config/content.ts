import type { IContentConfig } from "@/components/CURD/types";
import { EngineAPI } from "@/api/engine";

const contentConfig: IContentConfig = {
  pageTitle: "引擎配置",
  permPrefix: "admin:engine",
  table: { border: true, highlightCurrentRow: true },
  pagination: { background: true, layout: "prev,pager,next,jumper,total,sizes", pageSize: 10, pageSizes: [10, 20, 50] },
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  modifyAction: (row, field, value) => {
    return EngineAPI.updateEngineConfig({ id: row.id, [field]: value });
  },
  deleteAction: (ids) => {
    const idList = ids.split(",");
    if (idList.length === 1) {
      return EngineAPI.deleteEngineConfig({id: parseInt(idList[0])});
    }
    return Promise.all(idList.map(id => EngineAPI.deleteEngineConfig({id: parseInt(id)}))).then(() => ({
      code: 0,
      message: "success"
    }));
  },
  indexAction: (query) => EngineAPI.getEngineConfigList(query),
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "配置名称", prop: "name", width: 150, align: "center" },
    { label: "类型", prop: "engine_type", width: 100, align: "center" },
    { label: "模型", prop: "model_name", width: 150, align: "center" },
    {
      label: "默认",
      prop: "is_default",
      width: 80,
      align: "center",
      templet: "switch",
      activeValue: 1,
      inactiveValue: 0,
      activeText: "是",
      inactiveText: "否",
      disabled: true // Usually set via specific action, not directly editable here unless we impl modifyAction
    },
    { label: "状态", prop: "status", width: 80, align: "center", templet: "switch", activeValue: 1, inactiveValue: 2, activeText: "启用", inactiveText: "禁用" },
    { label: "创建时间", prop: "created_at", width: 170, align: "center", templet: "date", dateFormat: "YYYY/MM/DD HH:mm:ss" },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 150,
      templet: "tool",
      operat: [
        { name: "edit", text: "编辑", perm: "edit", attrs: { icon: "edit", type: "primary" } },
        { name: "delete", text: "删除", perm: "delete", attrs: { icon: "delete", type: "danger" } },
        {
          name: "set_default",
          text: "设为默认",
          perm: "edit",
          attrs: { type: "success", size: "small" },
          render: (row) => row.is_default === 0,
        }
      ],
    },
  ],
};

export default contentConfig;
