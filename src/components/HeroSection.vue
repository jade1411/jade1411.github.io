<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>BETTYJOYBREW</h1>
      <p>Крафтовое пиво с характером</p>
      <button class="cta-button" @click="scrollToSection('products')">
        Смотреть продукцию
      </button>
    </div>
    <div class="scroll-indicator" @click="scrollToSection('about')">
      ↓
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};
</script>

<style scoped lang="scss">
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e55a00;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>