<script setup>
import { ref } from 'vue';

const testimonials = ref([
    {
        name: 'Monsieur D.',
        location: 'Alizay',
        text: 'Très content d\'avoir missionné Mr Jourdren pour le terrassement de notre terrain (2000m²) et notre assainissement. De bons conseils et une réalisation des travaux sérieux. Le résultat est conforme à nos attentes.',
        rating: 5
    },
    {
        name: 'M. et Mme L.',
        location: 'Normandie',
        text: 'M. et Mme Jourdren sont des personnes sympathiques et sérieuses. J\'ai apprécié de les avoir pour l\'assainissement lors de la construction de ma maison. Artisans sérieux, je vous conseille leur société.',
        rating: 5
    },
    {
        name: 'Monsieur G.',
        location: 'Rouen',
        text: 'Cette entreprise m\'a effectué mes travaux de VRD et d\'assainissement. Très bon travail, bons conseils. Déclaré conforme par la communauté de communes. Je conseille fortement.',
        rating: 5
    }
]);
</script>

<template>
    <section class="testimonials-section">
        <div class="testimonials-container">
            <div class="testimonials-header">
                <span class="section-badge">Témoignages</span>
                <h2 class="section-title">Ce que disent nos clients</h2>
            </div>

            <div class="testimonials-grid">
                <div v-for="(item, index) in testimonials" :key="index" class="testimonial-card">
                    <div class="quote-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.004zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.012z"/>
                        </svg>
                    </div>
                    
                    <p class="testimonial-text">{{ item.text }}</p>
                    
                    <div class="testimonial-rating">
                        <svg v-for="star in item.rating" :key="star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    
                    <div class="testimonial-author">
                        <span class="author-name">{{ item.name }}</span>
                        <span class="author-location">{{ item.location }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonials-section {
    background: var(--color-white);
    padding: 6rem 0;
}

.testimonials-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.testimonials-header {
    text-align: center;
    margin-bottom: 3.5rem;
}

.section-badge {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-primary-dark);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
}

.section-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--neutral-900);
    letter-spacing: -0.025em;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
}

.testimonial-card {
    background: var(--color-white);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    transition: border-color var(--transition);
}

.testimonial-card:hover {
    border-color: var(--neutral-300);
}

.quote-icon {
    color: var(--color-primary);
    margin-bottom: 1rem;
    opacity: 0.8;
}

.testimonial-text {
    font-size: 0.9375rem;
    color: var(--neutral-600);
    line-height: 1.7;
    flex: 1;
    margin-bottom: 1.5rem;
}

.testimonial-rating {
    display: flex;
    gap: 0.125rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.testimonial-author {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
}

.author-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--neutral-900);
}

.author-location {
    font-size: 0.8125rem;
    color: var(--neutral-500);
}

@media (max-width: 1024px) {
    .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .testimonials-section {
        padding: 4rem 0;
    }

    .testimonials-header {
        margin-bottom: 2.5rem;
    }

    .section-title {
        font-size: 1.625rem;
    }

    .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .testimonial-card {
        padding: 1.5rem;
    }
}
</style>