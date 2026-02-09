import { ref } from "vue";
import { ModelAPI } from "@/api/model";

const modelOptions = ref<Array<{ label: string; value: number }>>([]);
let loading = false;
let loadPromise: Promise<void> | null = null;

export function useModel() {
  const loadModelOptions = async () => {
    if (modelOptions.value.length > 0) {
      return modelOptions.value;
    }

    if (loadPromise) {
      await loadPromise;
      return modelOptions.value;
    }

    loading = true;
    loadPromise = ModelAPI.getModelList({ page: 1, page_size: 100, status: 1 })
      .then((res) => {
        modelOptions.value = res.data.list.map((m) => ({
          label: `${m.provider_name} - ${m.name}`,
          value: m.id,
        }));
      })
      .finally(() => {
        loading = false;
        loadPromise = null;
      });

    await loadPromise;
    return modelOptions.value;
  };

  return {
    modelOptions,
    loadModelOptions,
  };
}
