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

    <!-- 数据统计 -->
    <el-row :gutter="10" class="mt-5">
      <!-- 新增用户 -->
      <el-col :xs="12" :sm="12" :md="6">
        <el-card shadow="never" :loading="statsLoading" class="h-full">
          <template #header>
            <div class="flex-x-between">
              <span class="text-gray">新增用户</span>
              <el-tag type="success" size="small">日</el-tag>
            </div>
          </template>

          <div class="flex-x-between mt-2">
            <div class="flex-y-center">
              <span class="text-lg">{{ statsData.today_new_users }}</span>
            </div>
            <div class="i-svg:user w-8 h-8" />
          </div>

          <div class="flex-x-between mt-2 text-sm text-gray">
            <span>总用户数</span>
            <span>{{ statsData.total_users }}</span>
          </div>
        </el-card>
      </el-col>

      <!-- 生成次数 -->
      <el-col :xs="12" :sm="12" :md="6">
        <el-card shadow="never" :loading="statsLoading" class="h-full">
          <template #header>
            <div class="flex-x-between">
              <span class="text-gray">生成次数</span>
              <el-tag type="primary" size="small">日</el-tag>
            </div>
          </template>

          <div class="flex-x-between mt-2">
            <div class="flex-y-center">
              <span class="text-lg">{{ statsData.today_generations }}</span>
            </div>
            <div class="i-svg:article w-8 h-8" />
          </div>

          <div class="flex-x-between mt-2 text-sm text-gray">
            <span>总生成次数</span>
            <span>{{ statsData.total_generations }}</span>
          </div>
        </el-card>
      </el-col>

      <!-- Token消耗 -->
      <el-col :xs="12" :sm="12" :md="6">
        <el-card shadow="never" :loading="statsLoading" class="h-full">
          <template #header>
            <div class="flex-x-between">
              <span class="text-gray">Token消耗</span>
              <el-tag type="warning" size="small">日</el-tag>
            </div>
          </template>

          <div class="flex-x-between mt-2">
            <div class="flex-y-center">
              <span class="text-lg">{{ formatNumber(statsData.today_tokens) }}</span>
            </div>
            <div class="i-svg:browser w-8 h-8" />
          </div>

          <div class="flex-x-between mt-2 text-sm text-gray">
            <span>总Token消耗</span>
            <span>{{ formatNumber(statsData.total_tokens) }}</span>
          </div>
        </el-card>
      </el-col>

      <!-- 今日收入 -->
      <el-col :xs="12" :sm="12" :md="6">
        <el-card shadow="never" :loading="statsLoading" class="h-full">
          <template #header>
            <div class="flex-x-between">
              <span class="text-gray">今日收入</span>
              <el-tag type="danger" size="small">日</el-tag>
            </div>
          </template>

          <div class="flex-x-between mt-2">
            <div class="flex-y-center">
              <span class="text-lg">¥{{ formatAmount(statsData.today_revenue) }}</span>
            </div>
            <div class="i-svg:message w-8 h-8" />
          </div>

          <div class="flex-x-between mt-2 text-sm text-gray">
            <span>总收入</span>
            <span>¥{{ formatAmount(statsData.total_revenue) }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 趋势图 -->
    <el-row :gutter="10" class="mt-5">
      <el-col :xs="24">
        <el-card>
          <template #header>
            <div class="flex-x-between">
              <div class="title">数据趋势✨</div>
              <el-radio-group v-model="trendDateRange" size="small">
                <el-radio-button :value="7">近7天</el-radio-button>
                <el-radio-button :value="30">近30天</el-radio-button>
              </el-radio-group>
            </div>
          </template>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12">
              <el-card shadow="never">
                <template #header>
                  <div class="chart-title">新增用户趋势</div>
                </template>
                <ECharts :options="newUsersChartOptions" height="200px" />
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="12">
              <el-card shadow="never">
                <template #header>
                  <div class="chart-title">活跃用户趋势</div>
                </template>
                <ECharts :options="activeUsersChartOptions" height="200px" />
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="12">
              <el-card shadow="never">
                <template #header>
                  <div class="chart-title">生成次数趋势</div>
                </template>
                <ECharts :options="generationsChartOptions" height="200px" />
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="12">
              <el-card shadow="never">
                <template #header>
                  <div class="chart-title">收入趋势</div>
                </template>
                <ECharts :options="revenueChartOptions" height="200px" />
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <!-- 统计图表 -->
    <el-row :gutter="10" class="mt-5">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card shadow="never">
          <div class="title">用户活跃度排行🚀</div>
          <ECharts :options="userRankingOptions" height="350px" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card shadow="never">
          <template #header>
            <div class="flex-x-between">
              <div class="title">AI使用统计🍉</div>
              <el-radio-group v-model="aiStatsType" size="small">
                <el-radio-button value="models">模型</el-radio-button>
                <el-radio-button value="providers">供应商</el-radio-button>
                <el-radio-button value="engines">引擎</el-radio-button>
                <el-radio-button value="apikeys">API密钥</el-radio-button>
              </el-radio-group>
            </div>
          </template>
          <ECharts :options="aiUsageOptions" height="350px" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useUserStore } from "@/store/modules/user";
import { StatsAPI } from "@/api/stats";
import type {
  GetDashboardStatsResp,
  StatsTrendItem,
  UserActivityRankingItem,
  ModelUsageStatsItem,
  ProviderUsageStatsItem,
  EngineUsageStatsItem,
  ApiKeyUsageStatsItem,
  GetAiUsageStatsResp,
} from "@/api/types";
import ECharts from "@/components/ECharts/index.vue";
import type { EChartsOption } from "echarts";

const userStore = useUserStore();

const statsLoading = ref(false);
const statsData = ref<GetDashboardStatsResp>({
  total_users: 0,
  today_new_users: 0,
  total_generations: 0,
  today_generations: 0,
  total_tokens: 0,
  today_tokens: 0,
  total_revenue: 0,
  today_revenue: 0,
});

const trendData = ref<StatsTrendItem[]>([]);
const trendDateRange = ref(7);
const userRankingData = ref<UserActivityRankingItem[]>([]);
const aiStatsType = ref<"models" | "providers" | "engines" | "apikeys">("models");
const aiStatsData = ref<GetAiUsageStatsResp>({
  models: [],
  providers: [],
  engines: [],
  apikeys: [],
});

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

const formatAmount = (value: number) => {
  if (Number.isNaN(value)) return "0.00";
  return value.toFixed(2);
};

const formatNumber = (value: number) => {
  if (Number.isNaN(value)) return "0";
  return value.toLocaleString();
};

const createChartOptions = (
  name: string,
  data: number[],
  color: string,
  unit: string = ""
): EChartsOption => {
  const dates = trendData.value.map((item) => item.date);
  return {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "1%",
      right: "5%",
      top: "5%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: dates,
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name,
        type: "line",
        data,
        areaStyle: {
          color: color + "1A",
        },
        smooth: true,
        itemStyle: {
          color,
        },
        lineStyle: {
          color,
        },
      },
    ],
  };
};

const newUsersChartOptions = computed(() =>
  createChartOptions(
    "新增用户",
    trendData.value.map((item) => item.new_users),
    "#67C23A",
    "人"
  )
);

const activeUsersChartOptions = computed(() =>
  createChartOptions(
    "活跃用户",
    trendData.value.map((item) => item.active_users),
    "#409EFF",
    "人"
  )
);

const generationsChartOptions = computed(() =>
  createChartOptions(
    "生成次数",
    trendData.value.map((item) => item.daily_generations),
    "#E6A23C",
    "次"
  )
);

const revenueChartOptions = computed(() =>
  createChartOptions(
    "收入",
    trendData.value.map((item) => item.daily_revenue),
    "#F56C6C",
    "¥"
  )
);

const userRankingOptions = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  color: ["#58AFFF"],
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "10%",
    containLabel: true,
  },
  xAxis: {
    data: userRankingData.value.map((item) => item.nickname),
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: "value",
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: "生成次数",
      type: "bar",
      data: userRankingData.value.map((item) => item.generation_count),
    },
  ],
}));

const aiUsageOptions = computed<EChartsOption>(() => {
  let data: { name: string; value: number }[] = [];
  let seriesName = "";

  switch (aiStatsType.value) {
    case "models":
      data = (aiStatsData.value.models || []).map((item) => ({
        name: item.model_name,
        value: item.usage_count,
      }));
      seriesName = "模型使用统计";
      break;
    case "providers":
      data = (aiStatsData.value.providers || []).map((item) => ({
        name: item.provider_name,
        value: item.total_calls,
      }));
      seriesName = "供应商调用统计";
      break;
    case "engines":
      data = (aiStatsData.value.engines || []).map((item) => ({
        name: item.engine_name,
        value: item.total_generations,
      }));
      seriesName = "引擎生成统计";
      break;
    case "apikeys":
      data = (aiStatsData.value.apikeys || []).map((item) => ({
        name: item.apikey_name,
        value: item.total_calls,
      }));
      seriesName = "API密钥调用统计";
      break;
  }

  return {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      top: "bottom",
      data: data.map((item) => item.name),
    },
    series: [
      {
        name: seriesName,
        type: "pie",
        radius: [15, 95],
        center: ["50%", "38%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 6,
        },
        label: {
          show: true,
        },
        data,
      },
    ],
  };
});

const fetchDashboardStats = async () => {
  statsLoading.value = true;
  try {
    const res = await StatsAPI.getDashboardStats();
    if (res.data) {
      statsData.value = res.data;
    }
  } catch (error) {
    console.error("获取仪表盘统计数据失败:", error);
  } finally {
    statsLoading.value = false;
  }
};

const fetchDashboardTrend = async () => {
  try {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - trendDateRange.value);

    const res = await StatsAPI.getDashboardTrend({
      start_date: startDate.toISOString().split("T")[0],
      end_date: today.toISOString().split("T")[0],
    });
    if (res.data?.list) {
      trendData.value = res.data.list;
    }
  } catch (error) {
    console.error("获取趋势数据失败:", error);
  }
};

const fetchUserRanking = async () => {
  try {
    const res = await StatsAPI.getUserActivityRanking({ limit: 10 });
    if (res.data?.list) {
      userRankingData.value = res.data.list;
    }
  } catch (error) {
    console.error("获取用户排行失败:", error);
  }
};

const fetchAiUsage = async () => {
  try {
    const res = await StatsAPI.getAiUsageStats();
    if (res.data) {
      aiStatsData.value = res.data;
    }
  } catch (error) {
    console.error("获取AI使用统计失败:", error);
  }
};

watch(trendDateRange, () => {
  fetchDashboardTrend();
});

onMounted(() => {
  fetchDashboardStats();
  fetchDashboardTrend();
  fetchUserRanking();
  fetchAiUsage();
});
</script>

<style lang="scss" scoped>
.dashboard-container {
  position: relative;
  padding: 24px;

  .github-corner {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    border: 0;
  }

  .version-item {
    padding: 16px;
    margin-bottom: 12px;
    background: var(--el-fill-color-lighter);
    border-radius: 8px;
    transition: all 0.2s;

    &.latest-item {
      background: var(--el-color-primary-light-9);
      border: 1px solid var(--el-color-primary-light-5);
    }

    &:hover {
      transform: translateX(5px);
    }

    .version-content {
      margin-bottom: 12px;
      font-size: 13px;
      line-height: 1.5;
      color: var(--el-text-color-secondary);
    }
  }
}

.title {
  font-size: 14px;
  font-weight: 700;
  color: var(--el-text-color-secondary);
}

.chart-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--el-text-color-regular);
}
</style>
