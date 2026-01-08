<template>
  <div class="contact-page">
    <div class="contact-container">
      <!-- Left Column - Form -->
      <div class="form-section">
        <h1>Demandez votre devis gratuit</h1>
        <p class="description">
          Contactez-nous pour obtenir un devis clair, rapide et entièrement personnalisé selon votre projet de terrassement.
        </p>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Nom/Prénom</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
              >
            </div>

            <div class="form-group">
              <label for="address">Adresse du chantier</label>
              <input 
                type="text" 
                id="address" 
                v-model="form.address"
              >
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">E-mail *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
              >
            </div>

            <div class="form-group">
              <label for="subject">Objet</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject"
              >
            </div>
          </div>

          <div class="form-group full-width">
            <label for="message">Parlez nous de votre projet</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="6"
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">Envoyer</button>
        </form>
      </div>

      <!-- Right Column - Image -->
      <div class="image-section">
        <img src="/contact.avif" alt="Équipement de chantier">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  address: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Ici vous pourrez ajouter la logique d'envoi du formulaire
  alert('Merci pour votre message ! Nous vous contacterons bientôt.')
  // Réinitialiser le formulaire
  form.value = {
    name: '',
    address: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.contact-container {
  text-align: center;
  padding: 5rem 1rem 1rem 1rem;
  background:#fff;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #000;
}

/* Form Section */
.form-section {
  padding: 60px 50px;
  background: white;
}

.page-label {
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 15px;
  color: #333;
}

.form-section h1 {
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.description {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 40px;
  color: #333;
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  width: 100%;
}

.form-group label {
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 1px solid #ddd;
  font-size: 0.95rem;
  font-family: 'Manrope', sans-serif;
  background: white;
  color: #333;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff5722;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  background: #ff5722;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  align-self: flex-start;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #e64a19;
}

/* Image Section */
.image-section {
  position: relative;
  overflow: hidden;
}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .image-section {
    min-height: 400px;
  }

  .form-section {
    padding: 40px 30px;
  }
}

@media (max-width: 768px) {
 

  .form-section {
    padding: 30px 20px;
  }

  .form-section h1 {
    font-size: 1.8rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .image-section {
    min-height: 300px;
  }
}

@media (max-width: 480px) {
  .form-section h1 {
    font-size: 1.5rem;
  }

  .submit-btn {
    width: 100%;
  }
}
</style>