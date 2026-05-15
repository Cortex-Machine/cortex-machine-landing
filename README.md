# Cortex-Machine Landing

Minimal Next.js landing page for Cortex-Machine.

This repository contains only the public website surface: brand assets, static pages, and basic contact links. It intentionally does not document private product architecture, research direction, internal plans, or implementation details.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Structure

```text
app/
  page.tsx        Main landing page
  privacy/        Privacy page
  terms/          Terms page
  globals.css     Global styling
public/
  logo-mark.svg
  logo-wordmark.svg
  icon.svg
  favicon files
```

## Brand Assets

Logo and icon assets live in `public/`.

Use `github-icon-1024.png` for GitHub organization/profile imagery.

## Notes

Keep public copy limited and high-level. Avoid adding unpublished product details, technical architecture, investor materials, research notes, or private strategy to this site.
