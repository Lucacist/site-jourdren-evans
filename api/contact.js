export default async function handler(req, res) {
  // Activer CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, address, email, subject, message } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Nom et email sont requis' });
    }

    // Construction du corps de l'email
    const emailContent = `
Nouveau message depuis le formulaire de contact

Nom/Prénom: ${name}
Email: ${email}
Adresse du chantier: ${address || 'Non spécifiée'}
Objet: ${subject || 'Aucun'}

Message:
${message || 'Aucun message'}
    `;

    // Utilisation de l'API Resend (service d'envoi d'emails)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Si pas de clé API, log dans la console (pour le dev)
      console.log('Email à envoyer:', emailContent);
      return res.status(200).json({ 
        success: true, 
        message: 'Message reçu (mode dev - pas d\'envoi réel)'
      });
    }

    // Envoi via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'contact@votre-domaine.com', // À remplacer par votre domaine vérifié
        to: 'joudren.tp@gmail.com',
        reply_to: email,
        subject: `Nouveau contact: ${subject || 'Demande de devis'}`,
        text: emailContent
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Erreur Resend:', error);
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès'
    });

  } catch (error) {
    console.error('Erreur:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de l\'envoi du message',
      details: error.message
    });
  }
}
