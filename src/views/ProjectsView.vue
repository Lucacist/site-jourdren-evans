<script setup>
import { ref } from "vue";

// J'ai simplifié les données : une seule propriété 'image' par projet
const projects = ref([
  {
    title: "Etalement des terres et pelouse",
    src: "/img/projet/img0.PNG",
    type: "image"
  },
  {
    title: "Pose de bordure et gravel",
    type: "image",
    src: "/img/projet/bordure.png"
  },
  {
    title: "Réalisation d'un bicouche",
    type: "image",
    src: "/img/projet/bicouche.png"
  },
  {
    title: "Réalisation parking en fraisa",
    type: "image",
    src: "/img/projet/fraisa.png"
  },
  {
    title: "Etalement terres et parking",
    type: "image",
    src: "/img/services/amenagement.png"
  },
  {
    title: "Chemin en gravel et étalement des terres",
    type: "image",
    src: "/img/projet/image1.jpeg"
  },
  {
    title: "Chemin en gravel et étalement des terres",
    type: "image",
    src: "/img/projet/image2.jpeg"
  },
  {
    title: "Démolition",
    type: "image",
    src: "/img/projet/image3.jpeg"
  },
  {
    title: "Processus d'un bicouche",
    type: "video",
    src: "/img/projet/video.mov"
  },
]);
</script>

<template>
  <div class="page-container">
    
    <div class="page-header">
      <h1>Nos Réalisations</h1>
      <p>Découvrez nos derniers chantiers en images</p>
    </div>

    <div class="projects-grid">
      
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        
        <img 
          v-if="project.type === 'image'" 
          :src="project.src" 
          :alt="project.title" 
          class="bg-media" 
        />

        <video 
          v-else-if="project.type === 'video'" 
          class="bg-media" 
          autoplay 
          muted 
          loop 
          playsinline
        >
          <source :src="project.src">
          Votre navigateur ne supporte pas la vidéo.
        </video>
        
        <div class="project-info">
          <h3>{{ project.title }}</h3>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-bottom: 4rem;
  background: var(--color-white);
}

.page-header {
  text-align: center;
  padding: 8rem 1.5rem 4rem;
  background: var(--color-primary-light);
}

.page-header h1 {
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 2.25rem;
  color: var(--color-white);
  letter-spacing: -0.025em;
}

.page-header p {
  font-size: 1rem;
  color: var(--neutral-100);
}

/* Grille */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

/* Carte projet */
.project-card {
  position: relative;
  height: 360px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: border-color var(--transition);
}

.project-card:hover {
  border-color: var(--neutral-300);
}

/* Media en arrière-plan */
.bg-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transition: transform 0.4s ease;
}

.project-card:hover .bg-media {
  transform: scale(1.03);
}

/* Info projet */
.project-info {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 70%, transparent 100%);
}

.project-info h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0;
  letter-spacing: -0.01em;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

.project-info p {
  font-size: 0.875rem;
  color: var(--neutral-300);
  margin: 0;
}

@media (max-width: 768px) {
  .page-header {
    padding: 6rem 1.5rem 2.5rem;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

  .projects-grid {
    padding: 2rem 1rem;
    gap: 1rem;
  }

  .project-card {
    height: 280px;
  }
}
</style>