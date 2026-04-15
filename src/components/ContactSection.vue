<script setup>
</script>

<template>
    <section class="contact-section">
        <div class="contact-container">
            <div class="contact-header">
                <span class="section-badge">Contact</span>
                <h2 class="section-title">Parlons de votre projet</h2>
                <p class="section-subtitle">
                    Contactez-nous pour un devis gratuit ou pour toute question
                </p>
            </div>

            <div class="contact-grid">
                <div class="contact-card">
                    <div class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                    </div>
                    <h3 class="contact-card-title">Adresse</h3>
                    <p class="contact-card-text">Route du Manoir</p>
                    <p class="contact-card-text">27460 Alizay</p>
                </div>

                <div class="contact-card">
                    <div class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                    </div>
                    <h3 class="contact-card-title">Téléphone</h3>
                    <p class="contact-card-text">02 32 92 24 29</p>
                    <p class="contact-card-text">06 18 04 30 08</p>
                </div>

                <div class="contact-card">
                    <div class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                    </div>
                    <h3 class="contact-card-title">Horaires</h3>
                    <p class="contact-card-text">Lun - Ven : 8h - 18h</p>
                    <p class="contact-card-text secondary">Sam - Dim : Fermé</p>
                </div>
            </div>

            <div class="contact-cta">
                <RouterLink to="/contact" class="btn btn-primary btn-lg">
                    Demander un devis gratuit
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </RouterLink>
            </div>
        </div>

        <div class="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.8690940242027!2d1.191870819172837!3d49.316762682059014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e126552b0c10bd%3A0x1daa03dc63711927!2sValoLignum%20Environnement!5e0!3m2!1sfr!2sfr!4v1769694871915!5m2!1sfr!2sfr" 
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
                class="google-map"
            ></iframe>
        </div>
    </section>
</template>

<style scoped>
.contact-section {
    background: var(--neutral-50);
}

.contact-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 6rem 1.5rem;
}

.contact-header {
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
    margin-bottom: 0.75rem;
    letter-spacing: -0.025em;
}

.section-subtitle {
    font-size: 0.9375rem;
    color: var(--neutral-600);
    line-height: 1.6;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-bottom: 3rem;
}

.contact-card {
    background: var(--color-white);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    text-align: center;
    transition: border-color var(--transition);
}

.contact-card:hover {
    border-color: var(--neutral-300);
}

.contact-icon {
    width: 48px;
    height: 48px;
    background: var(--color-primary-subtle);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.25rem;
    color: var(--color-primary-dark);
}

.contact-card-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--neutral-900);
    margin-bottom: 0.625rem;
}

.contact-card-text {
    font-size: 0.875rem;
    color: var(--neutral-600);
    margin-bottom: 0.25rem;
}

.contact-card-text.secondary {
    color: var(--neutral-400);
}

.contact-cta {
    text-align: center;
}

.contact-cta .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--neutral-900);
    background: var(--color-primary);
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: background var(--transition);
}

.contact-cta .btn:hover {
    background: var(--color-primary-light);
}

.map-container {
    width: 100%;
    filter: grayscale(60%);
    transition: filter 0.3s ease;
}

.map-container:hover {
    filter: grayscale(0%);
}

.google-map {
    display: block;
}

@media (max-width: 1024px) {
    .contact-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .contact-container {
        padding: 4rem 1.5rem;
    }

    .contact-header {
        margin-bottom: 2.5rem;
    }

    .section-title {
        font-size: 1.625rem;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .contact-card {
        padding: 1.5rem;
    }
}
</style>