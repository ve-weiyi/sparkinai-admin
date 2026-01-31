import type { IContentConfig } from "@/components/CURD/types";
import { ConfigAPI } from "@/api/config";

const contentConfig: IContentConfig = {
  pageTitle: "系统配置管理",
  pk: "id",
  cols: [
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "配置键", prop: "config_key", width: 200, align: "center" },
    { label: "配置值", prop: "config_value", minWidth: 200, align: "center", showOverflowTooltip: true },
    { label: "配置类型", prop: "config_type", width: 100, align: "center" },
    { label: "分类", prop: "category", width: 100, align: "center" },
    { label: "描述", prop: "description", width: 200, align: "center", showOverflowTooltip: true },
    {
      label: "公开",
      prop: "is_public",
      width: 80,
      align: "center",
      component: "switch",
      attrs: { activeValue: 1, inactiveValue: 0 }
    },
    {
      label: "加密",
      prop: "is_encrypted",
      width: 80,
      align: "center",
      templet: "custom",
      slotName: "is_encrypted"
    },
    {
      label: "创建时间",
      prop: "created_at",
      width: 180,
      align: "center",
    },
    {
      label: "操作",
      width: 150,
      align: "center",
      fixed: "right",
      templet: "tool",
      operat: [
        { name: "edit", text: "编辑", attrs: { type: "primary" } },
        { name: "delete", text: "删除", attrs: { type: "danger" } }
      ]
    }
  ],
  indexAction: function (params) {
    return ConfigAPI.getSystemConfigList(params);
  },
  modifyAction: (row, field, value) => {
    return ConfigAPI.updateSystemConfig({ id: row.id, [field]: value });
  },
  deleteAction: (ids) => {
    const idList = ids.split(",");
    if (idList.length === 1) {
      return ConfigAPI.deleteSystemConfig({ id: parseInt(idList[0]) });
    }
    return Promise.all(idList.map(id => ConfigAPI.deleteSystemConfig({ id: parseInt(id) }))).then(() => ({
      code: 0,
      message: "success"
    }));
  }
};

export default contentConfig;
