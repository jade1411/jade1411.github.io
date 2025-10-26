<template>
  <div class="news-card">
    <div class="news-image">
      <img src="https://media.istockphoto.com/id/1093593288/photo/close-up-of-bartender-pouring-draft-beer-in-glass.jpg?s=612x612&w=0&k=20&c=qhSKb5v13QDuotRFV2HYAsVIlTkefv6wjTFqOBEkFXo=" :alt="newsItem.title">
    </div>
    <div class="news-content">
      <span class="news-category">{{ getCategoryLabel(newsItem.category) }}</span>
      <h3>{{ newsItem.title }}</h3>
      <p class="news-preview">{{ newsItem.preview }}</p>
      <span class="news-date">{{ formatDate(newsItem.date) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsItem } from '@/types/news';

interface Props {
  newsItem: NewsItem;
}

defineProps<Props>();

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    news: 'Новость',
    promotion: 'Акция',
    event: 'Событие'
  };
  return labels[category] || category;
};

const formatDate = (date: Date | string) => {
  const d = new Date(date);
  return d.toLocaleDateString('ru-RU');
};
</script>

<style scoped lang="scss">
.news-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
}

.news-image {
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.news-content {
  padding: 1.5rem;
}

.news-category {
  display: inline-block;
  background: #ff6b00;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.news-content h3 {
  margin-bottom: 0.5rem;
}

.news-preview {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.news-date {
  color: #999;
  font-size: 0.9rem;
}
</style>