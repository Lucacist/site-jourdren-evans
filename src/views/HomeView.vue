<script setup>
import { useRouter } from "vue-router";
import ServicesSection from "@/components/ServicesSection.vue";

const router = useRouter();
</script>

<template>
  <div class="home-container">
    <img
      src="/img/home/home-img.webp"
      alt="Chantier de terrassement Jourdren Evans"
      class="hero-background-image"
    />

    <div class="hero-content">
      <h1>Votre terrain, Notre expertise</h1>
      <p>Entreprise familiale depuis 2000</p>

      <div class="hero-buttons">
        <Button
          label="Voir les Projets"
          class="btn-primary"
          @click="router.push('/projets')"
        />

        <Button
          label="Nous contacter"
          class="btn-secondary"
          outlined
          @click="router.push('/contact')"
        />
      </div>
    </div>
    <div class="content-flow">
      <ServicesSection />
    </div>
    <div class="content-flow">
      <div class="flexx">
        <div class="content-title">Apprendre a nous connaitre</div>
        <p>
          Entreprise spécialisée dans le terrassement, les aménagements extérieurs et les
          travaux de réseaux, JOURDREN T.P. met son savoir-faire et sa rigueur au service
          de vos projets pour garantir des chantiers solides, propres et durables.
        </p>
        <Button label="Lire plus" class="btn-dark" />
      </div>
    </div>
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}

.hero-background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: #f0f0f0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
}

.btn-primary {
  background-color: #fbc02b !important;
  border: none !important;
  color: #222 !important;
  font-weight: bold;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
}
.btn-primary:hover {
  background-color: #fbc02b !important;
}
.btn-secondary {
  color: white !important;
  border: 2px solid white !important;
  font-weight: bold;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
}
.btn-secondary:hover {
  background-color: white !important;
  color: #333 !important;
}
.content-flow {
  position: relative;
  z-index: 2; /* Important : Doit être au-dessus de l'image fixe (z-index: -1 ou 0) */
  background-color: white; /* Ou transparent selon le design */
  color: #000;
}
.content-title {
  font-size: 3rem;
  margin-top: 0;
  font-weight: 800;
  margin-bottom: 4rem;
}
.content-flow p {
  font-size: 1.4rem;
  line-height: 1.6;
  color: #333; /* Gris très foncé pour le texte courant */
}
.flexx {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

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

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .content-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .content-flow p {
    font-size: 1.2rem;
  }
}
</style>
