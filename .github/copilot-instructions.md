# Daily Quiz Application AI Development Guide

This document provides essential context for AI agents working with this Vue 3 + TypeScript codebase.

## Project Architecture

- Modern Vue 3 application using Composition API and TypeScript
- Built with Vite for fast development and optimized production builds
- Uses `@nuxt/ui` for UI components
- Vue Router for navigation with lazy-loaded route components
- Type-safe development environment with strict TypeScript configuration

### Key Files & Directories

- `src/App.vue` - Root component using Nuxt UI's `UApp` wrapper
- `src/main.ts` - Application entry point with router and plugin setup
- `src/views/` - Route components (pages)
- `src/components/` - Shared stateless components
- `src/assets/` - Static assets and global styles

## Development Workflows

### Setup & Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

- Hot module replacement enabled
- TypeScript type checking runs in watch mode

### Production Build

```bash
npm run build
```

Runs type checking and production build in parallel

### Code Quality

```bash
npm run lint    # ESLint with automatic fixes
npm run format  # Prettier formatting
```

## Project Conventions

### Routing

- Routes are defined in `src/main.ts`
- Use lazy loading for route components: `() => import('./views/ComponentName.vue')`

### TypeScript

- Strict mode enabled
- Vue component imports use `.vue` extension
- Type checking done via `vue-tsc` instead of `tsc`

### UI Components

- Use `@nuxt/ui` components with `U` prefix (e.g., `<UApp>`)
- Component library docs: https://ui.nuxt.com/

### Code Style

- ESLint and Prettier configured for consistent code style
- Auto-formatting on save recommended

## Environment Requirements

- Node.js: ^20.19.0 || >=22.12.0
- VSCode + Vue Language Features (Volar) extension
- Disable Vetur if installed
