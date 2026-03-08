<template>
  <div class="mentions-legales-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Mentions légales</h1>
      </div>
    </section>

    <div class="content-container">
      <section class="legal-section">
        <h2>Éditeur du site</h2>
        <p>Le présent site internet est édité par :</p>
        <p><strong>Jourdren TP</strong></p>
        <p>Entreprise spécialisée dans les travaux de terrassement et travaux publics.</p>
        
        <div class="info-block">
          <p>Siège social : 173 Rue de la mairie, 27380 Amfreville-les-Champs</p>
          <p>SIRET : 380 074 849 00023</p>
          <p>Code APE : 43.12A</p>
        </div>

        <div class="info-block">
          <p>Téléphone : 02 32 92 24 29</p>
          <p>Email : jourdren.tp@gmail.com</p>
        </div>

      </section>

      <section class="legal-section">
        <h2>Hébergement du site</h2>
        <p>Le site est hébergé par :</p>
        
        <div class="info-block">
          <p>Nom de l'hébergeur : Vercel</p>
        </div>
      </section>

      <section class="legal-section">
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble des contenus présents sur ce site (textes, images, graphismes, logos, vidéos, icônes, etc.) sont la propriété exclusive de Jourdren TP, sauf mentions contraires.</p>
        <p>Toute reproduction, représentation, modification ou exploitation de ces contenus, en tout ou partie, sans autorisation préalable est interdite.</p>
      </section>

      <section class="legal-section">
        <h2>Responsabilité</h2>
        <p>Les informations présentes sur ce site sont fournies à titre informatif.</p>
        <p>Jourdren TP s'efforce de fournir des informations exactes et mises à jour mais ne peut garantir l'exactitude ou l'exhaustivité des informations diffusées.</p>
        <p>L'entreprise ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.mentions-legales-page {
  min-height: 100vh;
}

.hero-section {
  text-align: center;
  padding: 5rem 1rem 2rem 1rem;
  background: #fbc02b;
  color: #000;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
}

.hero-section h1 {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2.5rem;
}

.content-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.legal-section {
  margin-bottom: 3rem;
}

.legal-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #fbc02b;
}

.legal-section p {
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 0.75rem;
}

.info-block {
  background: #f9f9f9;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.info-block p {
  margin-bottom: 0.5rem;
}

.info-block p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1rem 1.5rem 1rem;
  }

  .hero-section h1 {
    font-size: 1.8rem;
  }

  .content-container {
    padding: 2rem 1rem;
  }

  .legal-section h2 {
    font-size: 1.25rem;
  }
}
</style>
