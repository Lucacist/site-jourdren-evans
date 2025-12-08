<script setup>
import { ref } from "vue";

// Les données exactes de ton image
const services = ref([
  {
    title: "Terrassement",
    icon: "pi pi-clone", // Icône temporaire (forme carrée/découpe)
    description:
      "Nous préparons votre terrain avec précision : décapage, nivellement, fouilles et mise en forme pour garantir une base solide et prête à construire.",
  },
  {
    title: "VRD – Voirie & Réseaux Divers",
    icon: "pi pi-chart-pie", // Icône temporaire (forme ronde)
    description:
      "Nous créons des extérieurs pratiques et durables : parkings, allées, accès véhicules et surfaces stabilisées, avec un rendu propre et soigné.",
  },
  {
    title: "Aménagements extérieurs",
    icon: "pi pi-share-alt", // Icône temporaire (réseaux/connexions)
    description:
      "Nous réalisons tous vos réseaux : tranchées, gaines, raccordements et installations techniques pour assurer le bon fonctionnement de vos infrastructures.",
  },
]);
</script>

<template>
  <section class="services-section">
    <h2 class="section-title">Services</h2>

    <div class="services-grid">
      <div v-for="(service, index) in services" :key="index" class="card-service">
        <div class="icon-wrapper">
          <i :class="service.icon" class="service-icon"></i>
        </div>

        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>

    <div class="button-container">
      <Button label="Voir plus" class="btn-dark" />
    </div>
  </section>
</template>

<style scoped>
/* Le fond Jaune Moutarde de l'image */
.services-section {
  background-color: #fbc02b; /* Le même jaune que tes boutons */
  padding: 3rem 2rem;
  color: #1a1a1a; /* Noir presque pur pour le texte */
  text-align: center;
}

.section-title {
  font-size: 3rem;
  margin-top: 0;
  font-weight: 800;
  margin-bottom: 4rem;
  text-transform: capitalize;
}

/* Grille de 3 colonnes */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  width: 100vw;
  margin: 0 auto 4rem auto;
}

/* --- TA CLASSE "card-service" --- */
.card-service {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

/* Style des icônes (Grosses et noires) */
.service-icon {
  font-size: 4rem; /* Très grand */
  margin-bottom: 1.5rem;
  color: black;
}

.card-service h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: black;
}

.card-service p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333; /* Gris très foncé pour le texte courant */
  max-width: 350px; /* Limite la largeur du texte pour la lisibilité */
}

/* Bouton Noir (comme sur l'image) */
.button-container {
  margin-top: 2rem;
}

/* On personnalise le bouton PrimeVue pour qu'il soit noir/gris foncé */
:deep(.btn-dark) {
  background-color: #2c2c2c !important;
  border: none !important;
  color: white !important;
  padding: 0.8rem 2.5rem;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 4px; /* Coins légèrement carrés comme sur l'image */
}
:deep(.btn-dark:hover) {
  background-color: black !important;
}
</style>
