import type { ISearchConfig } from "@/components/CURD/types";

const searchConfig: ISearchConfig = {
  permPrefix: "admin:engine",
  formItems: [
    {
      type: "select",
      label: "配置类型",
      prop: "type",
      attrs: { placeholder: "请选择", clearable: true, style: { width: "150px" } },
      options: [
        { label: "文案生成", value: "text" },
        { label: "图片生成", value: "image" },
      ],
    },
  ],
};

export default searchConfig;
