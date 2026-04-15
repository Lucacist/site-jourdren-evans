<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: "Terrassement",
    description:
      "Nous préparons votre terrain avec précision : décapage, nivellement, fouilles et mise en forme pour garantir une base solide et prête à construire.",
    icon: "excavator"
  },
  {
    title: "VRD – Voirie & Réseaux",
    description:
      "Nous réalisons tous vos réseaux : tranchées, gaines, raccordements et installations techniques pour assurer le bon fonctionnement de vos infrastructures.",
    icon: "network"
  },
  {
    title: "Aménagements extérieurs",
    description:
      "Nous créons des extérieurs pratiques et durables : parkings, allées, accès véhicules et surfaces stabilisées, avec un rendu propre et soigné.",
    icon: "landscape"
  },
]);
</script>

<template>
  <section class="services-section">
    <div class="services-container">
      <div class="services-header">
        <span class="section-badge">Nos services</span>
        <h2 class="section-title">Ce que nous faisons</h2>
        <p class="section-subtitle">
          Des solutions complètes pour tous vos projets de terrassement et d'aménagement
        </p>
      </div>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="service-icon">
            <svg v-if="service.icon === 'excavator'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 19h4M4 19v-4m0 4l4-4m8 4h4m-4 0v-4m0 4l4-4M12 3v6m0 0l3-3m-3 3L9 6"/>
              <rect x="8" y="12" width="8" height="7" rx="1"/>
            </svg>
            <svg v-else-if="service.icon === 'network'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="5" r="2"/>
              <circle cx="5" cy="19" r="2"/>
              <circle cx="19" cy="19" r="2"/>
              <path d="M12 7v4m0 0l-5 6m5-6l5 6"/>
            </svg>
            <svg v-else width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>
            </svg>
          </div>
          <div class="service-number">0{{ index + 1 }}</div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>

      <div class="services-cta">
        <RouterLink to="/services" class="btn btn-secondary">
          Découvrir tous nos services
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: var(--color-primary);
  padding: 6rem 0;
}

.services-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.services-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--neutral-800);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--neutral-900);
  margin-bottom: 0.75rem;
  letter-spacing: -0.025em;
}

.section-subtitle {
  font-size: 0.9375rem;
  color: var(--neutral-700);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.service-card {
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  position: relative;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.service-card:hover {
  border-color: var(--neutral-300);
  box-shadow: var(--shadow);
}

.service-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 1.25rem;
  color: var(--color-primary-dark);
}

.service-number {
  position: absolute;
  top: 1.75rem;
  right: 1.75rem;
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--neutral-400);
}

.service-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--neutral-900);
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 0.875rem;
  color: var(--neutral-600);
  line-height: 1.6;
}

.services-cta {
  text-align: center;
  margin-top: 2.5rem;
}

.services-cta .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-white);
  background: var(--neutral-900);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background var(--transition);
}

.services-cta .btn:hover {
  background: var(--neutral-800);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 4rem 0;
  }

  .services-header {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-size: 1.625rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-card {
    padding: 1.5rem;
  }
}
</style>
