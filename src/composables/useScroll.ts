import { ref, onMounted, onUnmounted } from 'vue';

export function useScroll() {
  const scrollY = ref(0);

  const updateScroll = () => {
    scrollY.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', updateScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll);
  });

  return { scrollY };
}