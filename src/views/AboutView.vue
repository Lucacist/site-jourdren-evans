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
      <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200" alt="Équipe JOURDREN T.P.">
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

          <p>Cet espace est idéal pour raconter l'histoire de votre entreprise.</p>

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
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 5rem 1rem 1rem 1rem;
  background: #fbc02b;
  margin-bottom: 2rem;
  color: #000;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 40px;
}

.hero-section h1 {
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

/* Hero Image */
.hero-image {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 500px;
  object-fit: cover;
}

/* Content Section */
.content-section {
  background: white;
  padding: 60px 20px 80px;
}

.content-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

/* Left Column */
.left-column {
  padding-right: 20px;
}

.left-column h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.subtitle {
  font-size: 0.9rem;
  margin-bottom: 25px;
  color: #666;
  font-style: italic;
}

.left-column p {
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #333;
}

.engagement {
  font-style: italic;
  color: #666;
  margin-top: 30px;
}

/* Right Column */
.right-column {
  padding-left: 20px;
}

.value-block {
  margin-bottom: 40px;
}

.divider {
  width: 60px;
  height: 3px;
  background: #333;
  margin-bottom: 20px;
}

.value-block h3 {
  font-size: 1.25rem;
  margin-bottom: 15px;
  font-weight: 600;
  color: #333;
}

.value-block p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: #333;
}

/* Responsive */
@media (max-width: 1024px) {
  .content-container {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .left-column,
  .right-column {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding-left: 20px;
  }

  .hero-section h1 {
    font-size: 1.8rem;
  }

  .content-section {
    padding: 40px 20px 60px;
  }

  .content-container {
    gap: 40px;
  }
}
</style>