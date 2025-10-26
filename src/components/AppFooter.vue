<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>BETTYJOYBREW</h3>
          <p>Крафтовая пивоварня, создающая уникальные сорта пива с 2020 года.</p>
        </div>
        
        <div class="footer-section">
          <h4>Контакты</h4>
          <p>г. Сургут, ул. Саянская улица, 46/1</p>
          <p>+7 (3822) 123-456</p>
          <p>info@bettyjoybrew.ru</p>
        </div>
        
        <div class="footer-section">
          <h4>Мы в соцсетях</h4>
          <div class="social-links">
            <a v-for="link in socialLinks" :key="link.id" :href="link.url" target="_blank">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 BETTYJOYBREW. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { SocialLink } from '@/types/navigation';

const socialLinks: SocialLink[] = [
  { id: 'vk', name: 'VK', url: 'https://vk.com/bettyjoybrew', icon: 'vk' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/bettyjoybrew', icon: 'instagram' },
  { id: 'telegram', name: 'Telegram', url: 'https://t.me/bettyjoybrew', icon: 'telegram' }
];
</script>

<style scoped lang="scss">
.footer {
  background: #333;
  color: white;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
}

.social-links a {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #ff6b00;
  }
}

.footer-bottom {
  border-top: 1px solid #555;
  padding-top: 1rem;
  text-align: center;
}
</style>