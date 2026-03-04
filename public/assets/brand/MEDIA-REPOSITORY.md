# Media Repository (FORM+)

Use this folder + one config file to manage all website visuals.

## 1) Add or remove files

Put your files in:

- `/public/assets/brand/` for images (`.jpg`, `.png`, `.webp`)
- `/public/assets/brand/` for videos (`.mp4`)

You can delete old files any time.

## 2) Update one single config file

Edit:

- `src/config/mediaRepository.ts`

Change only:

- `src` paths (example: `'/assets/brand/new-hero.jpg'`)
- `alt` text
- `label` text (for image overlays)

## 3) Deploy

```bash
git add .
git commit -m "Update media repository"
git push origin main
```

## Notes

- If a `video` path is wrong, the page still shows the poster image.
- Keep video files short and light for fast loading (recommended: 5-10s loop, < 3MB).
