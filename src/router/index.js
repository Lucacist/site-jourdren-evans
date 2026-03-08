import { createRouter, createWebHistory } from 'vue-router'

// Importation des vues
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import PolitiqueConfidentialiteView from '../views/PolitiqueConfidentialiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/services', name: 'services', component: ServicesView },
    { path: '/projets', name: 'projects', component: ProjectsView },
    { path: '/a-propos', name: 'about', component: AboutView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/mentions-legales', name: 'mentions-legales', component: MentionsLegalesView },
    { path: '/politique-confidentialite', name: 'politique-confidentialite', component: PolitiqueConfidentialiteView },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router