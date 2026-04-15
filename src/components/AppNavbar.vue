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
  padding: 1rem 1.5rem;
  transition: all var(--transition);
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  box-shadow: var(--shadow);
}

.brand {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.brand img {
  height: 36px;
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.menu-item {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--neutral-600);
  text-decoration: none;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-md);
  transition: all var(--transition);
}

.menu-item:hover {
  color: var(--neutral-900);
}

.menu-item.active {
  color: var(--neutral-900);
  font-weight: 600;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-contact {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-white);
  background: var(--neutral-900);
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all var(--transition);
}

.btn-contact:hover {
  background: var(--neutral-800);
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
  background: var(--neutral-700);
  border-radius: 1px;
  transition: all var(--transition);
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
  padding-top: 100px;
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
  background: var(--neutral-100);
  color: var(--neutral-900);
}

.mobile-contact {
  margin-top: 1rem;
  background: var(--neutral-900);
  color: var(--color-white);
  font-weight: 500;
  border-radius: var(--radius-full);
  padding: 0.875rem 2rem;
}

.mobile-contact:hover {
  background: var(--neutral-800);
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
  .navbar {
    padding: 0.75rem 1rem;
  }

  .navbar-inner {
    padding: 0.375rem 0.375rem 0.375rem 0.75rem;
  }

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
