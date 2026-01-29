import { store } from "@/store";
import { UserAPI } from "@/api/user";
import { ProviderAPI } from "@/api/provider";
import { ModelAPI } from "@/api/model";
import { EngineAPI } from "@/api/engine";
import { SystemConfigAPI } from "@/api/system";
import { ApiKeyAPI } from "@/api/apikey";

export const useAdminStore = defineStore("admin", () => {
  // 用户列表
  const users = ref<any[]>([]);
  const usersLoading = ref(false);

  // 服务商列表
  const providers = ref<any[]>([]);
  const providersLoading = ref(false);

  // 模型列表
  const models = ref<any[]>([]);
  const modelsLoading = ref(false);

  // API密钥列表
  const apikeys = ref<any[]>([]);
  const apikeysLoading = ref(false);

  // 引擎配置列表
  const engineConfigs = ref<any[]>([]);
  const engineConfigsLoading = ref(false);

  // 系统配置列表
  const systemConfigs = ref<any[]>([]);
  const systemConfigsLoading = ref(false);

  /**
   * 获取用户列表
   */
  async function fetchUsers(query?: any) {
    usersLoading.value = true;
    try {
      const res = await UserAPI.getUserList(query);
      users.value = res.data.list || [];
      return res.data;
    } finally {
      usersLoading.value = false;
    }
  }

  /**
   * 用户充值
   */
  async function rechargeUser(userId: string, amount: number, description?: string) {
    return UserAPI.rechargeUser({
      id: userId,
      token_amount: amount,
      description,
    });
  }

  /**
   * 删除用户
   */
  async function deleteUsers(ids: string[]) {
    return UserAPI.batchDeleteUsers({ ids });
  }

  /**
   * 获取服务商列表
   */
  async function fetchProviders(query?: any) {
    providersLoading.value = true;
    try {
      const res = await ProviderAPI.getProviderList(query);
      providers.value = res.data.list || [];
      return res.data;
    } finally {
      providersLoading.value = false;
    }
  }

  /**
   * 获取模型列表
   */
  async function fetchModels(query?: any) {
    modelsLoading.value = true;
    try {
      const res = await ModelAPI.getModelList(query);
      models.value = res.data.list || [];
      return res.data;
    } finally {
      modelsLoading.value = false;
    }
  }

  /**
   * 获取API密钥列表
   */
  async function fetchApikeys(query?: any) {
    apikeysLoading.value = true;
    try {
      const res = await ApiKeyAPI.getApiKeyList(query);
      apikeys.value = res.data.list || [];
      return res.data;
    } finally {
      apikeysLoading.value = false;
    }
  }

  /**
   * 获取引擎配置列表
   */
  async function fetchEngineConfigs(query?: any) {
    engineConfigsLoading.value = true;
    try {
      const res = await EngineAPI.getEngineConfigList(query);
      engineConfigs.value = res.data.list || [];
      return res.data;
    } finally {
      engineConfigsLoading.value = false;
    }
  }

  /**
   * 获取系统配置列表
   */
  async function fetchSystemConfigs(query?: any) {
    systemConfigsLoading.value = true;
    try {
      const res = await SystemConfigAPI.getSystemConfigList(query);
      systemConfigs.value = res.data.list || [];
      return res.data;
    } finally {
      systemConfigsLoading.value = false;
    }
  }

  return {
    users,
    usersLoading,
    providers,
    providersLoading,
    models,
    modelsLoading,
    apikeys,
    apikeysLoading,
    engineConfigs,
    engineConfigsLoading,
    systemConfigs,
    systemConfigsLoading,
    fetchUsers,
    rechargeUser,
    deleteUsers,
    fetchProviders,
    fetchModels,
    fetchApikeys,
    fetchEngineConfigs,
    fetchSystemConfigs,
  };
});

/**
 * 在组件外部使用AdminStore的钩子函数
 */
export function useAdminStoreHook() {
  return useAdminStore(store);
}
