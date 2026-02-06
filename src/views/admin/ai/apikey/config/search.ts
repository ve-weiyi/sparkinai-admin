import type { ISearchConfig } from "@/components/CURD/types";
import { ProviderAPI } from "@/api/provider";

const searchConfig: ISearchConfig = {
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: {
        placeholder: "搜索名称/Key...",
        clearable: true,
        style: { width: "150px" },
      },
    },
    {
      type: "select",
      label: "服务商",
      prop: "provider_id",
      attrs: { placeholder: "选择服务商", clearable: true, style: { width: "150px" } },
      options: [],
      initFn: async (item) => {
        const res = await ProviderAPI.getProviderList({ page: 1, page_size: 100 });
        item.options = res.data.list.map((p) => ({ label: p.name, value: p.id }));
      },
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      attrs: { placeholder: "全部", clearable: true, style: { width: "100px" } },
      options: [
        { label: "启用", value: 1 },
        { label: "禁用", value: 2 },
      ],
    },
  ],
};

export default searchConfig;
