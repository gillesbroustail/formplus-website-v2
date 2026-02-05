# FORM+ Marketing Website

## Démarrage

```bash
npm install
npm run dev
```

## Design Tokens

Les tokens sont définis dans `src/app/globals.css` et exposés dans Tailwind via `tailwind.config.ts`.

Couleurs (extraites de l’ancien site FORM+) :

- `--color-primary`: `#ff6700`
- `--color-accent`: `#feffff`
- `--color-bg`: `#000000`
- `--color-surface`: `#121416`
- `--color-text`: `#feffff`
- `--color-muted`: `#d5d5d5`
- `--color-border`: `#282828`
- `--color-highlight`: `#ff9300`

Typography (extraites de l’ancien site FORM+) :

- `--font-display`: `Montserrat`
- `--font-body`: `Oxygen`

Spacing scale :

- `section-pad` (96px desktop / 72px mobile)
- Layout container via `.container-wide` (1200px max)

Pour remplacer la palette et la typographie :

1. Mettez à jour les variables dans `src/app/globals.css`.
2. Mettez à jour les fontes dans `src/app/layout.tsx` (Next Font).
3. Vérifiez les contrastes (WCAG AA) sur les sections clés.

## Content Update Guide

Clubs :

- Source : `src/config/clubs.ts`
- Ajouter / modifier : nom, adresse, horaires, amenities, image, description.
- Les pages `/clubs/[slug]` sont générées automatiquement.

Abonnements :

- Source : `src/config/memberships.ts`
- Mettre à jour : prix, conditions, sections, badges.
- Les sections “Sur mesure”, “Sans engagement”, “Cours collectifs”, “Muscu cardio”, “FAMILY+” sont définies ici.

Planning :

- Source : `src/config/timetable.ts`
- Planning actuel via Xplor Deciplus (iframe).
- Pour un planning externe en iframe, renseignez `timetableEmbedUrl`.
- Sans embed, la page affiche la grille interne avec filtres.

Espace membre :

- Source : `src/config/site.ts` → `memberArea.baseUrl`
- Page : `src/app/espace-membre/page.tsx`
- L’iframe pointe vers l’espace membre Xplor Deciplus (ex: tunnel `https://member-app.deciplus.pro/formplus`).

Amis de FORM+ :

- Source : `src/config/partners.ts`
- Ajouter les partenaires, catégories et avantages.

Images :

- Placez les visuels officiels dans `public/assets/brand/`.
- Remplacez les placeholders dans les configs si nécessaire.

## SEO

- Métadonnées par page via `metadata`.
- Sitemap et robots : `src/app/sitemap.ts` et `src/app/robots.ts`.

## Formulaire de contact

- Formulaire : `src/components/ContactForm.tsx`
- API mock : `src/app/api/contact/route.ts`
