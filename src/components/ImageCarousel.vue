<template>
  <div class="carousel" @mouseenter="pause" @mouseleave="resume">
    <div class="carousel-inner">
      <transition :name="slideDirection">
        <img :key="currentIndex" :src="images[currentIndex]" :alt="alt" class="carousel-image" />
      </transition>
    </div>

    <!-- Navigation arrows -->
    <button class="carousel-btn carousel-btn-prev" @click="prev" aria-label="Image précédente">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button class="carousel-btn carousel-btn-next" @click="next" aria-label="Image suivante">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>

    <!-- Indicators -->
    <div class="carousel-indicators">
      <button
        v-for="(_, index) in images"
        :key="index"
        :class="['carousel-indicator', { active: index === currentIndex }]"
        @click="goTo(index)"
        :aria-label="`Aller à l'image ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  alt: {
    type: String,
    default: 'Image'
  },
  interval: {
    type: Number,
    default: 4000
  }
})

const currentIndex = ref(0)
const slideDirection = ref('slide-left')
let autoplayInterval = null
let isPaused = false

const next = () => {
  slideDirection.value = 'slide-left'
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  slideDirection.value = 'slide-right'
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const goTo = (index) => {
  slideDirection.value = index > currentIndex.value ? 'slide-left' : 'slide-right'
  currentIndex.value = index
}

const startAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval)
  autoplayInterval = setInterval(() => {
    if (!isPaused) next()
  }, props.interval)
}

const pause = () => {
  isPaused = true
}

const resume = () => {
  isPaused = false
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayInterval) clearInterval(autoplayInterval)
})
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-inner::before {
  content: '';
  display: block;
  padding-top: 66.67%;
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.carousel:hover .carousel-btn {
  opacity: 1;
}

.carousel-btn:hover {
  background: #fff;
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn-prev {
  left: 12px;
}

.carousel-btn-next {
  right: 12px;
}

.carousel-btn svg {
  color: #333;
}

.carousel-indicators {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.carousel-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

.carousel-indicator.active {
  background: #fff;
  width: 24px;
  border-radius: 4px;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s ease-in-out;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
