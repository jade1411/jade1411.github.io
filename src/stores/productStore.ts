import { defineStore } from 'pinia';
import type { Product, BeerType } from '@/types/product';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    activeFilter: 'all' as BeerType | 'all',
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    filteredProducts: (state) => {
      if (state.activeFilter === 'all') {
        return state.products;
      }
      return state.products.filter(p => p.type === state.activeFilter);
    },
    productsByType: (state) => (type: BeerType) => {
      return state.products.filter(p => p.type === type);
    }
  },

  actions: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const response = await fetch('/data/products.json');
        this.products = await response.json();
      } catch (error) {
        this.error = 'Ошибка загрузки продукции';
      } finally {
        this.isLoading = false;
      }
    },

    setFilter(filter: BeerType | 'all') {
      this.activeFilter = filter;
    }
  }
});