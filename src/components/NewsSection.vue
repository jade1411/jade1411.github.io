<template>
  <section id="news" class="news">
    <div class="container">
      <h2>Новости и акции</h2>
      <div class="news-grid">
        <NewsCard
          v-for="newsItem in news"
          :key="newsItem.id"
          :news-item="newsItem"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NewsCard from './NewsCard.vue';
import type { NewsItem } from '@/types/news';

const news = ref<NewsItem[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('/data/news.json');
    news.value = await response.json();
  } catch (error) {
    console.error('Ошибка загрузки новостей:', error);
  }
});
</script>

<style scoped lang="scss">
.news {
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style>