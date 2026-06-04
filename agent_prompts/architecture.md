# Enmobil Sigorta - Architecture Overview

## Tech Stack
- **Framework**: Next.js 16.2.3 (App Router)
- **Language**: TypeScript & React 19
- **Styling**: Tailwind CSS v4 (inline theme config in globals.css)
- **Animations**: GSAP (`@gsap/react`)
- **Content**: MDX (with `@next/mdx`, `remark-gfm`)
- **Icons**: `lucide-react`

## Project Structure (Feature-Sliced Design - FSD)
The project strictly follows the Feature-Sliced Design (FSD) architecture:
- `src/app`: App-level routing and global configurations (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/pages`: Page components (currently empty or used differently as Next.js app router handles routing in `app`).
- `src/widgets`: Independent UI blocks composed of features and entities (e.g., `Header`, `Hero`, `Footer`, `QuoteForm`, `FAQ`).
- `src/features`: User interactions and business logic (e.g., forms, specific interactive components).
- `src/entities`: Business entities (e.g., User, Policy, Article).
- `src/shared`: Reusable modules, UI kits, configuration, and helpers (e.g., `components`, `config/index.ts`, `lib`).
- `src/content`: Markdown/MDX content files for static pages (KVKK, terms, etc.).

## Conventions
- Use Tailwind for styling.
- Use GSAP for complex and smooth animations.
- Maintain the FSD boundaries. Do not import from higher layers into lower layers (e.g., `shared` cannot import from `widgets`).
- Centralize configuration in `src/shared/config`.
