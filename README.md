# Site web d'Agnès Gillot - Naturopathe

Ce dépôt contient le code source du site web professionnel d'Agnès Gillot, naturopathe à Héric (44).

## Technologies utilisées

- Next.js
- Tailwind CSS
- Sanity CMS
- TypeScript

## Configuration

### Variables d'environnement

Pour le développement local, créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```bash
# Variables d'environnement Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=lwkszdwh
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-05-05

# Variables d'environnement Google
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_cle_api_google_maps
NEXT_PUBLIC_GOOGLE_PLACE_ID=votre_place_id_google
```

Pour la production, assurez-vous de configurer ces variables d'environnement dans votre plateforme d'hébergement.

### Sanity Studio

Le studio Sanity est intégré à l'application et accessible à l'adresse `/studio`.

## Développement

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## Déploiement

Le site est déployé automatiquement sur Netlify à chaque push sur la branche main.

## Contact

Pour toute question concernant ce site, veuillez contacter Mélanie Kitenge.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
