<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// Liste des liens
const links = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projets", path: "/projets" },
  { label: "À propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];
</script>

<template>
  <nav class="navbar">
    <div class="brand" @click="router.push('/')">
      <span class="brand-title">Jourdren Evans</span>
      <span class="brand-subtitle">Terrassement</span>
    </div>

    <div class="menu">
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="menu-item"
      >
        {{ link.label }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
/* Conteneur principal */
.navbar {
  max-width: 1250px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between; /* Écarte les éléments (Gauche - Centre - Droite) */
  align-items: stretch; /* Force tous les enfants à prendre 100% de la hauteur */
  color: #000;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

/* --- LOGO --- */
.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background-color: #ffffff3a;
  min-width: 200px;
  backdrop-filter: blur(10px);
}

.brand-title {
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.1;
}

.brand-subtitle {
  font-size: 0.85rem;
  font-weight: 300;
}

/* --- MENU CENTRAL --- */
.menu {
  display: flex;
  justify-content: center; /* Centre les liens horizontalement */
  background-color: #ffffff3a;
  border-radius: 0.8rem;
  backdrop-filter: blur(10px);
  height: auto;
  padding: 0.4rem;
}

.menu-item {
  display: flex;
  align-items: center; /* Centre le texte verticalement */
  padding: 0rem 1rem;
  height: auto;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.2s;
  color: #242424ff;
  font-weight: 600;
}

.menu-item:hover {
  color: #000;
}

/* C'est ici que la magie opère : Vue ajoute cette classe automatiquement au lien actif */
.router-link-active {
  background-color: #ffffff34;
  border-radius: 0.6rem;
  color: #000;
}

/* --- BOUTON APPELER --- */
.cta-button {
  background-color: #f6c042; /* Jaune chantier */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background-color: #e0ac30;
}
</style>
