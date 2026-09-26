# FoodShop

Restaurant ordering storefront. A venue payload supplies the menu, item modifiers, and brand colors. The screen lets someone browse sections and build a cart.

## What it is

A single-page storefront: header, section navigation, menu, item modal with modifiers, and a cart with subtotal and total. There is no checkout request in this repository.

## Why it exists

The same interface has to follow a venue's own colors and catalog instead of a fixed theme and a hardcoded menu.

## Highlights

- Brand colors are read from the venue `webSettings` and applied to the styled-components theme.
- Light and dark mode stay in `localStorage`.
- Menu items, sections, and modifiers are modeled as separate types and rendered from the payload.
- Cart state lives in React context. Totals are derived from the current lines.
- A small Express process proxies the catalog so the browser can call it from localhost.

## Architecture

The Vite app talks only to `http://localhost:3000/proxy`. That process forwards the path to the upstream catalog. The UI loads one venue from that catalog.

`/sign-in` and `/contact` are registered in the router and currently render the same homepage.

## Tech

React, TypeScript, Vite, React Router, MUI, styled-components, Axios, Express

## Running locally

Requirements: Node.js 18+.

```bash
npm install
node server.js
```

In a second terminal:

```bash
npm run dev
```

Vite serves the app on port 5173. The proxy listens on port 3000. The menu appears only if the upstream catalog responds.
