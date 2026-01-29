import { defineMock } from "./base";

export default defineMock([
  // 获取用户列表
  {
    url: "/admin-api/v1/users",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: "1",
            phone: "13800138001",
            nickname: "User One",
            avatar: "https://example.com/avatar1.png",
            status: 1,
            free_usage: 10,
            token_balance: 1000,
            total_generations: 50,
            last_login_at: "2023-01-01 12:00:00",
            last_login_ip: "127.0.0.1",
            created_at: "2023-01-01 10:00:00",
          },
          {
            id: "2",
            phone: "13800138002",
            nickname: "User Two",
            avatar: "https://example.com/avatar2.png",
            status: 2,
            free_usage: 0,
            token_balance: 500,
            total_generations: 20,
            last_login_at: "2023-01-02 12:00:00",
            last_login_ip: "127.0.0.1",
            created_at: "2023-01-02 10:00:00",
          },
        ],
        total: 2,
        page: 1,
        page_size: 10,
      },
      msg: "success",
    },
  },
  // 获取用户详情
  {
    url: "/admin-api/v1/users/:id",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        id: "1",
        phone: "13800138001",
        nickname: "User One",
        avatar: "https://example.com/avatar1.png",
        status: 1,
        free_usage: 10,
        token_balance: 1000,
        total_generations: 50,
        last_login_at: "2023-01-01 12:00:00",
        last_login_ip: "127.0.0.1",
        created_at: "2023-01-01 10:00:00",
        updated_at: "2023-01-01 11:00:00",
      },
      msg: "success",
    },
  },
  // 创建用户
  {
    url: "/admin-api/v1/users",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        id: "3",
      },
      msg: "success",
    },
  },
  // 更新用户
  {
    url: "/admin-api/v1/users/:id",
    method: ["PUT"],
    body: {
      code: 200,
      data: {
        success: true,
        message: "Updated successfully",
      },
      msg: "success",
    },
  },
  // 用户充值
  {
    url: "/admin-api/v1/users/:id/recharge",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        success: true,
        token_balance: 2000,
      },
      msg: "success",
    },
  },
  // 重置用户密码
  {
    url: "/admin-api/v1/users/:id/reset-password",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        success: true,
        message: "Password reset successfully",
      },
      msg: "success",
    },
  },
  // 删除用户
  {
    url: "/admin-api/v1/users/:id",
    method: ["DELETE"],
    body: {
      code: 200,
      data: {
        success: true,
        message: "Deleted successfully",
      },
      msg: "success",
    },
  },
  // 批量删除用户
  {
    url: "/admin-api/v1/users/batch-delete",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        success_count: 2,
      },
      msg: "success",
    },
  },
  // ==========================================
  // 用户个人中心相关 Mock
  // ==========================================
  // 获取用户信息
  {
    url: "/admin-api/v1/user/get_user_info",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        user_id: "1",
        username: "admin",
        nickname: "系统管理员",
        avatar: "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=600&h=600&fit=crop",
        email: "admin@example.com",
        phone: "13800000000",
        gender: 1,
        intro: "Super Administrator",
        website: "https://example.com",
        created_at: 1672531200,
        register_type: "system",
        third_party: [],
        roles: ["root"],
        perms: ["*:*:*"],
      },
      msg: "success",
    },
  },
  // 获取用户菜单权限
  {
    url: "/admin-api/v1/user/get_user_menus",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            path: "/dashboard",
            component: "Layout",
            redirect: "/dashboard/index",
            meta: { title: "首页", icon: "homepage" },
            children: [
              {
                path: "index",
                name: "Dashboard",
                component: "dashboard/index",
                meta: { title: "首页", icon: "homepage", affix: true },
              },
            ],
          },
          {
            path: "/system",
            component: "Layout",
            meta: { title: "系统管理", icon: "system" },
            children: [
              {
                path: "user",
                name: "User",
                component: "admin/user/index",
                meta: { title: "用户管理", icon: "user" },
              },
              {
                path: "role",
                name: "Role",
                component: "admin/role/index",
                meta: { title: "角色管理", icon: "role" },
              },
              {
                path: "menu",
                name: "Menu",
                component: "admin/menu/index",
                meta: { title: "菜单管理", icon: "menu" },
              },
            ],
          },
        ],
      },
      msg: "success",
    },
  },
  // 获取用户角色
  {
    url: "/admin-api/v1/user/get_user_roles",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            role_key: "admin",
            role_label: "管理员",
            role_comment: "系统管理员",
          },
        ],
      },
      msg: "success",
    },
  },
  // 获取用户API权限
  {
    url: "/admin-api/v1/user/get_user_apis",
    method: ["GET"],
    body: {
      code: 200,
      data: {
        list: [],
      },
      msg: "success",
    },
  },
  // 查询用户登录历史
  {
    url: "/admin-api/v1/user/get_user_login_history_list",
    method: ["POST"],
    body: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
            login_ip: "127.0.0.1",
            login_location: "Local",
            browser: "Chrome",
            os: "macOS",
            status: 1,
            msg: "登录成功",
            login_time: "2023-01-01 12:00:00",
          },
        ],
        total: 1,
        page: 1,
        page_size: 10,
      },
      msg: "success",
    },
  },
  // 修改用户头像
  {
    url: "/admin-api/v1/user/update_user_avatar",
    method: ["PUT"],
    body: {
      code: 200,
      data: {},
      msg: "修改成功",
    },
  },
  // 修改用户信息
  {
    url: "/admin-api/v1/user/update_user_info",
    method: ["PUT"],
    body: {
      code: 200,
      data: {},
      msg: "修改成功",
    },
  },
  // 修改用户密码
  {
    url: "/admin-api/v1/user/update_user_password",
    method: ["PUT"],
    body: {
      code: 200,
      data: {},
      msg: "修改成功",
    },
  },
  // 修改用户绑定邮箱
  {
    url: "/admin-api/v1/user/update_user_bind_email",
    method: ["PUT"],
    body: {
      code: 200,
      data: {},
      msg: "绑定成功",
    },
  },
  // 修改用户绑定手机号
  {
    url: "/admin-api/v1/user/update_user_bind_phone",
    method: ["PUT"],
    body: {
      code: 200,
      data: {},
      msg: "绑定成功",
    },
  },
  // 修改用户绑定第三方平台账号
  {
    url: "/admin-api/v1/user/update_user_bind_third_party",
    method: ["PUT"],
    body: {
      code: 200,
      data: {},
      msg: "绑定成功",
    },
  },
  // 删除用户绑定第三方平台账号
  {
    url: "/admin-api/v1/user/delete_user_bind_third_party",
    method: ["POST"],
    body: {
      code: 200,
      data: {},
      msg: "解绑成功",
    },
  },
]);
