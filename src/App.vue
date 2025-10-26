<template>
  <div id="app">
    <AppHeader 
      :menu-items="menuItems" 
      :active-section="activeSection"
      @navigate="scrollToSection"
    />
    
    <main>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProductSection id="products" />
      <NewsSection id="news" />
      <ContactSection id="contacts" />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import ProductSection from '@/components/ProductSection.vue';
import NewsSection from '@/components/NewsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import type { MenuItem } from '@/types/navigation';

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Главная', href: '#home' },
  { id: 'about', label: 'О нас', href: '#about' },
  { id: 'products', label: 'Продукция', href: '#products' },
  { id: 'news', label: 'Новости', href: '#news' },
  { id: 'contacts', label: 'Контакты', href: '#contacts' }
];

const activeSection = ref('home');

const handleScroll = () => {
  const sections = menuItems.map(item => item.id);
  const scrollY = window.pageYOffset;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      const offsetBottom = offsetTop + element.offsetHeight;

      if (scrollY >= offsetTop && scrollY < offsetBottom) {
        activeSection.value = section;
        break;
      }
    }
  }
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

section {
  min-height: 100vh;
  padding: 100px 2rem 2rem;
}

#app {
  min-height: 100vh;
}
</style>