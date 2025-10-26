<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2>О нашей пивоварне</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Крафтовая пивоварня «BETTYJOYBREW» была основана в 2020 году 
            с целью создания уникальных сортов пива, которые отражают 
            нашу страсть к качеству и инновациям.
          </p>
          <p>
            Мы используем только лучшие ингредиенты и традиционные 
            методы пивоварения, сочетая их с современными технологиями.
          </p>
          <div class="stats">
            <div class="stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Сортов пива</span>
            </div>
            <div class="stat">
              <span class="stat-number">1000+</span>
              <span class="stat-label">Довольных клиентов</span>
            </div>
            <div class="stat">
              <span class="stat-number">5</span>
              <span class="stat-label">Наград</span>
            </div>
          </div>
        </div>
        <div class="about-images">
          <img 
            src="https://media.cntraveller.com/photos/611bea83ae2ff768cb252ce6/master/w_1920%2Cc_limit/13breweries-snapshot.jpg" 
            alt="Пивоварня BETTYJOYBREW" 
            class="brewery-image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.about-section {
  background: white;
  padding: 100px 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #333;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: #666;
    font-size: 1.1rem;
  }
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.stat {
  text-align: center;
  
  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: #ff6b00;
  }
  
  .stat-label {
    font-size: 0.9rem;
    color: #666;
  }
}

.about-images {
  .brewery-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .about-images .brewery-image {
    height: 300px;
  }
}
</style>