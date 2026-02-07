<template>
  <div class="dashboard-container">
    <el-card shadow="never" class="mb-5">
      <el-row class="h-80px">
        <el-col :span="18" :xs="24">
          <div class="flex items-center">
            <img
              v-if="userStore.userInfo.avatar"
              class="w-20 h-20 mr-5 rounded-full"
              :src="userStore.userInfo.avatar"
            />
            <div
              v-else
              class="w-20 h-20 mr-5 rounded-full text-white flex items-center justify-center text-3xl font-semibold"
              :style="{ backgroundColor: avatarBgColor }"
            >
              {{ avatarText }}
            </div>
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
            <div class="flex justify-between items-center">
              <span class="text-gray-500">总用户数</span>
              <el-tag type="danger" size="small">累计</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ totals.totalUsers }}</span>
            </div>
            <el-icon class="text-3xl text-blue-500"><User /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">新增用户数</span>
              <el-select v-model="newUsersRange" size="small" class="range-select">
                <el-option
                  v-for="option in rangeOptions"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ newUsers }}</span>
            </div>
            <el-icon class="text-3xl text-green-500"><UserFilled /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">总内容生成数</span>
              <el-tag type="success" size="small">累计</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ totals.totalGenerations }}</span>
            </div>
            <el-icon class="text-3xl text-teal-500"><DocumentCopy /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">新增内容数</span>
              <el-select v-model="newGenerationsRange" size="small" class="range-select">
                <el-option
                  v-for="option in rangeOptions"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ newGenerations }}</span>
            </div>
            <el-icon class="text-3xl text-orange-500"><DocumentAdd /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6" class="mt-4">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">收入</span>
              <el-select v-model="revenueRange" size="small" class="range-select">
                <el-option
                  v-for="option in rangeOptions"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ formatAmount(revenue) }}</span>
              <span class="text-xs text-gray-500 ml-1">元</span>
            </div>
            <el-icon class="text-3xl text-red-500"><Money /></el-icon>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="6" class="mt-4">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="text-gray-500">API消耗成本</span>
              <el-tag type="info" size="small">{{ rangeLabel(revenueRange) }}</el-tag>
            </div>
          </template>
          <div class="flex justify-between items-center mt-2">
            <div>
              <span class="text-2xl font-bold">{{ formatAmount(apiCost) }}</span>
              <span class="text-xs text-gray-500 ml-1">元</span>
            </div>
            <el-icon class="text-3xl text-yellow-500"><Coin /></el-icon>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from "vue";
import { useUserStore } from "@/store/modules/user";
import { StatsAPI } from "@/api/stats";
import type { GetDashboardStatsResp } from "@/api/types";

type RangeKey = "today" | "last_7d" | "last_30d";

const rangeOptions = [
  { label: "今日", value: "today", offset: 0 },
  { label: "近7天", value: "last_7d", offset: 6 },
  { label: "近30天", value: "last_30d", offset: 29 },
] as const;

const userStore = useUserStore();

const newUsersRange = ref<RangeKey>("today");
const newGenerationsRange = ref<RangeKey>("today");
const revenueRange = ref<RangeKey>("today");

const totals = reactive({
  totalUsers: 0,
  totalGenerations: 0,
});

const newUsers = ref(0);
const newGenerations = ref(0);
const revenue = ref(0);
const apiCost = ref(0);

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

const avatarText = computed(() => {
  const nickname = userStore.userInfo.nickname || userStore.userInfo.username || "";
  const trimmed = nickname.trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : "?";
});

const avatarBgColor = computed(() => {
  const palette = [
    "#2563eb",
    "#7c3aed",
    "#db2777",
    "#f97316",
    "#f59e0b",
    "#10b981",
    "#0ea5e9",
    "#6b7280",
    "#16a34a",
    "#dc2626",
  ];
  const text = avatarText.value;
  if (!text || text === "?") {
    return "#9ca3af";
  }
  const code = text.codePointAt(0) ?? 0;
  return palette[code % palette.length];
});

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const buildDateRange = (rangeKey: RangeKey) => {
  const today = new Date();
  const match = rangeOptions.find((option) => option.value === rangeKey);
  const offset = match ? match.offset : 0;
  const start = new Date(today);
  start.setDate(today.getDate() - offset);
  return {
    start_date: formatDate(start),
    end_date: formatDate(today),
  };
};

const rangeLabel = (rangeKey: RangeKey) => {
  const match = rangeOptions.find((option) => option.value === rangeKey);
  return match ? match.label : "今日";
};

const formatAmount = (value: number) => {
  if (Number.isNaN(value)) return "0.00";
  return value.toFixed(2);
};

const applyTotals = (data: GetDashboardStatsResp) => {
  totals.totalUsers = data.total_users;
  totals.totalGenerations = data.total_generations;
};

const fetchNewUsers = async () => {
  try {
    const res = await StatsAPI.getDashboardStats(buildDateRange(newUsersRange.value));
    applyTotals(res.data);
    newUsers.value = res.data.new_users;
  } catch (error) {
    console.error(error);
  }
};

const fetchNewGenerations = async () => {
  try {
    const res = await StatsAPI.getDashboardStats(buildDateRange(newGenerationsRange.value));
    applyTotals(res.data);
    newGenerations.value = res.data.new_generations;
  } catch (error) {
    console.error(error);
  }
};

const fetchRevenue = async () => {
  try {
    const res = await StatsAPI.getDashboardStats(buildDateRange(revenueRange.value));
    applyTotals(res.data);
    revenue.value = res.data.revenue;
    apiCost.value = res.data.api_cost;
  } catch (error) {
    console.error(error);
  }
};

watch(
  newUsersRange,
  () => {
    fetchNewUsers();
  },
  { immediate: true }
);

watch(
  newGenerationsRange,
  () => {
    fetchNewGenerations();
  },
  { immediate: true }
);

watch(
  revenueRange,
  () => {
    fetchRevenue();
  },
  { immediate: true }
);
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.range-select {
  width: 110px;
}
</style>
