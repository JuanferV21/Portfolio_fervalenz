# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router lives in `src/app` with nested routes `work`, `about`, `contact`, and project-wide layout in `layout.tsx`. Shared layouts reside in `src/components/layout`, reusable UI sections such as `ProjectsList.tsx` in `src/components/ui`. Static data sits in `src/data`, utilities in `src/lib`, and type definitions in `src/types`. Place static assets inside `public`, grouping related images under folders like `public/placeholder-images`.

## Build, Test, and Development Commands
`npm run dev` serves http://localhost:3000 via Turbopack and is the default development loop. `npm run build` produces the production bundle; run it before releasing or deploying. `npm run start` boots the compiled output for smoke tests. `npm run lint` runs ESLint with the Next.js config and must pass before pushing.

## Coding Style & Naming Conventions
Use TypeScript and functional components. Indent with two spaces, keep multiline JSX props on separate lines, and order Tailwind classes by layout → spacing → color cues. Import project modules through the `@/` alias to avoid relative paths. Components and hooks use PascalCase, utilities and helpers camelCase, and route folders kebab-case to match the existing tree.

## Testing Guidelines
The repo has no automated tests yet, so linting is the current guardrail. When adding coverage, place component specs in `src/__tests__` as `ComponentName.spec.tsx` using React Testing Library and Jest DOM. Snapshot visually dense sections like `DeveloperHero` and assert data helpers from `src/lib`. Document any new npm scripts (for example `npm run test`) in the README when you introduce them.

## Commit & Pull Request Guidelines
Existing commits are short and descriptive; keep subjects imperative and under ~60 characters (e.g., `Add masonry animation controls`) and add detail in the body if needed. Use branches such as `feature/<scope>` or `fix/<scope>`. Pull requests should list the motivation, testing evidence (`npm run lint`, `npm run build`), and UI diffs via screenshots or recordings. Reference related issues directly in the PR description.

## Environment & Configuration
Store API keys in `.env.local` and keep the file out of source control. Document new environment variables in the README with safe defaults. Preface client-exposed values with `NEXT_PUBLIC_` when integrating services like Sanity to avoid leaking server-only credentials.
