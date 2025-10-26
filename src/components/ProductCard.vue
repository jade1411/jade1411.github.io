<template>
  <div class="product-card" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="product-image">
<img :src="product.image" :alt="product.name">
      <div class="product-overlay" :class="{ active: isHovered }">
        <button class="details-btn" @click="$emit('show-details', product)">
          Подробнее
        </button>
      </div>
    </div>
    
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <div class="product-stats">
        <span class="abv">ABV: {{ product.abv }}%</span>
        <span class="ibu">IBU: {{ product.ibu }}</span>
      </div>
      <div class="tags">
        <span v-for="tag in product.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ДОБАВИТЬ ИМПОРТ ref
import { ref } from 'vue';
import type { Product } from '@/types/product';

interface Props {
  product: Product;
}

interface Emits {
  (e: 'show-details', product: Product): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

// ТЕПЕРЬ ref РАБОТАЕТ
const isHovered = ref(false);
</script>

<style scoped lang="scss">
.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
}

.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;

  &.active {
    opacity: 1;
  }
}

.details-btn {
  padding: 0.75rem 1.5rem;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
}

.product-info {
  padding: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    color: #333;
  }
}

.description {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.product-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #888;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666;
}
</style>