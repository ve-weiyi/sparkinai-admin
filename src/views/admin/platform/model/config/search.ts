import type { ISearchConfig } from "@/components/CURD/types";
import { ProviderAPI } from "@/api/provider";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:model",
  formItems: [
    {
      type: "input",
      label: "关键词",
      prop: "keyword",
      attrs: { placeholder: "模型名称/代码", clearable: true, style: { width: "150px" } },
    },
    {
      type: "select",
      label: "服务商",
      prop: "provider_id",
      attrs: { placeholder: "全部", clearable: true, style: { width: "150px" } },
      options: [],
      initFn: async (item) => {
        const res = await ProviderAPI.getProviderList({ page: 1, page_size: 100 });
        item.options = res.data.list.map((p) => ({ label: p.name, value: p.id }));
      },
    },
    {
      type: "select",
      label: "类型",
      prop: "model_type",
      options: [
        { label: "文本", value: "text" },
        { label: "图片", value: "image" },
        { label: "嵌入", value: "embedding" },
      ],
      attrs: { placeholder: "全部", clearable: true, style: { width: "100px" } },
    },
    {
      type: "select",
      label: "状态",
      prop: "status",
      options: [
        { label: "启用", value: 1 },
        { label: "禁用", value: 2 },
      ],
      attrs: { placeholder: "全部", clearable: true, style: { width: "100px" } },
    },
  ],
};

export default searchConfig;
