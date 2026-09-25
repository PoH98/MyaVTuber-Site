# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Live2D

The desktop mascot uses PixiJS 8 and `untitled-pixi-live2d-engine` with the existing
`public/live2d/MYAAA` model. The client plugin loads Core before importing the engine.
`public/script/live2dcubismcore-5.2.min.js` is the vendored Cubism 5.2 Core from
[Live2D's versioned distribution](https://cubism.live2d.com/sdk-web/core/05/live2dcubismcore.min.js).
The engine requires the drawable render-order API from this Core version; Cubism 5.3 changes it.
Keep its license header and versioned filename when updating it to avoid stale browser caches.
