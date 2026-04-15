<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const currentYear = new Date().getFullYear();

const footerLinks = {
  services: [
    { label: 'Terrassement', path: '/services' },
    { label: 'VRD', path: '/services' },
    { label: 'Aménagements', path: '/services' },
  ],
  company: [
    { label: 'À propos', path: '/a-propos' },
    { label: 'Projets', path: '/projets' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', path: '/mentions-legales' },
    { label: 'Confidentialité', path: '/politique-confidentialite' },
  ]
};
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="brand-logo" @click="router.push('/')">
            <img class="footer-logo" src="/public/icone.svg" alt="Jourdren TP">
          </div>
          <p class="brand-tagline">
            Entreprise familiale spécialisée dans le terrassement et les travaux publics depuis 1973.
          </p>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=100077686390667" target="_blank" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" target="_blank" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4 class="col-title">Services</h4>
            <ul>
              <li v-for="link in footerLinks.services" :key="link.label">
                <router-link :to="link.path">{{ link.label }}</router-link>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="col-title">Entreprise</h4>
            <ul>
              <li v-for="link in footerLinks.company" :key="link.label">
                <router-link :to="link.path">{{ link.label }}</router-link>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="col-title">Contact</h4>
            <ul class="contact-info">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Route du Manoir, 27460 Alizay</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>06 18 04 30 08</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <p class="copyright">© {{ currentYear }} Jourdren TP. Tous droits réservés.</p>
          <div class="legal-links">
            <router-link v-for="link in footerLinks.legal" :key="link.label" :to="link.path">
              {{ link.label }}
            </router-link>
          </div>
        </div>

        <button class="back-to-top" @click="scrollToTop" aria-label="Retour en haut">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--neutral-900);
  color: var(--color-white);
  padding-top: 4rem;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.25fr 2fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--neutral-800);
}

.footer-brand {
  max-width: 280px;
}

.brand-logo {
  cursor: pointer;
  margin-bottom: 1rem;
}

.brand-logo img {
  height: 48px;
  width: auto;
}

.brand-tagline {
  font-size: 0.875rem;
  color: var(--neutral-400);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-links a {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neutral-800);
  border-radius: var(--radius-md);
  color: var(--neutral-400);
  transition: all var(--transition);
}

.social-links a:hover {
  background: var(--color-primary);
  color: var(--neutral-900);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-col h4 {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 1rem;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 0.5rem;
}

.footer-col a {
  font-size: 0.875rem;
  color: var(--neutral-400);
  transition: color var(--transition);
}

.footer-col a:hover {
  color: var(--color-primary);
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--neutral-400);
  font-size: 0.875rem;
}

.contact-info svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.footer-bottom-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.copyright {
  font-size: 0.8125rem;
  color: var(--neutral-500);
}

.legal-links {
  display: flex;
  gap: 1.5rem;
}

.legal-links a {
  font-size: 0.8125rem;
  color: var(--neutral-500);
  transition: color var(--transition);
}

.legal-links a:hover {
  color: var(--color-primary);
}

.back-to-top {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neutral-800);
  border: none;
  border-radius: var(--radius-md);
  color: var(--neutral-400);
  cursor: pointer;
  transition: all var(--transition);
}

.back-to-top:hover {
  background: var(--color-primary);
  color: var(--neutral-900);
}

@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer-brand {
    max-width: none;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-links {
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }

  .contact-info li {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .app-footer {
    padding-top: 3rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-bottom-left {
    flex-direction: column;
    gap: 1rem;
  }

  .legal-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
