<template>
  <div class="legal-page">
    <section class="page-header">
      <div class="header-content">
        <span class="page-badge">Informations légales</span>
        <h1>Mentions légales</h1>
      </div>
    </section>

    <div class="content-container">
      <section class="legal-section">
        <h2>Éditeur du site</h2>
        <p>Le présent site internet est édité par :</p>
        <p><strong>Jourdren TP</strong></p>
        <p>Entreprise spécialisée dans les travaux de terrassement et travaux publics.</p>
        
        <div class="info-card">
          <p>Siège social : 173 Rue de la mairie, 27380 Amfreville-les-Champs</p>
          <p>SIRET : 380 074 849 00023</p>
          <p>RCS : Evreux</p>
          <p>Code APE : 43.12A</p>
        </div>

        <div class="info-card">
          <p>Téléphone : 02 32 92 24 29</p>
          <p>Email : jourdren.tp@gmail.com</p>
        </div>

        <p>Directeur de la publication : [Nom et prénom du dirigeant]</p>
      </section>

      <section class="legal-section">
        <h2>Hébergement du site</h2>
        <p>Le site est hébergé par :</p>
        
        <div class="info-card">
          <p>Nom de l'hébergeur : Vercel</p>
          <p>Adresse : [adresse de l'hébergeur]</p>
          <p>Téléphone : [numéro]</p>
          <p>Site internet : [site de l'hébergeur]</p>
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
.legal-page {
  min-height: 100vh;
  background: var(--color-white);
}

.page-header {
  background: var(--neutral-900);
  padding: 8rem 1.5rem 4rem;
  text-align: center;
}

.header-content {
  max-width: 1100px;
  margin: 0 auto;
}

.page-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.page-header h1 {
  color: var(--color-white);
  font-size: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.content-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.legal-section {
  margin-bottom: 3rem;
}

.legal-section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--neutral-900);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.legal-section p {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--neutral-600);
  margin-bottom: 0.75rem;
}

.legal-section strong {
  color: var(--neutral-900);
  font-weight: 600;
}

.info-card {
  background: var(--neutral-50);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  margin: 1rem 0;
  border: 1px solid var(--border-color);
}

.info-card p {
  margin-bottom: 0.375rem;
  font-size: 0.875rem;
}

.info-card p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .page-header {
    padding: 6rem 1.5rem 2.5rem;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

  .content-container {
    padding: 2.5rem 1.5rem;
  }

  .legal-section h2 {
    font-size: 1.125rem;
  }
}
</style>
