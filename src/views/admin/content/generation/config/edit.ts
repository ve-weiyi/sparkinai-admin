import type { IModalConfig } from "@/components/CURD/types";

const modalConfig: IModalConfig<any> = {
  permPrefix: "admin:generation",
  component: "dialog",
  dialog: { title: "编辑", width: 600 },
  form: { labelWidth: 100 },
  formAction: () => Promise.resolve(),
  formItems: [],
};

export default modalConfig;
