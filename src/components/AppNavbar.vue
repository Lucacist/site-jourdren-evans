<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const links = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projets", path: "/projets" },
  { label: "À propos", path: "/a-propos" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner">
      <div class="brand" @click="router.push('/')">
        <img src="/public/icone.svg" alt="Jourdren TP">
      </div>

      <div class="menu desktop-menu">
        <router-link 
          v-for="link in links" 
          :key="link.path" 
          :to="link.path" 
          class="menu-item"
          :class="{ active: route.path === link.path }"
        >
          {{ link.label }}
        </router-link>
      </div>

      <div class="navbar-actions">
        <router-link to="/contact" class="btn-contact">
          Contact
        </router-link>

        <button class="burger-btn" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <transition name="mobile-menu">
      <div v-if="isMenuOpen" class="mobile-menu">
        <div class="mobile-menu-inner">
          <router-link 
            v-for="link in links" 
            :key="link.path" 
            :to="link.path" 
            class="mobile-menu-item" 
            @click="closeMenu"
          >
            {{ link.label }}
          </router-link>
          <router-link to="/contact" class="mobile-menu-item mobile-contact" @click="closeMenu">
            Contact
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all var(--transition);
}

.navbar.scrolled {
  background: var(--color-white);
  border-bottom: 1px solid var(--border-color);
  padding: 0.75rem 0;
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  cursor: pointer;
}

.brand img {
  height: 40px;
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.menu-item {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-white);
  text-decoration: none;
  transition: color var(--transition);
}

.navbar.scrolled .menu-item {
  color: var(--neutral-600);
}

.menu-item:hover {
  color: var(--color-primary);
}

.menu-item.active {
  color: var(--color-primary);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-contact {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--neutral-900);
  background: var(--color-primary);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background var(--transition);
}

.btn-contact:hover {
  background: var(--color-primary-light);
}

.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.burger-btn span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--color-white);
  border-radius: 1px;
  transition: all var(--transition);
}

.navbar.scrolled .burger-btn span {
  background: var(--neutral-900);
}

.burger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger-btn.active span:nth-child(2) {
  opacity: 0;
}

.burger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--color-white);
  z-index: 999;
  padding-top: 80px;
}

.mobile-menu-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 2rem 1.5rem;
}

.mobile-menu-item {
  width: 100%;
  max-width: 280px;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--neutral-700);
  text-align: center;
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition);
}

.mobile-menu-item:hover {
  background: var(--neutral-100);
  color: var(--neutral-900);
}

.mobile-menu-item.router-link-active {
  background: var(--color-primary-subtle);
  color: var(--color-primary-dark);
}

.mobile-contact {
  margin-top: 1rem;
  background: var(--color-primary);
  color: var(--neutral-900);
  font-weight: 500;
  border-radius: var(--radius-md);
  padding: 0.875rem 2rem;
}

.mobile-contact:hover {
  background: var(--color-primary-light);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

@media (min-width: 800px) {
  .burger-btn,
  .mobile-menu {
    display: none !important;
  }
}

@media (max-width: 799px) {
  .desktop-menu,
  .btn-contact {
    display: none;
  }

  .burger-btn {
    display: flex;
  }

  .brand img {
    height: 32px;
  }
}
</style>
