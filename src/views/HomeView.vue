<script setup>
import { useRouter } from "vue-router";
import ServicesSection from "@/components/ServicesSection.vue";

const router = useRouter();
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <img src="/img/home/home-img.png" alt="Chantier de terrassement Jourdren Evans" class="hero-bg" />
      <div class="hero-overlay"></div>
      
      <div class="hero-content">
        <p class="hero-tagline">Entreprise familiale depuis 1973</p>
        <h1 class="hero-title">Votre terrain, notre expertise</h1>
        <p class="hero-subtitle">
          Terrassement, VRD et aménagements extérieurs en Normandie.
        </p>

        <div class="hero-actions">
          <button class="btn-primary" @click="router.push('/projets')">
            Voir nos réalisations
          </button>
          <button class="btn-outline" @click="router.push('/contact')">
            Demander un devis
          </button>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />

    <!-- About Section -->
    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <p class="section-label">À propos</p>
          <h2 class="section-title">Une entreprise familiale à votre service</h2>
          <p class="section-text">
            Entreprise spécialisée dans le terrassement, les aménagements extérieurs et les
            travaux de réseaux, JOURDREN T.P. met son savoir-faire et sa rigueur au service
            de vos projets pour garantir des chantiers solides, propres et durables.
          </p>
          <p class="section-text">
            Depuis 1973, nous accompagnons les particuliers et les professionnels dans tous 
            leurs projets de terrassement en Normandie.
          </p>
          <RouterLink to="/a-propos" class="link-arrow">
            En savoir plus →
          </RouterLink>
        </div>
        <div class="about-image">
          <img src="/img/home/home-img.png" alt="Équipe Jourdren TP" />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <TestimonialsSection />
    
    <!-- Contact -->
    <ContactSection />
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
}

/* HERO */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6));
  z-index: -1;
}

.hero-content {
  text-align: center;
  padding: 2rem;
  max-width: 720px;
}

.hero-tagline {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: 3.25rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -0.025em;
}

.hero-subtitle {
  font-size: 1.0625rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--neutral-900);
  background: var(--color-primary);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--transition);
}

.btn-primary:hover {
  background: var(--color-primary-light);
}

.btn-outline {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-white);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition);
}

.btn-outline:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
}

/* ABOUT */
.about-section {
  padding: 6rem 0;
  background: var(--neutral-50);
}

.about-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--neutral-900);
  line-height: 1.25;
  margin-bottom: 1.25rem;
  letter-spacing: -0.025em;
}

.section-text {
  font-size: 0.9375rem;
  color: var(--neutral-600);
  line-height: 1.7;
  margin-bottom: 0.875rem;
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--neutral-900);
  text-decoration: none;
  transition: color var(--transition);
}

.link-arrow:hover {
  color: var(--color-primary-dark);
}

.about-image {
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .about-image {
    order: -1;
    max-height: 360px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.25rem;
  }

  .hero-subtitle {
    font-size: 0.9375rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .about-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 1.625rem;
  }
}
</style>
