import type {IModalConfig} from "@/components/CURD/types";
import {SystemConfigAPI} from "@/api/admin";

const modalConfig: IModalConfig = {
  permPrefix: "admin:system",
  dialog: {title: "编辑配置", width: 500, draggable: true},
  form: {labelWidth: 100},
  formAction: (data) => SystemConfigAPI.updateSystemConfigApi(data),
  formItems: [
    {label: "配置键", prop: "key", type: "input", attrs: {disabled: true}},
    {label: "配置值", prop: "value", type: "input", attrs: {type: "textarea", rows: 4}},
    {label: "描述", prop: "description", type: "input", attrs: {type: "textarea", rows: 2}},
  ],
};

export default modalConfig;
