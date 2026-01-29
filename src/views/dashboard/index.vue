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
              <span class="text-xs ml-2 text-green-500">
                +{{ stats.new_users_today }} 今日
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
              <span class="text-gray-500">总生成次数</span>
              <el-tag type="success" size="small">累计</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.total_generations }}</span>
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
              <span class="text-gray-500">今日活跃用户</span>
              <el-tag type="warning" size="small">今日</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.active_users_today }}</span>
              <span class="text-xs text-gray-500 ml-2">今日活跃</span>
            </div>
            <el-icon class="text-3xl text-purple-500"><UserFilled /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">今日生成次数</span>
              <el-tag type="info" size="small">日</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.generations_today }}</span>
              <span class="text-xs text-gray-500 ml-2">今日生成</span>
            </div>
            <el-icon class="text-3xl text-orange-500"><DocumentAdd /></el-icon>
          </div>
        </el-card>
      </el-col>
      
      <el-col :xs="12" :sm="12" :md="8" :lg="6" class="mt-4">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">生成成功率</span>
              <el-tag type="success" size="small">整体</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ (stats.success_rate * 100).toFixed(1) }}%</span>
            </div>
            <el-icon class="text-3xl text-teal-500"><Check /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6" class="mt-4">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">今日消耗Token</span>
              <el-tag type="warning" size="small">今日</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.tokens_consumed_today }}</span>
            </div>
            <el-icon class="text-3xl text-yellow-500"><Coin /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6" class="mt-4">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">平均生成耗时</span>
              <el-tag type="info" size="small">平均</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ stats.avg_generation_time }}s</span>
            </div>
            <el-icon class="text-3xl text-gray-500"><Timer /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6" class="mt-4">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between">
              <span class="text-gray-500">总消耗Token</span>
              <el-tag type="danger" size="small">累计</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ (stats.total_tokens_consumed / 1000).toFixed(1) }}k</span>
            </div>
            <el-icon class="text-3xl text-red-500"><Money /></el-icon>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "@/store/modules/user";
import { StatsAPI, type DashboardStatsResp } from "@/api/stats";

const userStore = useUserStore();

const greetings = computed(() => {
  const hour = new Date().getHours();
  if (hour < 6) return "凌晨好！";
  if (hour < 9) return "早上好！";
  if (hour < 12) return "上午好！";
  if (hour < 14) return "中午好！";
  if (hour < 17) return "下午好！";
  if (hour < 19) return "傍晚好！";
  return "晚上好！";
});

const stats = ref<DashboardStatsResp>({
  total_users: 0,
  new_users_today: 0,
  active_users_today: 0,
  total_generations: 0,
  generations_today: 0,
  success_rate: 0,
  total_revenue: 0,
  revenue_today: 0,
  total_tokens_consumed: 0,
  tokens_consumed_today: 0,
  avg_generation_time: 0,
});

const fetchStats = async () => {
  try {
    const res = await StatsAPI.getDashboardStats();
    stats.value = res.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchStats();
});
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}
</style>
