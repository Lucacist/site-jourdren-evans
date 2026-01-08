<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const isMenuOpen = ref(false);

const links = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projets", path: "/projets" },
  { label: "À propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Classe CSS selon la page actuelle
const menuClass = computed(() => {
  if (route.path === '/') return 'menu-home';
  if (route.path === '/contact') return 'menu-contact';
  return 'menu-other';
});
</script>

<template>
  <nav class="navbar">
    <div class="brand" @click="router.push('/')">
      <svg width="154" height="170" viewBox="0 0 154 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M85.375 54.4375C85.375 60.2708 84.625 66.2708 83.125 72.4375C81.6667 78.5625 79.625 84.6667 77 90.75C74.4167 96.8333 71.375 102.792 67.875 108.625C64.375 114.458 60.625 119.979 56.625 125.188C52.625 130.396 48.4375 135.188 44.0625 139.562C39.7292 143.938 35.4167 147.708 31.125 150.875C26.8333 154.042 22.6667 156.5 18.625 158.25C14.5833 160.042 10.8542 160.938 7.4375 160.938C6.35417 160.938 5.35417 160.729 4.4375 160.312C3.52083 159.938 2.75 159.438 2.125 158.812C1.45833 158.188 0.9375 157.458 0.5625 156.625C0.1875 155.833 0 155 0 154.125C0 151.625 0.895833 148.896 2.6875 145.938C4.47917 143.021 6.875 140.021 9.875 136.938C12.875 133.896 16.3333 130.896 20.25 127.938C24.1667 124.979 28.2708 122.229 32.5625 119.688C36.8542 117.146 41.1667 114.938 45.5 113.062C49.875 111.146 54 109.729 57.875 108.812C61.7917 100.896 64.9167 92.5 67.25 83.625C69.625 74.7083 70.8125 65.3542 70.8125 55.5625C70.8125 52.3125 70.6458 49.5833 70.3125 47.375C69.9792 45.1667 69.5208 43.4167 68.9375 42.125C68.3958 40.7917 67.75 39.8542 67 39.3125C66.2917 38.7292 65.5208 38.4375 64.6875 38.4375C63.9792 38.4375 63.0833 38.7083 62 39.25C60.9167 39.75 59.75 40.6458 58.5 41.9375C57.25 43.2292 55.9792 44.9583 54.6875 47.125C53.4375 49.25 52.3125 51.9167 51.3125 55.125C50.3125 58.3333 49.4792 62.1458 48.8125 66.5625C48.1875 70.9792 47.875 76.1042 47.875 81.9375C47.875 84.1875 47.9583 86.3333 48.125 88.375C48.2917 90.4167 48.4792 92.3125 48.6875 94.0625C48.9375 95.8125 49.1458 97.3958 49.3125 98.8125C49.4792 100.229 49.5625 101.438 49.5625 102.438C49.5625 102.812 49.4583 103.167 49.25 103.5C49.0417 103.792 48.6667 103.938 48.125 103.938C46.5417 103.938 45.0417 103.396 43.625 102.312C42.2083 101.229 40.9583 99.8958 39.875 98.3125C38.8333 96.6875 38 94.9375 37.375 93.0625C36.7917 91.1875 36.5 89.4375 36.5 87.8125C36.5 83.8958 36.8542 79.7708 37.5625 75.4375C38.3125 71.0625 39.375 66.7708 40.75 62.5625C42.1667 58.3125 43.8958 54.2708 45.9375 50.4375C47.9792 46.6042 50.3125 43.2292 52.9375 40.3125C55.5625 37.3958 58.4583 35.0833 61.625 33.375C64.8333 31.625 68.2708 30.75 71.9375 30.75C73.7292 30.75 75.3125 31.1042 76.6875 31.8125C78.0625 32.5208 79.25 33.5 80.25 34.75C81.25 35.9583 82.0833 37.3542 82.75 38.9375C83.4167 40.5208 83.9375 42.2083 84.3125 44C84.6875 45.75 84.9583 47.5208 85.125 49.3125C85.2917 51.1042 85.375 52.8125 85.375 54.4375ZM40.625 134.812C43.3333 131.688 45.8958 128.375 48.3125 124.875C50.7708 121.375 53.0625 117.688 55.1875 113.812C48.4792 116.354 42.75 119.062 38 121.938C33.2917 124.771 29.4375 127.542 26.4375 130.25C23.4792 132.958 21.3333 135.479 20 137.812C18.625 140.146 17.9375 142.042 17.9375 143.5C17.9375 144.708 18.3542 145.5 19.1875 145.875C19.9792 146.25 20.8958 146.438 21.9375 146.438C23.2708 146.438 24.75 146.125 26.375 145.5C28 144.875 29.625 144.021 31.25 142.938C32.9167 141.896 34.5625 140.667 36.1875 139.25C37.8125 137.875 39.2917 136.396 40.625 134.812ZM95.125 141.438C92.6667 141.438 90.3958 141.042 88.3125 140.25C86.2292 139.5 84.4375 138.375 82.9375 136.875C81.4375 135.417 80.2708 133.625 79.4375 131.5C78.6042 129.417 78.1875 127.021 78.1875 124.312C78.1875 120.188 79.0208 116.146 80.6875 112.188C82.3125 108.188 84.5417 104.5 87.375 101.125C90.2083 97.7083 93.5 94.6875 97.25 92.0625C101.042 89.4375 105.062 87.3958 109.312 85.9375C107.979 85.3958 106.729 84.6667 105.562 83.75C104.396 82.8333 103.375 81.7708 102.5 80.5625C101.667 79.3125 101 77.9167 100.5 76.375C100.042 74.8333 99.8125 73.1458 99.8125 71.3125C99.8125 67.9375 100.312 64.5208 101.312 61.0625C102.354 57.6042 103.771 54.2917 105.562 51.125C107.354 47.9167 109.479 44.9167 111.938 42.125C114.396 39.3333 117.062 36.9167 119.938 34.875C122.854 32.7917 125.917 31.1667 129.125 30C132.333 28.7917 135.583 28.1875 138.875 28.1875C140.708 28.1875 142.5 28.3958 144.25 28.8125C146.042 29.1875 147.625 29.8958 149 30.9375C150.375 31.9375 151.479 33.3333 152.312 35.125C153.188 36.875 153.625 39.125 153.625 41.875C153.625 44 153.167 46.0417 152.25 48C151.333 49.9583 150.146 51.7083 148.688 53.25C147.271 54.75 145.688 55.9583 143.938 56.875C142.188 57.7917 140.5 58.25 138.875 58.25C138.625 58.25 138.375 58.1458 138.125 57.9375C137.875 57.6875 137.75 57.375 137.75 57C137.75 56.2917 137.958 55.4375 138.375 54.4375C138.792 53.3958 139.25 52.25 139.75 51C140.292 49.7083 140.771 48.3333 141.188 46.875C141.604 45.4167 141.812 43.9167 141.812 42.375C141.812 39.6667 141.188 37.5 139.938 35.875C138.729 34.25 136.958 33.4375 134.625 33.4375C132.333 33.4375 130.208 34.0625 128.25 35.3125C126.292 36.5625 124.521 38.2083 122.938 40.25C121.354 42.25 119.958 44.5 118.75 47C117.542 49.5 116.521 52.0208 115.688 54.5625C114.896 57.0625 114.292 59.4583 113.875 61.75C113.458 64.0417 113.25 65.9583 113.25 67.5C113.25 70 113.458 72.125 113.875 73.875C114.292 75.5833 114.812 77.0208 115.438 78.1875C116.062 79.3125 116.729 80.2292 117.438 80.9375C118.146 81.6458 118.812 82.2292 119.438 82.6875C120.062 83.1042 120.583 83.4583 121 83.75C121.417 84 121.625 84.2917 121.625 84.625C121.625 85.4583 121.354 86.2083 120.812 86.875C120.312 87.5417 119.583 87.9375 118.625 88.0625C114.792 89.1458 111.292 90.8542 108.125 93.1875C104.958 95.5208 102.229 98.2708 99.9375 101.438C97.6875 104.604 95.9375 108.062 94.6875 111.812C93.4375 115.521 92.8125 119.271 92.8125 123.062C92.8125 124.812 93.0417 126.292 93.5 127.5C94 128.708 94.6458 129.667 95.4375 130.375C96.2292 131.125 97.1458 131.667 98.1875 132C99.2708 132.333 100.417 132.5 101.625 132.5C104.167 132.5 106.417 132 108.375 131C110.333 130 112.042 128.75 113.5 127.25C115 125.792 116.292 124.208 117.375 122.5C118.458 120.75 119.396 119.146 120.188 117.688C120.979 116.188 121.667 114.938 122.25 113.938C122.833 112.938 123.375 112.438 123.875 112.438C124.292 112.438 124.75 112.583 125.25 112.875C125.792 113.125 126.062 113.562 126.062 114.188C126.062 114.312 126.042 114.479 126 114.688C125.958 114.854 125.896 115.042 125.812 115.25C124.229 118.625 122.458 121.896 120.5 125.062C118.542 128.188 116.333 130.958 113.875 133.375C111.417 135.833 108.646 137.792 105.562 139.25C102.479 140.708 99 141.438 95.125 141.438Z"
          fill="white" />
      </svg>
    </div>

    <button class="burger-btn" @click="toggleMenu" :class="{ active: isMenuOpen }">
      <svg viewBox="0 0 32 32">
        <path class="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
        </path>
        <path class="line" d="M7 16 27 16"></path>
      </svg>
    </button>

    <div class="menu desktop-menu">
      <router-link v-for="link in links" :key="link.path" :to="link.path" class="menu-item">
        {{ link.label }}
      </router-link>
    </div>

    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="mobile-menu" :class="menuClass">
        <router-link v-for="link in links" :key="link.path" :to="link.path" class="mobile-menu-item" @click="closeMenu">
          {{ link.label }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* --- CONTENEUR PRINCIPAL --- */
.navbar {
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

/* --- LOGO --- */
.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  border-radius: 0.8rem;
  cursor: pointer;
}

.brand svg {
  height: 50px;
  width: auto;
}

.brand svg path {
  fill: #000;
}

/* --- MENU DESKTOP (STYLE "PILULE") --- */
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  /* Espace interne pour que le bouton blanc ne touche pas les bords */
  gap: 5px;
  /* Espace entre les liens */
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  /* Boutons plus larges */
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: #0000002f;
  /* Noir très transparent */
  backdrop-filter: blur(12px);
  color: #fff;
  /* Gris foncé pour le texte inactif */
  border-radius: 50rem;
  /* Arrondi pour suivre le parent */
  transition: all 0.3s ease;
}

.menu-item:hover {
  color: #000;
}

/* --- L'ELEMENT ACTIF (Bouton Blanc) --- */
.router-link-active {
  background-color: #6e6e6e2f !important;
  /* Blanc pur */
  color: #000 !important;
  /* Texte noir */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Petite ombre pour le relief */
  transform: scale(1.02);
  /* Très léger agrandissement */
}

/* --- BOUTON BURGER (CORRIGÉ) --- */
.burger-btn {
  display: none;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border-radius: 12px;
  cursor: pointer;
  z-index: 101;
  transition: background-color 0.2s;
}

.burger-btn:active {
  transform: scale(0.95);
}

/* SVG : Taille contrainte pour centrage parfait */
.burger-btn svg {
  width: 40px;
  height: 40px;
  display: block;
  /* Évite les décalages de ligne */
  overflow: visible;
  /* Important pour que les lignes animées ne soient pas coupées */
}

.line {
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

/* Animation Active */
.burger-btn.active svg {
  transform: rotate(-45deg);
}

.burger-btn.active svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}

/* --- MENU MOBILE --- */
.mobile-menu {
  position: absolute;
  top: 80%;
  width: 100%;
  left: 0;
  padding: 1rem;
  background-color: #fbc02b;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
}

/* Transparent sur Home */
.mobile-menu.menu-home {
  background-color: #ffffff00;
  backdrop-filter: blur(10px);
}

/* Blanc sur Contact */
.mobile-menu.menu-contact {
  background-color: #ffffff;
}

/* Jaune sur les autres pages (Services, Projets, À propos) */
.mobile-menu.menu-other {
  background-color: #fbc02b;
}

.mobile-menu-item {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  transition: background-color 0.2s;
}

.mobile-menu-item:hover {
  background-color: rgba(246, 192, 66, 0.2);
  /* Jaune très clair */
}

.mobile-menu-item.router-link-active {
  color: black;
}

/* --- ANIMATIONS VUEJS --- */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  /* Courbe fluide */
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px) scale(0.98);
  opacity: 0;
}

/* --- RESPONSIVE --- */
@media (min-width: 800px) {
  .burger-btn {
    display: none !important;
  }

  /* Force hide desktop */
  .mobile-menu {
    display: none !important;
  }
}

@media (max-width: 799px) {
  .desktop-menu {
    display: none;
  }

  .burger-btn {
    display: flex !important;
  }

  /* Force show mobile */

  .navbar {
    padding: 0.8rem 1rem;
  }
}
</style>
