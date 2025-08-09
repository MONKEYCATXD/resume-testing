# Overview

This is a full-stack TypeScript application built with Express.js backend and React frontend, designed as a personal resume/portfolio website for Cujo Qt showcasing Minecraft server moderation experience. The application features a black and white bubble box design theme, working contact form with SendGrid integration, and focuses on gaming/community management career rather than traditional tech roles.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Styling**: Tailwind CSS with CSS custom properties for theming, supporting light/dark modes

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (@neondatabase/serverless for serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development**: Hot reload with tsx, production builds with esbuild
- **API Design**: RESTful API structure with /api prefix for all endpoints

## Data Storage
- **Primary Database**: PostgreSQL hosted on Neon (serverless)
- **ORM**: Drizzle ORM with drizzle-kit for migrations and schema management
- **Schema Location**: Shared schema definitions in `/shared/schema.ts` for type safety across frontend/backend
- **Development Fallback**: In-memory storage implementation for development/testing

## Development Architecture
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Build System**: Vite for frontend, esbuild for backend production builds
- **Development Server**: Integrated Vite dev server with Express backend proxy
- **Path Aliases**: TypeScript path mapping for clean imports (@/ for client, @shared for shared types)

## External Dependencies

- **Database Hosting**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives for accessible component foundations
- **Development Tools**: Replit-specific plugins for development environment integration
- **Font Loading**: Google Fonts (Inter font family)
- **Icons**: Lucide React icon library
- **Build Tools**: Vite, esbuild, and TypeScript compiler
- **CSS Framework**: Tailwind CSS with PostCSS for processing

## Recent Changes (August 2025)

**Contact Form Integration**: Successfully implemented working contact form with SendGrid email delivery to business@cujoqt.com. Form includes proper validation, loading states, and success/error messaging.

**Resume Customization**: Customized for Cujo Qt with focus on Minecraft server moderation experience including 6 server positions, 2+ years experience, and 4250+ community members. Removed all social media links, skills, education, and certifications sections per user request.

**Design Theme**: Implemented black and white bubble box design with clean, professional layout optimized for gaming/moderation career presentation.

The application is structured as a resume/portfolio site with a working contact form, smooth scrolling navigation, and responsive design. The backend handles contact form submissions via SendGrid and provides a foundation that can be extended with additional features.