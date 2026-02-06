import type { IModalConfig } from "@/components/CURD/types.ts";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:generation",
  component: "dialog",
  dialog: { title: "新增", width: 600 },
  form: { labelWidth: 100 },
  formAction: () => Promise.resolve(),
  formItems: [],
};

export default modalConfig;
