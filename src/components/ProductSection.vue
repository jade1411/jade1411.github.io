<template>
  <section id="products" class="products-section">
    <div class="container">
      <h2>Наша продукция</h2>
      
      <ProductFilter 
        :active-filter="store.activeFilter"
        @filter-change="store.setFilter"
      />
      
      <div v-if="store.isLoading" class="loading">Загрузка...</div>
      
      <div v-else class="products-grid">
        <ProductCard
          v-for="product in store.filteredProducts"
          :key="product.id"
          :product="product"
          @show-details="showProductDetails"
        />
      </div>
    </div>
    
    <ProductModal
      v-if="selectedProduct"
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';
import ProductFilter from './ProductFilter.vue';
import ProductCard from './ProductCard.vue';
import ProductModal from './ProductModal.vue';
import type { Product } from '@/types/product';

const store = useProductStore();
const selectedProduct = ref<Product | null>(null);

onMounted(() => {
  store.fetchProducts();
});

const showProductDetails = (product: Product) => {
  selectedProduct.value = product;
};
</script>

<style scoped lang="scss">
.products-section {
  background: #f8f8f8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}


.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}
</style>