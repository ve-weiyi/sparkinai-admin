import { ref } from "vue";
import { ProviderAPI } from "@/api/provider";

const providerOptions = ref<Array<{ label: string; value: number }>>([]);
let loading = false;
let loadPromise: Promise<void> | null = null;

export function useProvider() {
  const loadProviderOptions = async () => {
    if (providerOptions.value.length > 0) {
      return providerOptions.value;
    }

    if (loadPromise) {
      await loadPromise;
      return providerOptions.value;
    }

    loading = true;
    loadPromise = ProviderAPI.getProviderList({
      page: 1,
      page_size: 100,
      status: 1,
    })
      .then((res) => {
        providerOptions.value = res.data.list.map((p) => ({ label: p.name, value: p.id }));
      })
      .finally(() => {
        loading = false;
        loadPromise = null;
      });

    await loadPromise;
    return providerOptions.value;
  };

  return {
    providerOptions,
    loadProviderOptions,
  };
}
