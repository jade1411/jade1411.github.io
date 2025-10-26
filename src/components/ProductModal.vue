<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">×</button>
      
      <div class="modal-body">
        <div class="product-gallery">
          <img :src="currentImage" :alt="product.name" class="main-image">
          <div class="gallery-thumbnails">
            <img
              v-for="(img, index) in [product.image, ...product.gallery]"
              :key="index"
              :src="img"
              :alt="`${product.name} ${index + 1}`"
              :class="{ active: currentImageIndex === index }"
              @click="currentImageIndex = index"
            >
          </div>
        </div>
        
        <div class="product-details">
          <h2>{{ product.name }}</h2>
          <div class="product-type">
            <span class="type-badge">{{ getTypeLabel(product.type) }}</span>
          </div>
          
          <p class="full-description">{{ product.fullDescription }}</p>
          
          <div class="product-specs">
            <div class="spec">
              <span class="spec-label">Крепость:</span>
              <span class="spec-value">{{ product.abv }}%</span>
            </div>
            <div class="spec">
              <span class="spec-label">Горечь:</span>
              <span class="spec-value">{{ product.ibu }} IBU</span>
            </div>
            <div class="spec">
              <span class="spec-label">Доступность:</span>
              <span class="spec-value available" v-if="product.available">В наличии</span>
              <span class="spec-value unavailable" v-else>Нет в наличии</span>
            </div>
          </div>
          
          <div class="tags">
            <span v-for="tag in product.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ДОБАВЛЯЕМ ИМПОРТ ref
import { ref, computed } from 'vue';
// BeerType импортируем БЕЗ type - потому что это enum (значение)
import { BeerType } from '@/types/product';
import type { Product } from '@/types/product';

interface Props {
  product: Product;
}

interface Emits {
  (e: 'close'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// ТЕПЕРЬ ref РАБОТАЕТ
const currentImageIndex = ref(0);

const currentImage = computed(() => {
  const allImages = [props.product.image, ...props.product.gallery];
  return allImages[currentImageIndex.value];
});

// Функция для получения читаемого названия типа пива
const getTypeLabel = (type: BeerType): string => {
  const typeLabels = {
    [BeerType.IPA]: 'IPA',
    [BeerType.STOUT]: 'Stout',
    [BeerType.LAGER]: 'Lager',
    [BeerType.ALE]: 'Ale',
  };
  return typeLabels[type] || type;
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: 15px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  z-index: 10;
  
  &:hover {
    color: #333;
  }
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
}

.product-gallery {
  .main-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
}

.gallery-thumbnails {
  display: flex;
  gap: 0.5rem;
  
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
    
    &:hover,
    &.active {
      opacity: 1;
      border: 2px solid #ff6b00;
    }
  }
}

.product-details {
  h2 {
    margin-bottom: 0.5rem;
    color: #333;
  }
}

.product-type {
  margin-bottom: 1rem;
}

.type-badge {
  background: #ff6b00;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.full-description {
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
}

.product-specs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.spec {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.spec-label {
  font-weight: 500;
  color: #333;
}

.spec-value {
  color: #666;
  
  &.available {
    color: #28a745;
    font-weight: 500;
  }
  
  &.unavailable {
    color: #dc3545;
    font-weight: 500;
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f8f9fa;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666;
  border: 1px solid #e9ecef;
}

@media (max-width: 768px) {
  .modal-body {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  
  .modal-overlay {
    padding: 1rem;
  }
  
  .product-gallery .main-image {
    height: 200px;
  }
}
</style>