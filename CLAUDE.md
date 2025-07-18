lo# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm dev` - Start development server (Next.js)
- `pnpm build` - Build for production  
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm type-check` - Run TypeScript check without emitting files
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting without fixing

### Testing
- `pnpm test` - Run Jest tests
- `pnpm test:watch` - Run Jest in watch mode
- `pnpm test:coverage` - Run tests with coverage report

### Critical Development Notes
- Uses **pnpm** as package manager (package.json specifies packageManager)
- **Build errors are NOT ignored** - all TypeScript and ESLint errors must be fixed before deployment
- Pre-commit hooks enforce code quality (husky + lint-staged)
- Conventional commits enforced via commitlint with strict type rules

## Architecture Overview

### Tech Stack
- **Next.js 14** with App Router (not Pages Router)
- **TypeScript** with strict mode enabled
- **Tailwind CSS** + shadcn/ui component system
- **React Hook Form** + Zod for form validation
- **i18n support** for English/Chinese (lib/i18n.ts, lib/translations.ts)

### Key Architectural Patterns

#### Component System
- **shadcn/ui foundation**: All UI components extend shadcn/ui primitives
- **Radix UI**: Provides accessibility and behavior primitives
- **CVA (Class Variance Authority)**: Component variant management
- **Import alias**: `@/*` maps to project root
- **asChild prop pattern**: Used throughout for component composition

#### Internationalization Architecture
- **Default locale**: English (`en`)
- **Supported locales**: English (`en`), Chinese (`zh`)
- **URL structure**: `/` for English, `/zh` for Chinese
- **Translation system**: Centralized in `lib/translations.ts`
- **Locale detection**: Via URL segments in `lib/i18n.ts`

#### Form & Validation Pattern
- **React Hook Form**: All forms use this library
- **Zod schemas**: Define validation rules in `lib/validation.ts`
- **@hookform/resolvers**: Integrates Zod with React Hook Form
- **Type safety**: Forms are fully typed with TypeScript

#### Testing Configuration
- **Jest**: Test runner with Next.js integration
- **jsdom**: Browser environment simulation
- **@testing-library/react**: Component testing utilities
- **Setup**: `jest.setup.js` configures test environment
- **Coverage**: Tracks components/, app/, lib/, hooks/ directories

### Security & Performance
- **Security headers**: Configured in `next.config.mjs` (CSP, XSS protection, etc.)
- **Image optimization**: Next.js Image component with custom domains
- **Font optimization**: Inter font with display: swap
- **Error boundaries**: Global error handling in layout
- **SEO optimization**: Structured data, meta tags, sitemap

### Business Context
Corporate website for **Luckymobi Technology Limited** - AI company with three focus areas:
1. AI Creative Tools (Sybau Picture)
2. AI Interactive Games  
3. AI E-commerce Solutions

Targets global markets with emphasis on English/Chinese language support.