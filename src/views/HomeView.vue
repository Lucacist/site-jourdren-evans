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
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Entreprise familiale depuis 1973
        </div>
        
        <h1 class="hero-title">
          Votre terrain,<br>notre expertise
        </h1>
        
        <p class="hero-subtitle">
          Terrassement, VRD et aménagements extérieurs en Normandie.
        </p>

        <div class="hero-actions">
          <button class="btn-primary" @click="router.push('/projets')">
            Voir nos réalisations
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7));
  z-index: -1;
}

.hero-content {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-white);
  margin-bottom: 2rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--neutral-900);
  background: var(--color-primary);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition);
}

.btn-primary:hover {
  background: var(--color-primary-light);
  transform: translateY(-2px);
}

.btn-outline {
  padding: 1rem 1.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-white);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition);
}

.btn-outline:hover {
  border-color: var(--color-white);
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
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
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
