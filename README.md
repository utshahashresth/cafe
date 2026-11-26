# Cafe

A Next.js 16 + TypeScript starter for a cafe website, wired to a **Supabase** backend.

> **Status:** early stage. The Supabase client and a `/users` page that reads from a `users` table are working scaffolding; the cafe pages themselves are still to be built.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS
- Supabase (`@supabase/supabase-js`)

## Getting Started

```bash
git clone https://github.com/utshahashresth/cafe.git
cd cafe
npm install
```

Copy the example env file and add your own Supabase project values:

```bash
cp .env.example .env.local
```

```bash
npm run dev
```

Open <http://localhost:3000>. The `/users` route lists rows from a `users` table (`id`, `name`) in your Supabase project.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  page.tsx          # Home page
  users/page.tsx    # Reads and lists rows from Supabase
lib/supabase.ts     # Supabase client
```

## Roadmap

- Menu, categories and item pages backed by Supabase tables
- Ordering / reservation flow
- Authentication and row-level security policies
