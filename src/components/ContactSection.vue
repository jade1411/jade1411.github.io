<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <h2>Контакты</h2>
      <div class="contacts-content">
        <div class="contact-info">
          <h3>Свяжитесь с нами</h3>
          <div class="contact-item">
            <strong>Адрес:</strong>
            <p>г. Сургут, Саянская улица, 46/1</p>
          </div>
          <div class="contact-item">
            <strong>Телефон:</strong>
            <p>+7 (3822) 123-456</p>
          </div>
          <div class="contact-item">
            <strong>Email:</strong>
            <p>info@bettyjoybrew.ru</p>
          </div>
          <div class="contact-item">
            <strong>Время работы:</strong>
            <p>Пн-Пт: 10:00-20:00<br>Сб-Вс: 12:00-22:00</p>
          </div>
        </div>
        
        <div class="contact-form-section">
          <ContactForm />
        </div>
      </div>
      
      <div class="map-section">
        <YandexMap />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from './ContactForm.vue';
import YandexMap from './YandexMap.vue';
</script>

<style scoped lang="scss">
.contacts {
  background: #f8f8f8;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contacts-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-item {
  margin-bottom: 1rem;
}

.contact-item strong {
  display: block;
  margin-bottom: 0.25rem;
}

.map-section {
  margin-top: 3rem;
  height: 400px;
}

@media (max-width: 768px) {
  .contacts-content {
    grid-template-columns: 1fr;
  }
}
</style>