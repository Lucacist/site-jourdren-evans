<template>
  <div class="politique-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Politique de confidentialité</h1>
      </div>
    </section>

    <div class="content-container">
      <section class="legal-section">
        <h2>Collecte des données personnelles</h2>
        <p>Le site peut collecter certaines données personnelles lorsque l'utilisateur :</p>
        <ul>
          <li>Remplit un formulaire de contact</li>
          <li>Effectue une demande de devis</li>
          <li>Navigue sur le site internet</li>
        </ul>

        <p>Les données susceptibles d'être collectées sont :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Message envoyé</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2>Finalité du traitement</h2>
        <p>Les données collectées sont utilisées uniquement pour :</p>
        <ul>
          <li>Répondre aux demandes envoyées via le formulaire de contact</li>
          <li>Établir des devis</li>
          <li>Améliorer l'expérience utilisateur</li>
        </ul>
        <p>Les données ne sont jamais vendues ou transmises à des tiers.</p>
      </section>

      <section class="legal-section">
        <h2>Durée de conservation des données</h2>
        <p>Les données personnelles sont conservées pendant une durée maximale de 3 ans après le dernier contact avec l'utilisateur, sauf obligation légale contraire.</p>
      </section>

      <section class="legal-section">
        <h2>Droits des utilisateurs</h2>
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d'accès</li>
          <li>Droit de rectification</li>
          <li>Droit de suppression</li>
          <li>Droit d'opposition</li>
          <li>Droit à la limitation du traitement</li>
        </ul>
        <p>Vous pouvez exercer ces droits en contactant :</p>
        <div class="info-block">
          <p>Email : jourdren.tp@gmail.com</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.politique-page {
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

.legal-section ul {
  margin: 1rem 0 1.5rem 1.5rem;
  color: #444;
}

.legal-section li {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 0.25rem;
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
