<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
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
</script>

<template>
  <nav class="navbar">
    <div class="brand" @click="router.push('/')">
      <img src="/img/home/logo.svg" alt="" srcset="">
    </div>

    <button class="burger-btn" @click="toggleMenu" :class="{ active: isMenuOpen }">
      <svg viewBox="0 0 32 32">
        <path
          class="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path class="line" d="M7 16 27 16"></path>
      </svg>
    </button>

    <div class="menu desktop-menu">
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="menu-item"
      >
        {{ link.label }}
      </router-link>
    </div>

    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="mobile-menu">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="mobile-menu-item"
          @click="closeMenu"
        >
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

.brand img {
  height: 50px;
  width: auto;
}

/* --- MENU DESKTOP (STYLE "PILULE") --- */
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px; /* Espace interne pour que le bouton blanc ne touche pas les bords */
  gap: 5px; /* Espace entre les liens */
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem; /* Boutons plus larges */
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: #0000002f; /* Noir très transparent */
  backdrop-filter: blur(12px);
  color: #fff; /* Gris foncé pour le texte inactif */
  border-radius: 50rem; /* Arrondi pour suivre le parent */
  transition: all 0.3s ease;
}

.menu-item:hover {
  color: #000;
}

/* --- L'ELEMENT ACTIF (Bouton Blanc) --- */
.router-link-active {
  background-color: #6e6e6e2f !important; /* Blanc pur */
  color: #000 !important; /* Texte noir */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Petite ombre pour le relief */
  transform: scale(1.02); /* Très léger agrandissement */
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
  display: block; /* Évite les décalages de ligne */
  overflow: visible; /* Important pour que les lignes animées ne soient pas coupées */
}

.line {
  fill: none;
  stroke: #fff;
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
  background-color: #fbc02b; /* Glassmorphism léger */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-menu-item {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  transition: background-color 0.2s;
}

.mobile-menu-item:hover {
  background-color: rgba(246, 192, 66, 0.2); /* Jaune très clair */
}

.mobile-menu-item.router-link-active {
  color: black;
}

/* --- ANIMATIONS VUEJS --- */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); /* Courbe fluide */
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
  } /* Force hide desktop */
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
  } /* Force show mobile */

  .navbar {
    padding: 0.8rem 1rem;
  }
}
</style>
