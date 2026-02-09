import type { IContentConfig } from "@/components/CURD/types";
import { ApikeyAPI } from "@/api/apikey";
import { EnableStatusEnum } from "@/enums";

const contentConfig: IContentConfig = {
  pageTitle: "API密钥管理",
  permPrefix: "admin:apikey",
  table: { border: true, highlightCurrentRow: true },
  pagination: {
    background: true,
    layout: "prev,pager,next,jumper,total,sizes",
    pageSize: 10,
    pageSizes: [10, 20, 50],
  },
  indexAction: (query) => ApikeyAPI.getApiKeyList(query),
  parseData: (res) => ({ total: res.data.total, list: res.data.list || [] }),
  modifyAction: (row, field, value) => {
    return ApikeyAPI.updateApiKey({ id: row.id, [field]: value });
  },
  deleteAction: (ids) => {
    const idList = ids.split(",");
    if (idList.length === 1) {
      return ApikeyAPI.deleteApiKey({ id: parseInt(idList[0]) });
    }
    return Promise.all(idList.map((id) => ApikeyAPI.deleteApiKey({ id: parseInt(id) }))).then(
      () => ({
        code: 0,
        message: "success",
      })
    );
  },
  pk: "id",
  toolbar: ["add", "delete"],
  defaultToolbar: ["refresh", "filter", "search"],
  cols: [
    { type: "selection", label: "批量操作", width: 50, align: "center" },
    { label: "ID", prop: "id", width: 80, align: "center" },
    { label: "服务商", prop: "provider_name", width: 120, align: "center" },
    { label: "名称", prop: "name", width: 150, align: "center" },
    {
      label: "API Key",
      prop: "api_key",
      width: 200,
      align: "center",
    },
    { label: "Profile", prop: "profile", width: 100, align: "center" },
    { label: "优先级", prop: "priority", width: 80, align: "center" },
    { label: "配额限制", prop: "quota_limit", width: 100, align: "center" },
    { label: "已用配额", prop: "quota_used", width: 100, align: "center" },
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
      label: "最后使用",
      prop: "last_used_at",
      width: 170,
      align: "center",
      templet: "date",
      dateFormat: "YYYY/MM/DD HH:mm:ss",
    },
    {
      label: "操作",
      align: "center",
      fixed: "right",
      width: 200,
      templet: "tool",
      operat: [
        {
          name: "edit",
          text: "编辑",
          perm: "edit",
          attrs: { icon: "edit", type: "primary" },
        },
        {
          name: "test",
          text: "测试",
          perm: "edit",
          attrs: { icon: "video-play", type: "success" },
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
