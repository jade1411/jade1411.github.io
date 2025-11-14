<template>
  <div ref="mapContainer" class="yandex-map"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const mapContainer = ref<HTMLElement>();

onMounted(() => {
  if (mapContainer.value) {
    // Инициализация Яндекс.Карты
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=d1797d4d-610c-42d9-b957-a8136011e125&lang=ru_RU';
    script.onload = initMap;
    document.head.appendChild(script);
  }
});

const initMap = () => {
  // @ts-ignore
  ymaps.ready(() => {
    // @ts-ignore
    const map = new ymaps.Map(mapContainer.value, {
      center: [61.281849, 73.285693], 
      zoom: 12
    });

    // @ts-ignore
    const marker = new ymaps.Placemark([61.281849, 73.285693], {
      balloonContent: 'Пивоварня BETTYJOYBREW<br>г. Сургут, ул. Саянская 46/1'
    }, {
      preset: 'islands#orangeFoodIcon'
    });

    map.geoObjects.add(marker);
  });
};
</script>

<style scoped lang="scss">
.yandex-map {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
