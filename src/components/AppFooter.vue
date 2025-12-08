<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// Fonction pour remonter en haut de page en douceur
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <div class="footer-divider"></div>

    <div class="footer-container">
      <div class="footer-col brand-col">
        <h2 class="footer-brand">Jourdren Evans</h2>
        <span class="footer-subtitle">Terrassement</span>
      </div>

      <div class="footer-col">
        <h3 class="col-title">Siège social</h3>
        <p>Route du Manoir,</p>
        <p>27460 Alizay</p>
        <br />
        <p>02.32.92.24.29</p>
        <p>info@monsite.fr</p>
      </div>

      <div class="footer-col">
        <h3 class="col-title">Réseaux sociaux</h3>
        <div class="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div class="footer-col">
        <h3 class="col-title">Questions</h3>
        <p class="question-text">
          Pour vos questions ou félicitations, veuillez appeler le : 06.18.04.30.08
        </p>
        <Button class="btn-secondary" @click="router.push('/contact')">
          Nous contacter
        </Button>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="legal-links">
        <a href="#">Politique de cookies</a>
        <a href="#">Politique de confidentialité</a>
        <a href="#">Mentions légales</a>
      </div>

      <div class="back-to-top">
        <a href="#" @click.prevent="scrollToTop"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7102 9.88001L13.4102 5.59001C13.0355 5.21751 12.5286 5.00842 12.0002 5.00842C11.4718 5.00842 10.9649 5.21751 10.5902 5.59001L6.29018 9.88001C6.10393 10.0674 5.99939 10.3208 5.99939 10.585C5.99939 10.8492 6.10393 11.1026 6.29018 11.29C6.38315 11.3837 6.49375 11.4581 6.61561 11.5089C6.73746 11.5597 6.86817 11.5858 7.00018 11.5858C7.13219 11.5858 7.2629 11.5597 7.38476 11.5089C7.50662 11.4581 7.61722 11.3837 7.71018 11.29L11.0002 8.00001V19C11.0002 19.2652 11.1055 19.5196 11.2931 19.7071C11.4806 19.8947 11.735 20 12.0002 20C12.2654 20 12.5198 19.8947 12.7073 19.7071C12.8948 19.5196 13.0002 19.2652 13.0002 19V8.00001L16.2902 11.29C16.4772 11.4783 16.7313 11.5846 16.9966 11.5856C17.262 11.5865 17.5169 11.482 17.7052 11.295C17.8935 11.108 17.9998 10.8539 18.0007 10.5885C18.0017 10.3232 17.8972 10.0683 17.7102 9.88001Z"
              fill="#000"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="copyright">
      <p>© {{ currentYear }} par Jourdren Evans. Créé avec Vue.js</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #fbc02b; /* Jaune Moutarde */
  color: #1a1a1a;
  padding: 3rem 2rem 2rem 2rem;
  font-family: sans-serif;
}

.footer-divider {
  border-top: 1px solid black;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* GRILLE PRINCIPALE */
.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
}

/* TYPOGRAPHIE COLONNES */
.footer-brand {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  text-transform: uppercase;
}

.footer-subtitle {
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.col-title {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.footer-col p,
.footer-col a {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #1a1a1a;
  text-decoration: none;
  margin: 0.2rem 0;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.question-text {
  margin-bottom: 1.5rem !important;
}

/* PARTIE BASSE */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 2rem auto;
  padding-top: 2rem;
}

.legal-links {
  display: flex;
  gap: 2rem;
}

.legal-links a,
.back-to-top a {
  text-decoration: none; /* Pas de soulignement par défaut */
  font-size: 0.9rem;
  color: #1a1a1a;
}

/* Soulignement du lien "Remonter" comme sur l'image */
.back-to-top a {
  text-decoration: underline;
  font-weight: 500;
  display: flex;
  align-items: center;
  border: 2px solid #000000ff;
  border-radius: 50rem;
  padding: 0.3rem;
}

.copyright {
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 0.8rem;
}

.btn-secondary {
  color: #000000ff !important;
  border: 2px solid #000000ff !important;
  font-weight: bold;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  background-color: transparent;
}
.btn-secondary:hover {
  background-color: #000 !important;
  color: #fbc02b !important;
}

/* RESPONSIVE MOBILE */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr; /* Une seule colonne sur mobile */
    text-align: center; /* Tout centré sur mobile */
  }
  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  .legal-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
