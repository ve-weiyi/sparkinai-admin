<template>
  <div class="dashboard-container">
    <el-card shadow="never" class="mb-5">
      <el-row class="h-80px">
        <el-col :span="18" :xs="24">
          <div class="flex items-center">
            <img class="w-20 h-20 mr-5 rounded-full" :src="userStore.userInfo.avatar || 'https://via.placeholder.com/80'" />
            <div>
              <p class="text-lg font-bold">{{ greetings }}</p>
              <p class="text-sm text-gray-500">欢迎使用sparkinai内容生成平台</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-row :gutter="10" class="mt-5">
      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">总用户数</span>
              <el-tag type="danger" size="small">实时</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.total_users }}</span>
              <span class="text-xs ml-2" :class="stats.total_users_change < 0 ? 'text-red-500' : 'text-green-500'">
                {{ stats.total_users_change > 0 ? '+' : '' }}{{ stats.total_users_change }}
              </span>
            </div>
            <el-icon class="text-3xl text-blue-500"><User /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">总内容生产数</span>
              <el-tag type="success" size="small">累计</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.total_content }}</span>
              <span class="text-xs text-gray-500 ml-2">累计生成</span>
            </div>
            <el-icon class="text-3xl text-green-500"><DocumentCopy /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">新增用户数</span>
              <el-tag type="warning" size="small">今日</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.new_users_today }}</span>
              <span class="text-xs text-gray-500 ml-2">今日新增</span>
            </div>
            <el-icon class="text-3xl text-purple-500"><UserFilled /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">今日内容生产</span>
              <el-tag type="info" size="small">日</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.content_today }}</span>
              <span class="text-xs text-gray-500 ml-2">无变化</span>
            </div>
            <el-icon class="text-3xl text-orange-500"><DocumentAdd /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">消耗次数情况</span>
              <el-tag type="info" size="small">累计</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.total_consume }}</span>
              <span class="text-xs text-gray-500 ml-2">累计消耗次数</span>
            </div>
            <el-icon class="text-3xl text-red-500"><Delete /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">今日收入</span>
              <el-tag type="success" size="small">日</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">¥{{ (stats.today_income / 100).toFixed(2) }}</span>
              <span class="text-xs text-gray-500 ml-2">待接入计算</span>
            </div>
            <el-icon class="text-3xl text-yellow-500"><Money /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">API消耗成本</span>
              <el-tag type="danger" size="small">日</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">¥{{ (stats.today_cost / 100).toFixed(2) }}</span>
              <span class="text-xs text-gray-500 ml-2">待接入计算</span>
            </div>
            <el-icon class="text-3xl text-cyan-500"><CreditCard /></el-icon>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { User, DocumentCopy, UserFilled, DocumentAdd, Delete, Money, CreditCard } from "@element-plus/icons-vue";
import { DashboardAPI, type DashboardStats } from "@/api/dashboard";
import { useUserStore } from "@/store";

defineOptions({ name: "Dashboard" });

const userStore = useUserStore();

const stats = ref<DashboardStats>({
  total_users: 0,
  total_users_change: 0,
  total_content: 0,
  new_users_today: 0,
  content_today: 0,
  total_consume: 0,
  today_income: 0,
  today_cost: 0,
});

const greetings = computed(() => {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 8) return "晨起披衣出草堂，轩窗已自喜微凉🌅";
  if (hours >= 8 && hours < 12) return `上午好，${userStore.userInfo.nickname}！`;
  if (hours >= 12 && hours < 18) return `下午好，${userStore.userInfo.nickname}！`;
  if (hours >= 18 && hours < 24) return `晚上好，${userStore.userInfo.nickname}！`;
  return "偷偷向银河要了一把碎星，只等你闭上眼睛撒入你的梦中，晚安🌛";
});

const loadStats = async () => {
  try {
    const res = await DashboardAPI.getStatsApi();
    stats.value = res.data;
  } catch {
    ElMessage.error("加载统计数据失败");
  }
};

onMounted(() => loadStats());
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 24px;
  background: var(--el-bg-color-page);
}
</style>
