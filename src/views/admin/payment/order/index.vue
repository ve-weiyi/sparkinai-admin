<template>
  <div class="app-container">
    <!-- 搜索栏 -->
    <el-card class="search-card" shadow="never">
      <el-form :inline="true" :model="queryParams">
        <el-form-item label="订单号">
          <el-input
            v-model="queryParams.order_no"
            placeholder="请输入订单号"
            clearable
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item label="用户ID">
          <el-input
            v-model="queryParams.user_id"
            placeholder="请输入用户ID"
            clearable
            style="width: 150px"
          />
        </el-form-item>
        <el-form-item label="支付渠道">
          <el-select
            v-model="queryParams.channel_code"
            placeholder="请选择支付渠道"
            clearable
            style="width: 150px"
          >
            <el-option label="全部" :value="null" />
            <el-option label="微信支付" value="wx_pub" />
            <el-option label="支付宝" value="alipay_pc" />
            <el-option label="余额支付" value="balance" />
          </el-select>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select
            v-model="queryParams.status"
            placeholder="请选择状态"
            clearable
            style="width: 150px"
          >
            <el-option label="全部" :value="null" />
            <el-option label="待支付" :value="1" />
            <el-option label="已支付" :value="2" />
            <el-option label="已取消" :value="3" />
            <el-option label="已退款" :value="4" />
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="dateRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="x"
            style="width: 360px"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">
            <el-icon><Search /></el-icon>
            查询
          </el-button>
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 表格 -->
    <el-card shadow="never">
      <el-table v-loading="loading" :data="orderList" border stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="order_no" label="订单号" min-width="180" />
        <el-table-column prop="user_nickname" label="用户昵称" min-width="120" />
        <el-table-column prop="package_name" label="套餐名称" min-width="120" />
        <el-table-column prop="package_credits" label="套餐积分" width="100" align="right" />
        <el-table-column prop="channel_code" label="支付渠道" width="120">
          <template #default="{ row }">
            <el-tag :type="getChannelTagType(row.channel_code)" size="small">
              {{ getChannelName(row.channel_code) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="pay_amount" label="订单金额" width="120" align="right">
          <template #default="{ row }">
            <span class="text-price">¥{{ (row.pay_amount / 100).toFixed(2) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status_text" label="订单状态" width="100" align="center">
          <template #default="{ row }">
            <el-tag :type="getStatusTagType(row.status)" size="small">
              {{ getStatusText(row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="channel_order_no"
          label="渠道订单号"
          min-width="180"
          show-overflow-tooltip
        />
        <el-table-column prop="pay_success_time" label="支付时间" width="160">
          <template #default="{ row }">
            {{ row.pay_success_time ? formatTime(row.pay_success_time) : "-" }}
          </template>
        </el-table-column>
        <el-table-column prop="created_at" label="创建时间" width="160">
          <template #default="{ row }">
            {{ formatTime(row.created_at) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120" fixed="right" align="center">
          <template #default="{ row }">
            <el-button link type="primary" size="small" @click="handleViewDetail(row)">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        v-model:current-page="queryParams.page"
        v-model:page-size="queryParams.page_size"
        :total="total"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleQuery"
        @current-change="handleQuery"
        class="mt-4"
      />
    </el-card>

    <!-- 订单详情对话框 -->
    <el-dialog v-model="detailVisible" title="订单详情" width="700px">
      <el-descriptions v-if="orderDetail" :column="2" border>
        <el-descriptions-item label="订单ID">{{ orderDetail.id }}</el-descriptions-item>
        <el-descriptions-item label="订单号">{{ orderDetail.order_no }}</el-descriptions-item>
        <el-descriptions-item label="用户ID">{{ orderDetail.user_id }}</el-descriptions-item>
        <el-descriptions-item label="用户昵称">
          {{ orderDetail.user_nickname }}
        </el-descriptions-item>
        <el-descriptions-item label="套餐ID">{{ orderDetail.package_id }}</el-descriptions-item>
        <el-descriptions-item label="套餐名称">{{ orderDetail.package_name }}</el-descriptions-item>
        <el-descriptions-item label="套餐积分">{{ orderDetail.package_credits }}</el-descriptions-item>
        <el-descriptions-item label="支付渠道">
          <el-tag :type="getChannelTagType(orderDetail.channel_code)" size="small">
            {{ getChannelName(orderDetail.channel_code) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="订单金额">
          <span class="text-price">¥{{ (orderDetail.pay_amount / 100).toFixed(2) }}</span>
        </el-descriptions-item>
        <el-descriptions-item label="订单状态">
          <el-tag :type="getStatusTagType(orderDetail.status)" size="small">
            {{ getStatusText(orderDetail.status) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="套餐特性" :span="2">
          <el-tag v-for="(feature, index) in orderDetail.features" :key="index" size="small" style="margin-right: 8px">
            {{ feature }}
          </el-tag>
          <span v-if="!orderDetail.features || orderDetail.features.length === 0">-</span>
        </el-descriptions-item>
        <el-descriptions-item label="渠道订单号" :span="2">
          {{ orderDetail.channel_order_no || "-" }}
        </el-descriptions-item>
        <el-descriptions-item label="客户端IP">
          {{ orderDetail.client_ip || "-" }}
        </el-descriptions-item>
        <el-descriptions-item label="过期时间">
          {{ orderDetail.expire_time ? formatTime(orderDetail.expire_time) : "-" }}
        </el-descriptions-item>
        <el-descriptions-item label="支付时间">
          {{ orderDetail.pay_success_time ? formatTime(orderDetail.pay_success_time) : "-" }}
        </el-descriptions-item>
        <el-descriptions-item label="创建时间">
          {{ formatTime(orderDetail.created_at) }}
        </el-descriptions-item>
        <el-descriptions-item label="更新时间">
          {{ formatTime(orderDetail.updated_at) }}
        </el-descriptions-item>
      </el-descriptions>
      <template #footer>
        <el-button @click="detailVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { Refresh, Search } from "@element-plus/icons-vue";
import type { GetPaymentOrderListReq, PaymentOrderDetail, PaymentOrderItem } from "@/api";
import { PaymentOrderAPI } from "@/api";
import { PaymentOrderStatus, PaymentOrderStatusText } from "@/enums";

// 查询参数
const queryParams = reactive<GetPaymentOrderListReq>({
  page: 1,
  page_size: 20,
  order_no: undefined,
  user_id: undefined,
  channel_code: undefined,
  status: undefined,
  start_time: undefined,
  end_time: undefined,
});

// 日期范围
const dateRange = ref<[number, number] | null>(null);

// 表格数据
const loading = ref(false);
const orderList = ref<PaymentOrderItem[]>([]);
const total = ref(0);

// 订单详情
const detailVisible = ref(false);
const orderDetail = ref<PaymentOrderDetail | null>(null);

// 获取列表
const getList = async () => {
  loading.value = true;
  try {
    // 处理日期范围
    if (dateRange.value && dateRange.value.length === 2) {
      queryParams.start_time = dateRange.value[0];
      queryParams.end_time = dateRange.value[1];
    } else {
      queryParams.start_time = undefined;
      queryParams.end_time = undefined;
    }

    const res = await PaymentOrderAPI.getPaymentOrderList(queryParams);
    orderList.value = res.data.list || [];
    total.value = res.data.total || 0;
  } catch (error) {
    ElMessage.error("获取订单列表失败");
  } finally {
    loading.value = false;
  }
};

// 查询
const handleQuery = () => {
  queryParams.page = 1;
  getList();
};

// 重置
const handleReset = () => {
  queryParams.page = 1;
  queryParams.page_size = 20;
  queryParams.order_no = undefined;
  queryParams.user_id = undefined;
  queryParams.channel_code = undefined;
  queryParams.status = undefined;
  queryParams.start_time = undefined;
  queryParams.end_time = undefined;
  dateRange.value = null;
  getList();
};

// 查看详情
const handleViewDetail = async (row: PaymentOrderItem) => {
  try {
    const res = await PaymentOrderAPI.getPaymentOrderDetail({ id: row.id });
    orderDetail.value = res.data;
    detailVisible.value = true;
  } catch (error) {
    ElMessage.error("获取订单详情失败");
  }
};

// 获取支付渠道名称
const getChannelName = (code: string): string => {
  const channelMap: Record<string, string> = {
    wx_pub: "微信支付",
    alipay_pc: "支付宝",
    balance: "余额支付",
  };
  return channelMap[code] || code;
};

// 获取支付渠道标签类型
const getChannelTagType = (code: string): "success" | "info" | "warning" | "primary" | "danger" => {
  const typeMap: Record<string, "success" | "info" | "warning" | "primary" | "danger"> = {
    wx_pub: "success",
    alipay_pc: "primary",
    balance: "warning",
  };
  return typeMap[code] || "info";
};

// 获取订单状态文本
const getStatusText = (status: number): string => {
  return PaymentOrderStatusText[status as PaymentOrderStatus] || '未知状态';
};

// 获取订单状态标签类型
const getStatusTagType = (
  status: number
): "success" | "info" | "warning" | "primary" | "danger" => {
  const typeMap: Record<number, "success" | "info" | "warning" | "primary" | "danger"> = {
    1: "warning", // 待支付
    2: "success", // 已支付
    3: "info", // 已取消
    4: "danger", // 已退款
  };
  return typeMap[status] || "info";
};

// 格式化时间
const formatTime = (timestamp: number): string => {
  if (!timestamp) return "-";
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// 初始化
onMounted(() => {
  getList();
});
</script>

<style scoped lang="scss">
.app-container {
  padding: 20px;
}

.search-card {
  margin-bottom: 16px;
}

.text-price {
  color: #f56c6c;
  font-weight: bold;
}

.mt-4 {
  margin-top: 16px;
}
</style>
