import { store } from "@/store";
import { AuthStorage } from "@/utils/auth";
import { usePermissionStoreHook } from "@/store/modules/permission";
import { useTagsViewStore } from "@/store";
import type {
  LoginResp,
  OauthLoginReq,
  PasswordLoginReq,
  PhoneCodeLoginReq,
  RefreshTokenReq,
} from "@/api/types";
import { AuthAPI } from "@/api/auth";
import { UserVO } from "@/api/types";
import { MeAPI } from "@/api/me";

export const useUserStore = defineStore("user", () => {
  const userInfo = ref<UserVO>({} as UserVO);
  const rememberMe = ref(AuthStorage.getRememberMe());

  function saveTokens(res: LoginResp) {
    AuthStorage.setTokens(res.user_id, res.token?.access_token, res.token?.refresh_token);
  }

  /** 密码登录（账号/手机号/邮箱） */
  function passwordLogin(loginData: PasswordLoginReq) {
    return new Promise<LoginResp>((resolve, reject) => {
      AuthAPI.passwordLogin(loginData)
        .then((res) => {
          saveTokens(res.data);
          resolve(res.data);
        })
        .catch(reject);
    });
  }

  /** 手机验证码登录 */
  function phoneCodeLogin(loginData: PhoneCodeLoginReq) {
    return new Promise<LoginResp>((resolve, reject) => {
      AuthAPI.phoneCodeLogin(loginData)
        .then((res) => {
          saveTokens(res.data);
          resolve(res.data);
        })
        .catch(reject);
    });
  }

  /** 第三方登录 */
  function oauthLogin(loginData: OauthLoginReq) {
    return new Promise<LoginResp>((resolve, reject) => {
      AuthAPI.oauthLogin(loginData)
        .then((res) => {
          saveTokens(res.data);
          resolve(res.data);
        })
        .catch(reject);
    });
  }

  /** 获取用户信息 */
  function getUserInfo() {
    return new Promise<UserVO>((resolve, reject) => {
      MeAPI.getUserProfile()
        .then((res) => {
          if (!res) {
            reject("Verification failed, please Login again.");
            return;
          }
          Object.assign(userInfo.value, { ...res.data });
          resolve(res.data);
        })
        .catch(reject);
    });
  }

  /** 登出 */
  function logout() {
    return new Promise<void>((resolve, reject) => {
      AuthAPI.logout()
        .then(() => {
          // 重置所有系统状态
          resetAllState();
          resolve();
        })
        .catch(reject);
    });
  }

  /**
   * 重置所有系统状态
   * 统一处理所有清理工作，包括用户凭证、路由、缓存等
   */
  function resetAllState() {
    resetUserState();
    // 重置路由
    usePermissionStoreHook().resetRouter();
    // 清除标签视图
    useTagsViewStore().delAllViews();
    return Promise.resolve();
  }

  /**
   * 重置用户状态
   * 仅处理用户模块内的状态
   */
  function resetUserState() {
    // 清除用户凭证
    AuthStorage.clearAuth();
    // 重置用户信息
    userInfo.value = {} as any;
  }

  /** 刷新 token */
  function refreshToken(refreshData: RefreshTokenReq) {
    if (!refreshData.refresh_token) {
      return Promise.reject(new Error("没有有效的刷新令牌"));
    }
    return new Promise<LoginResp>((resolve, reject) => {
      AuthAPI.refreshToken(refreshData)
        .then((res) => {
          // 更新令牌，保持当前记住我状态
          saveTokens(res.data);
          resolve(res.data);
        })
        .catch((error) => {
          console.log(" refreshToken  刷新失败", error);
          reject(error);
        });
    });
  }

  return {
    userInfo,
    rememberMe,
    isLoggedIn: () => !!AuthStorage.getAccessToken(),
    getUserInfo,
    passwordLogin,
    phoneCodeLogin,
    oauthLogin,
    logout,
    resetAllState,
    resetUserState,
    refreshToken,
  };
});

/**
 * 在组件外部使用UserStore的钩子函数
 * @see https://pinia.vuejs.org/core-concepts/outside-component-usage.html
 */
export function useUserStoreHook() {
  return useUserStore(store);
}
