# Jourdren TP

Site vitrine officiel de la société **Jourdren TP**, pensé comme une landing page claire et rassurante pour présenter l’entreprise, ses services et faciliter la prise de contact.

## Présentation

Jourdren TP est une entreprise familiale spécialisée dans les travaux de **terrassement**, de **VRD** et d’**aménagements extérieurs**. Le site met en avant le savoir-faire de l’entreprise, son ancrage local en Normandie et ses réalisations, avec un parcours simple pour obtenir un devis ou contacter l’équipe.

La page d’accueil est construite comme une landing page orientée conversion avec :

- un hero visuel avec appel à l’action
- une mise en avant des services principaux
- une section à propos de l’entreprise
- des témoignages clients
- un bloc contact avec coordonnées et carte

## Objectif du site

L’objectif est de présenter rapidement ce que fait Jourdren TP et de donner aux visiteurs les informations essentielles pour passer à l’action:

- découvrir les prestations proposées
- consulter les projets et les réalisations
- contacter l’entreprise
- demander un devis

## Fonctionnalités

- navigation entre les pages Services, Projets, À propos et Contact
- présentation des services de terrassement, VRD et aménagements extérieurs
- témoignages clients pour renforcer la confiance
- coordonnées complètes et horaires d’ouverture
- page des mentions légales et politique de confidentialité
- intégration d’une carte Google Maps

## Stack technique

- Vue 3
- Vite
- Vue Router
- PrimeVue / PrimeIcons
- Tailwind CSS 4

## Structure du projet

- `src/views` : pages du site
- `src/components` : sections réutilisables de la landing page
- `src/router` : configuration des routes
- `public` : assets statiques et fichiers SEO
- `api` : fonction backend pour le formulaire de contact

## Lancer le projet

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
```

## Déploiement

Le projet est prêt pour un déploiement sur Vercel via le fichier `vercel.json`.

