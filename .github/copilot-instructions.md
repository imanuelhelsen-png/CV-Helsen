# AI Coding Guidelines for cv-pribadi

## Project Overview
This is a personal portfolio website built with Next.js 16 App Router, featuring a single-page design with hero, skills, experience sections, and footer. Content is in Indonesian, targeting a dark theme with cyan/blue accents.

## Architecture
- **App Router Structure**: Uses `app/` directory with `layout.tsx` (root layout with fonts) and `page.tsx` (main content)
- **Styling**: Tailwind CSS v4 with custom CSS variables in `globals.css`, glassmorphism effects via `bg-slate-800/50` and `backdrop-blur-md`
- **Fonts**: Geist Sans/Mono loaded via `next/font/google` with CSS variables `--font-geist-sans`

## Key Patterns
- **Color Scheme**: Dark slate (`bg-slate-900`, `text-slate-200`) with cyan accents (`from-cyan-400 to-blue-500`)
- **Layout**: Fixed navbar with `backdrop-blur-md`, centered content in `max-w-4xl mx-auto`
- **Components**: Inline array mapping for skills cards, timeline design for experience with absolute positioned dots
- **Animations**: `animate-fade-in-up` class (assumed custom), `hover:scale-105` transforms

## Development Workflow
- **Start Dev**: `npm run dev` (serves on localhost:3000)
- **Build**: `npm run build` (static export ready)
- **Lint**: `npm run lint` (ESLint with Next.js rules)
- **TypeScript**: Strict mode enabled, paths `@/*` map to `./`

## Conventions
- **Language**: Indonesian text for portfolio content (e.g., "Portofolio Saya", "Pengalaman")
- **Icons**: Emoji for visual elements (👨‍💻, ⚡, 🎨, 🛡️)
- **Responsive**: Mobile-first with `md:` breakpoints
- **Selection**: Custom `selection:bg-cyan-500 selection:text-white`

## File Structure
- `app/page.tsx`: Main portfolio content with sections
- `app/layout.tsx`: Root layout with metadata and fonts
- `app/globals.css`: Tailwind imports and theme variables
- Configs: Standard Next.js setup with Tailwind v4 PostCSS

When adding new sections, follow the existing pattern: `<section className="mb-20">` with heading styles `text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4`</content>
<parameter name="filePath">c:\Users\Newton\cv-pribadi\.github\copilot-instructions.md