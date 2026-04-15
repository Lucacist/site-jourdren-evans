<template>
  <div class="legal-page">
    <section class="page-header">
      <div class="header-content">
        <span class="page-badge">Protection des données</span>
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
        <div class="info-card">
          <p>Email : jourdren.tp@gmail.com</p>
        </div>
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

.legal-section ul {
  margin: 1rem 0 1.5rem 1.5rem;
  padding: 0;
  list-style: none;
}

.legal-section li {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--neutral-600);
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.legal-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 5px;
  height: 5px;
  background: var(--color-primary);
  border-radius: 50%;
}

.info-card {
  background: var(--neutral-50);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-lg);
  margin: 1rem 0;
  border: 1px solid var(--border-color);
}

.info-card p {
  margin-bottom: 0;
  font-size: 0.875rem;
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
