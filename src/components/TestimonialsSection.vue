<script setup>
import { ref } from 'vue';

const testimonials = ref([
    {
        name: 'Monsieur D',
        text: '" Très content d\'avoir missionné Mr Jourdren pour le terrassement de notre terrain (2000m2) et notre assainissement. De bons conseils et une réalisation des travaux sérieux. Le résultat est conforme à nos attentes. Merci à Mr Jourdren et son entreprise, je recommanderai si quelqu\'un de mon entourage cherche un terrassier. "'
    },
    {
        name: 'Mr D et Mme L',
        text: '" M. et Mme Jourdren sont des personnes sympathiques et sérieuses. J\'ai apprécié de les avoir pour l\'assainissement lors de la construction de ma maison. Ils sont assez demandés mais répondent toujours présents au final. Donc artisans sérieux, merci à eux. Je vous conseille leur société. M. Gerbet "'
    },
    {
        name: 'Monsieur L',
        text: '" Cette entreprise m\'a effectué mes travaux de vrd et d assainissement. Très bon travail bon conseil. Déclaré conforme par la comcom. Je conseille fortement "'
    }
]);
</script>

<template>
    <section class="testimonials-section">
        <div class="testimonials-grid">
            
            <div v-for="(item, index) in testimonials" :key="index" class="testimonial-card">
                <i class="pi pi-question-circle quote-icon"></i> 
                <h3 class="client-name">{{ item.name }}</h3>
                <p class="client-text">{{ item.text }}</p>
            </div>

        </div>
    </section>
</template>

<style scoped>
.testimonials-section {
    background-color: #fbc02b; /* Le jaune moutarde exact */
    padding: 4rem 2rem;
    color: white;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
    max-width: 1400px;
    margin: 0 auto;
    /* Pas de 'gap' ici car on veut gérer les bordures nous-mêmes */
}

.testimonial-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    
    /* La bordure noire fine à droite de chaque carte */
    border-right: 1px solid rgba(0, 0, 0, 0.1); 
}

/* On enlève la bordure du dernier élément pour ne pas fermer la grille */
.testimonial-card:last-child {
    border-right: none;
}

/* RESPONSIVE : Sur mobile, on passe en 1 colonne et on gère les bordures différemment */
@media (max-width: 768px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
    .testimonial-card {
        border-right: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Bordure en bas sur mobile */
        padding: 2rem 0;
    }
    .testimonial-card:last-child {
        border-bottom: none;
    }
}

.quote-icon {
    font-size: 3rem; /* Gros guillemets */
    margin-bottom: 1.5rem;
    color: black; 
    /* Astuce : Pour avoir exactement les guillemets "66" noirs pleins, 
       tu devras peut-être utiliser une image SVG ou 'pi-quote-left' si PrimeIcons est à jour */
    content: "\e931"; /* Code spécifique si besoin, mais la classe suffit généralement */
}

/* Remplacement de l'icône par le vrai caractère guillemet si l'icone ne plait pas */
.quote-icon::before {
    content: "\201C"; /* Caractère unicode pour gros guillemets */
    font-family: serif;
    font-size: 6rem;
    line-height: 1;
}

.client-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
}

.client-text {
    font-size: 0.95rem;
    line-height: 1.6;
    font-weight: 500;
    max-width: 400px; /* Pour éviter les lignes trop longues */
    text-align: justify;

}
</style>