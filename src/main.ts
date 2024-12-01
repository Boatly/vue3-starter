import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { getVueQueryClient } from "./config";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

VueQueryPlugin.install(app, {
  queryClient: getVueQueryClient(),
});

app.mount("#app");
