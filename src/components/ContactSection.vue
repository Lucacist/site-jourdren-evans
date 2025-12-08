<script setup>
// Pas de script complexe nécessaire ici, c'est surtout de la mise en page
</script>

<template>
    <section class="contact-section">
        
        <h2 class="main-title">Nous contacter</h2>

        <div class="info-grid">
            
            <div class="info-col">
                <h3 class="col-title">Adresse Locaux</h3>
                <p>Route du Manoir,</p>
                <p>27460 Alizay</p>
            </div>

            <div class="info-col">
                <h3 class="col-title">Contact</h3>
                <p>02.32.92.24.29</p>
                <p>06.18.04.30.08</p>
                <br>
                <p>info@monsite.fr</p>
                
                <div class="social-icons">
                    <i class="pi pi-facebook" style="font-size: 1.5rem"></i>
                    <i class="pi pi-instagram" style="font-size: 1.5rem"></i>
                </div>
            </div>

            <div class="info-col">
                <h3 class="col-title">Heures d'ouverture</h3>
                <div class="hours-grid">
                    <span>Lundi</span> <span>8 h - 18 h</span>
                    <span>Mardi</span> <span>8 h - 18 h</span>
                    <span>Mercredi</span> <span>8 h - 18 h</span>
                    <span>Jeudi</span> <span>8 h - 18 h</span>
                    <span>Vendredi</span> <span>8 h - 18 h</span>
                </div>
            </div>

        </div>

        <div class="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.680696956798!2d1.1738223156847847!3d49.32239697933568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e1279a40590a2d%3A0x608e019623098e9b!2sRoute%20du%20Manoir%2C%2027460%20Alizay!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr" 
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
    background-color: white;
    padding: 4rem 2rem; /* Pas de padding en bas car la map colle au bord si tu veux */
    color: #1a1a1a;
    text-align: center;
}

.main-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 4rem;
    color: black;
}

/* GRILLE DES 3 COLONNES */
.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto 5rem auto;
    text-align: left; /* Texte aligné à gauche dans les colonnes comme sur l'image */
}

/* Sur mobile, on centre tout pour faire plus joli */
@media (max-width: 768px) {
    .info-grid {
        text-align: center;
    }
    .hours-grid {
        justify-content: center;
    }
}

.col-title {
    color: #fbc02b; /* Le fameux Jaune Moutarde */
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
}

.info-col p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: #444;
}

.social-icons {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    /* Si aligné à gauche : */
    justify-content: flex-start; 
}
@media (max-width: 768px) {
    .social-icons { justify-content: center; }
}

.social-icons i {
    cursor: pointer;
    transition: color 0.2s;
    color: black;
}
.social-icons i:hover {
    color: #fbc02b;
}

/* GRILLE DES HORAIRES */
.hours-grid {
    display: grid;
    grid-template-columns: 100px 1fr; /* Colonne fixe pour les jours */
    gap: 0.5rem;
    font-size: 1.1rem;
    color: #444;
}

/* LA CARTE */
.map-container {
    width: 100%;
    /* On enlève les marges pour qu'elle touche les bords si souhaité, 
       sinon tu peux mettre un max-width */
    filter: grayscale(100%); /* Optionnel : rend la carte grise pour le style "Pro" */
}

.google-map {
    display: block; /* Enlève l'espace blanc sous l'iframe */
}
</style>