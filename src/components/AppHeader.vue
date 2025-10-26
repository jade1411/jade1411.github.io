<template>
  <header class="header">
    <div class="logo">
      BETTYJOYBREW
    </div>
    
    <nav class="navigation" :class="{ open: isMobileMenuOpen }">
      <a 
        v-for="item in menuItems" 
        :key="item.id" 
        :href="item.href"
        :class="{ active: activeSection === item.id }"
        @click.prevent="handleClick(item.id)"
      >
        {{ item.label }}
      </a>
    </nav>
    
    <button class="mobile-menu-btn" @click="toggleMobileMenu">
      ☰
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { MenuItem } from '@/types/navigation';

interface Props {
  menuItems: MenuItem[];
  activeSection: string;
}

interface Emits {
  (e: 'navigate', section: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isMobileMenuOpen = ref(false);

const handleClick = (section: string) => {
  emit('navigate', section);
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6b00;
}

.navigation {
  display: flex;
  
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;

    &:hover,
    &.active {
      color: #ff6b00;
    }
  }
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }
  
  .navigation {
    display: none;
    
    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      padding: 1rem;
      
      a {
        margin: 0.5rem 0;
      }
    }
  }
}
</style>