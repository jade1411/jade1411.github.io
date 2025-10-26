<template>
  <div class="product-filter">
    <button
      v-for="filter in filterOptions"
      :key="filter.value"
      :class="{ active: activeFilter === filter.value }"
      @click="$emit('filter-change', filter.value)"
    >
      {{ filter.label }} ({{ filter.count }})
    </button>
  </div>
</template>

<script setup lang="ts">
// ИМПОРТ БЕЗ 'type' - потому что BeerType это enum (и значение и тип)
import { BeerType } from '@/types/product';
import type { FilterOption } from '@/types/product';

interface Props {
  activeFilter: BeerType | 'all';
}

interface Emits {
  (e: 'filter-change', filter: BeerType | 'all'): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const filterOptions: FilterOption[] = [
  { value: 'all', label: 'Все', count: 0 },
  { value: BeerType.IPA, label: 'IPA', count: 0 },
  { value: BeerType.STOUT, label: 'Stout', count: 0 },
  { value: BeerType.LAGER, label: 'Lager', count: 0 },
  { value: BeerType.ALE, label: 'Ale', count: 0 },
];
</script>

<style scoped lang="scss">
.product-filter {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  border: 2px solid #ff6b00;
  background: white;
  color: #ff6b00;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &.active {
    background: #ff6b00;
    color: white;
  }
}
</style>