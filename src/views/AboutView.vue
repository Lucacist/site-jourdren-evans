<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>À propos de nous</h1>
        <p class="hero-label">Nous construisons pour vous</p>

      </div>
    </section>

    <!-- Main Image -->
    <section class="hero-image">
      <img src="/propos.PNG" alt="Équipe JOURDREN T.P.">
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="content-container">
        <!-- Left Column -->
        <div class="left-column">
          <h2>JOURDREN T.P.</h2>
          <p class="subtitle">Experts en terrassement et travaux publics</p>

          <p>JOURDREN T.P. est une entreprise spécialisée dans le terrassement, les travaux préparatoires et les
            aménagements extérieurs. Nous accompagnons particuliers, professionnels et collectivités dans toutes les
            étapes essentielles à la préparation d'un terrain : nivellement, fouilles, fondations, évacuation des
            terres, VRD et stabilisation des sols.</p>

          <p>Avec un savoir-faire solide et un matériel performant, JOURDREN T.P. garantit des interventions rapides,
            sécurisées et réalisées selon les normes du BTP. Notre équipe maîtrise les contraintes du terrain, les
            exigences techniques et les impératifs des chantiers modernes.</p>

          <p>Chez JOURDREN T.P., nous mettons un point d'honneur à offrir un travail de qualité, fiable et durable.
            Notre objectif est de préparer chaque terrain pour qu'il devienne une base solide, stable et prête à
            accueillir vos projets : construction, aménagement ou extension.</p>

          <p class="engagement">Notre engagement : professionnalisme, réactivité et précision sur chaque chantier.</p>
        </div>

        <!-- Right Column -->
        <div class="right-column">
          <div class="value-block">
            <div class="divider"></div>
            <h3>Relations</h3>
            <p>La relation avec nos clients est au cœur de notre démarche. Nous échangeons clairement sur vos besoins,
              vos contraintes et vos délais afin de vous offrir une prestation sur mesure. Notre équipe reste
              disponible, transparente et engagée pour établir des partenariats durables fondés sur la confiance.</p>
          </div>

          <div class="value-block">
            <div class="divider"></div>
            <h3>Expérience</h3>
            <p>Grâce à plusieurs années d'expérience dans le terrassement et les travaux publics, JOURDREN T.P. maîtrise
              parfaitement les techniques du métier : fouilles, tranchées, plateformes, réseaux, décaissement et
              remblaiement. Cette expertise nous permet d'intervenir sur tout type de terrain, même les plus complexes.
            </p>
          </div>

          <div class="value-block">
            <div class="divider"></div>
            <h3>Responsabilité</h3>
            <p>Chez JOURDREN T.P., nous travaillons dans le respect strict des règles de sécurité et de l'environnement.
              Nous assurons une gestion responsable des matériaux, des déblais et des engins, tout en garantissant un
              chantier propre, organisé et sécurisé pour l'ensemble des intervenants.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Pas de logique nécessaire pour le moment
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: var(--color-white);
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 8rem 1.5rem 4rem;
  background: var(--neutral-900);
}

.hero-content {
  max-width: 1100px;
  margin: 0 auto;
}

.hero-section h1 {
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 2.25rem;
  color: var(--color-white);
  letter-spacing: -0.025em;
}

.hero-label {
  font-size: 1rem;
  color: var(--neutral-400);
}

/* Hero Image */
.hero-image {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.hero-image img {
  width: auto;
  max-width: 100%;
  max-height: 400px;
  margin: 0 auto;
  height: auto;
  display: block;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

/* Content Section */
.content-section {
  background: var(--color-white);
  padding: 3rem 1.5rem 5rem;
}

.content-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

/* Left Column */
.left-column {
  padding-right: 1rem;
}

.left-column h2 {
  font-size: 1.375rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--neutral-900);
  letter-spacing: -0.025em;
}

.subtitle {
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  color: var(--neutral-500);
}

.left-column p {
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: var(--neutral-600);
}

.engagement {
  color: var(--neutral-500);
  margin-top: 1.5rem;
  font-style: italic;
}

/* Right Column */
.right-column {
  padding-left: 1rem;
}

.value-block {
  margin-bottom: 2.5rem;
}

.divider {
  width: 40px;
  height: 2px;
  background: var(--color-primary);
  margin-bottom: 1rem;
}

.value-block h3 {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--neutral-900);
}

.value-block p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--neutral-600);
}

/* Responsive */
@media (max-width: 1024px) {
  .content-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .left-column,
  .right-column {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 6rem 1.5rem 2.5rem;
  }

  .hero-section h1 {
    font-size: 1.75rem;
  }

  .hero-image {
    padding: 2rem 1.5rem;
  }

  .content-section {
    padding: 2rem 1.5rem 3rem;
  }

  .content-container {
    gap: 2.5rem;
  }
}
</style>