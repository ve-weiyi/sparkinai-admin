/**
 * 通知中心逻辑
 */
import { ref, onMounted, onBeforeUnmount } from "vue";
import router from "@/router";
import { NotificationAPI } from "@/api/notification";
import type { InboxMessageItem } from "@/api/types";

export function useNotice() {
  const list = ref<InboxMessageItem[]>([]);
  const detail = ref<InboxMessageItem | null>(null);
  const dialogVisible = ref(false);

  async function fetchList() {
    const res = await NotificationAPI.getInboxMessageList({ only_unread: 1, page: 1, page_size: 10 });
    list.value = res.data?.list ?? [];
  }

  async function read(id: number) {
    const item = list.value.find((m) => m.id === id);
    if (item) {
      detail.value = item;
      dialogVisible.value = true;
    }
    await NotificationAPI.batchMarkInboxMessagesRead({ ids: [id] });
    list.value = list.value.filter((m) => m.id !== id);
  }

  async function readAll() {
    const ids = list.value.map((m) => m.id);
    if (ids.length === 0) return;
    await NotificationAPI.batchMarkInboxMessagesRead({ ids });
    list.value = [];
  }

  function goMore() {
    router.push({ name: "MyNotice" });
  }

  onMounted(() => {
    fetchList();
  });

  onBeforeUnmount(() => {
    return;
  });

  return {
    list,
    detail,
    dialogVisible,
    fetchList,
    read,
    readAll,
    goMore,
  };
}
