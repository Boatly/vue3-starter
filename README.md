# simple-app

A starter template for Vue 3 which uses:

- pnpm package manager
- Typescript
- Tailwind https://tailwindcss.com/
- PrimeVue https://primevue.org/
- AutoRouting https://github.com/posva/unplugin-vue-router
- Auto imports https://github.com/unplugin/unplugin-auto-import
- TanStack VueQuery https://tanstack.com/query/v5/docs/framework/vue/overview
- Supabase for authentication

See `HowThisProjectWasCreated.md` for a step by step guide of how this project was created from scratch.

## Project Layout

The project has a sign in page and an authenticated home page.

## Project Setup

```sh
pnpm install
```

Create a `.env.local` file and add your SupaBase keys:

```
VITE_SUPABASE_URL=https://{your supabase project id}.supabase.co
VITE_SUPABASE_KEY={your supabase project key}
VITE_API_URL=http://localhost:5274/api/
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```
