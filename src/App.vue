<script setup>
import { useRoute } from 'vue-router';
// Le composant AppNavbar est auto-importé

// 1. On récupère l'objet route pour savoir où on est
const route = useRoute();
</script>

<template>
  <div class="layout">
    <AppNavbar />
    
    <div :class="{ 'page-content': route.path !== '/' }">
        <RouterView />
    </div>
    <AppFooter />
  </div>
</template>

<style>

/* Cette classe ne s'appliquera plus sur la page d'accueil ! */
.page-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}
</style>