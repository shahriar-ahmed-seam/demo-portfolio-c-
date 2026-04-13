# Pokémon Themed Portfolio

A large, nested, data-driven Pokémon-inspired portfolio built with React + TypeScript + Vite.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (Live)

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push this project to a GitHub repository named `pokemonbased`.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` and the workflow deploys automatically.

The Vite base path is configured in `vite.config.ts` as `/pokemonbased/`, so the site is ready for:

`https://<your-username>.github.io/pokemonbased/`
