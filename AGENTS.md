## What We're Building
A preview of websites for dental clients by reviewing their current website and building a more modern, scalable, and user-friendly version.
Target user: Dental Offices in Austin, Texas. Core problem: Modernize outdated websites and improve user experience.

## Tech Stack
- Frontend: Vite, TypeScript, Tailwind, framer, lucide icons
- Hosting: Netlify

## Coding Conventions
- TypeScript strict mode. No `any` types.
- Functional components only. No class components.
- Error handling: always use try/catch, log to console.error, return structured error

## What NOT to Do
- Do not install new packages without checking package.json first
- Do not modify .env files directly - update .env.example and note what's needed
- Do not delete files - comment out or archive instead
- Do not make git commits without listing what changed and why

## Rules
- When a new client is given, always use the sub-agents to building the preview
- Do not make a duplicate of an existing client's website.
- Always try to search for modern web templates and mix and match components to create a new website.
- Do not hallucinate of make up data of the client. Try to thoroughly scrape data from existing website and use that for the preview website.
