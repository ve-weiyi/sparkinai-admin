import type { IContentConfig } from "@/components/CURD/types";
import { ModelAPI } from "@/api/model";
import { EnableStatusEnum, YesNoEnum } from "@/enums/common";
import { AI_MODEL_TYPE_SELECT_LIST } from "@/utils/option";

const contentConfig: IContentConfig = {
  pageTitle: "AI模型管理",
  permPrefix: "admin:model",
  table: { border: true, highlightCurrentRow: true },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 50],
  },
  indexAction: (query) => ModelAPI.getModelList(query),
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  modifyAction: (row, field, value) => {
    return ModelAPI.updateModel({ id: row.id, [field]: value });
  },
  deleteAction: (ids) => {
    const idList = ids.split(",");
    if (idList.length === 1) {
      return ModelAPI.deleteModel({ id: parseInt(idList[0]) });
    }
    return Promise.all(idList.map((id) => ModelAPI.deleteModel({ id: parseInt(id) }))).then(() => ({
      code: 0,
      message: "success",
    }));
  },
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "服务商", prop: "provider_name", width: 120, align: "center" },
    { label: "模型名称", prop: "name", width: 150, align: "center" },
    { label: "模型代码", prop: "code", width: 150, align: "center" },
    {
      label: "类型",
      prop: "model_type",
      width: 100,
      align: "center",
      templet: "list",
      selectList: AI_MODEL_TYPE_SELECT_LIST,
    },
    { label: "最大Token", prop: "max_tokens", width: 100, align: "center" },
    {
      label: "视觉支持",
      prop: "support_vision",
      width: 100,
      align: "center",
      templet: "switch",
      activeValue: YesNoEnum.YES,
      inactiveValue: YesNoEnum.NO,
      activeText: "是",
      inactiveText: "否",
    },
    { label: "排序", prop: "sort_order", width: 80, align: "center" },
    {
      label: "状态",
      prop: "status",
      width: 80,
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
      width: 120,
      templet: "tool",
      operat: [
        {
          name: "edit",
          text: "编辑",
          perm: "edit",
          attrs: { icon: "edit", type: "primary" },
        },
        {
          name: "delete",
          text: "删除",
          perm: "delete",
          attrs: { icon: "delete", type: "danger" },
        },
      ],
    },
  ],
};

export default contentConfig;
