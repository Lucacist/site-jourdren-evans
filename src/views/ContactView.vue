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

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
          </button>
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

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success', 'error', null

// Clé d'accès Web3Forms - À créer sur https://web3forms.com avec l'email joudren.tp@gmail.com
const WEB3FORMS_ACCESS_KEY = '1429e440-ed53-446d-aadc-779b06b86e4c'

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Préparer les données pour Web3Forms
    const formData = new FormData()
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('subject', form.value.subject || 'Demande de devis')
    
    // Composer le message avec tous les détails
    const fullMessage = `
Adresse du chantier: ${form.value.address || 'Non spécifiée'}

Message:
${form.value.message || 'Aucun message'}
    `
    formData.append('message', fullMessage)
    formData.append('redirect', 'false')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      submitStatus.value = 'success'
      alert('Merci pour votre message ! Nous vous contacterons bientôt.')
      
      // Réinitialiser le formulaire
      form.value = {
        name: '',
        address: '',
        email: '',
        subject: '',
        message: ''
      }
    } else {
      submitStatus.value = 'error'
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  } catch (error) {
    submitStatus.value = 'error'
    alert('Une erreur est survenue. Veuillez réessayer.')
    console.error('Erreur lors de l\'envoi:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding-top: 4rem;
  background: var(--color-white);
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
}

/* Form Section */
.form-section {
  padding: 4rem 3rem;
  background: var(--color-white);
  text-align: left;
}

.form-section h1 {
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 2rem;
  color: var(--neutral-900);
  letter-spacing: -0.025em;
}

.description {
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: var(--neutral-600);
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  width: 100%;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--neutral-700);
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  font-family: var(--font-family);
  background: var(--color-white);
  color: var(--neutral-900);
  transition: border-color var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  background: var(--color-primary);
  color: var(--neutral-900);
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--transition);
  align-self: flex-start;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  background: var(--color-primary-light);
}

.submit-btn:disabled {
  background: var(--neutral-300);
  cursor: not-allowed;
}

/* Image Section */
.image-section {
  position: relative;
  overflow: hidden;
  background: var(--neutral-100);
}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .image-section {
    min-height: 360px;
    order: -1;
  }

  .form-section {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .form-section {
    padding: 2rem 1.5rem;
  }

  .form-section h1 {
    font-size: 1.625rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .image-section {
    min-height: 280px;
  }
}

@media (max-width: 480px) {
  .form-section h1 {
    font-size: 1.375rem;
  }

  .submit-btn {
    width: 100%;
  }
}
</style>