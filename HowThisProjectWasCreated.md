# How this project was created

Creating a Vue 3 Project with Typescript, Routing, Tailwind, PrimeVue, AutoImport, AutoRoutes, SupabaseAuth

`NOTE:` Uses pnpm package manager

- Create a new Vue project using Vite
  `pnpm create vue@latest`

Call the project `simple-app`

Select the following features

```
TypeScript
Babel
Router
Linter/Formatter
```

Run it to check that's working ok

```
cd simple-app
npm i
pnpm run dev
```

Open the project in VS Code

```
 code .
```

Rename the `/src/views` folder to `/src/pages`

Install the router autoimport
see https://github.com/posva/unplugin-vue-router

Install auto import for vue
see https://github.com/unplugin/unplugin-auto-import

Remove all the nonsense from App.vue so that it matches this:

```
  <template>
  <RouterView />
  </template>
```

Rename:
`HomeView.vue` to `index.vue`
`AboutView.vue` to `about.vue`

Install Tailwind

```
  pnpm install -D tailwindcss postcss autoprefixer
```

Initialise Tailwind

```
  pnpx tailwindcss init -p
```

Update `tailwind.config.js` to:

```
  module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
  extend: {},
  },
  plugins: [],
  };
```

Create a src/assets/tailwind.css file and put this in it:

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

Open src/assets//main.css and add:

```
  @import "./tailwind.css";
```

Check tailwind is working. Open index.vue and replace it all with

```
  <template>
  <h1 class="text-4xl text-red-500">Home</h1>
  </template>
```

Refresh and visit the home page and you should see the tailwind styles applied

Install PrimeVue

```
  pnpm install primevue @primevue/themes
```

Use unplugin-vue-components to auto import the PrimeVue components:

```
  pnpm i unplugin-vue-components -D
  pnpm i @primevue/auto-import-resolver -D
```

Open main.ts and add the modify it so that it looks like this:

```
  import { createApp } from "vue";
  import App from "./App.vue";
  import router from "./router";
  import "./assets/main.css";
  import PrimeVue from "primevue/config";
  import Aura from "@primevue/themes/aura";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
theme: {
preset: Aura,
},
});

app.mount("#app");
```

Modify your vite.config.ts to be:

```
  import { fileURLToPath, URL } from "node:url";
  import VueRouter from "unplugin-vue-router/vite";
  import { defineConfig } from "vite";
  import vue from "@vitejs/plugin-vue";
  import vueDevTools from "vite-plugin-vue-devtools";
  import AutoImport from "unplugin-auto-import/vite";
  import { VueRouterAutoImports } from "unplugin-vue-router";
  import Components from "unplugin-vue-components/vite";
  import { PrimeVueResolver } from "@primevue/auto-import-resolver";

// https://vite.dev/config/
export default defineConfig({
plugins: [
VueRouter({ exclude: ["**/components"] }),
AutoImport({
include: [
/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
/\.vue\?vue/, // .vue
/\.md$/, // .md
],
imports: [
VueRouterAutoImports,
"vue",
{
"vue-i18n": ["useI18n"],
axios: [["default", "axios"]],
},
],
}),
vue(),
vueDevTools(),
Components({
resolvers: [PrimeVueResolver()],
}),
],
resolve: {
alias: {
"@": fileURLToPath(new URL("./src", import.meta.url)),
},
},
});
```

Check PrimeVue is working. Open index.vue and add a button component, so that file looks like this:

```
<template>
  <h1 class="text-4xl text-red-500">Home</h1>
  <Button label="Hello" />
</template>
```

Refresh the page and check the button is displayed

## Setting up SupaBase

Log in to SupaBase and create a new project or open your existing project

Install the SupaBase client library:

```
  pnpm install @supabase/supabase-js
```

Create the following file:

```
  /src/supabase/supabaseClient.ts
```

and add the following to it:

```
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseKey);
```

Create and .env.local file and populate it with:

```
  VITE_SUPABASE_URL=https://{your supabase project URL}.supabase.co
  VITE_SUPABASE_KEY={your supabase project API key}
```

You can get both of those values from the SupaBase dashboard in your project settings

Create a Login page. Create an `src/pages/auth/SignIn.vue` page and paste in the following:
