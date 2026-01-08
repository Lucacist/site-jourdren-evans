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
    src: "/img/projet/IMG_7820.jpg"
  },
  {
    title: "Réalisation d'un bicouche",
    type: "image",
    src: "/img/projet/img2.jpeg"
  },
  {
    title: "Réalisation parking en fraisa",
    type: "image",
    src: "/img/projet/img4.jpg"
  },
  {
    title: "Etalement terres et parking",
    type: "image",
    src: "/img/projet/img3.jpeg"
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
}

.page-header {
  text-align: center;
  padding: 5rem 1rem 1rem 1rem;
  background:#fbc02b;
  margin-bottom: 2rem;
  color: #000;
}

.page-header h1 {
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

/* --- GRILLE --- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* --- LA CARTE (Conteneur Relatif) --- */
.project-card {
  position: relative; /* Indispensable pour que l'image absolute reste dedans */
  height: 400px;      /* On fixe une hauteur car il n'y a plus d'image qui pousse le contenu */
  border-radius: 12px;
  overflow: hidden;   /* Coupe l'image qui dépasse */
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  /* Flex pour positionner le texte en bas */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Pousse le texte vers le bas */
}

.project-card:hover {
  transform: translateY(-5px);
}

/* --- L'IMAGE EN ARRIÈRE-PLAN --- */
.bg-media {
  position: absolute; /* Sort du flux normal */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Remplit tout l'espace */
  z-index: 0; /* Tout au fond */
  transition: transform 0.6s ease;
}

/* Effet de zoom lent au survol */
.project-card:hover .bg-media {
    transform: scale(1.1);
}

/* --- LE TEXTE ET LE DÉGRADÉ --- */
.project-info {
  position: relative;
  z-index: 1; /* Par dessus l'image */
  padding: 2rem;
  color: white; /* Texte blanc obligatoire sur photo */
  
  /* Le dégradé magique pour la lisibilité */
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%);
  
  width: 100%;
}

.project-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  text-transform: uppercase;
}

.project-info p {
  font-size: 1rem;
  color: #ddd; /* Gris très clair */
  margin: 0;
}

@media (max-width: 768px) {
  .projects-grid {
    padding: 0;
  }
}
</style>