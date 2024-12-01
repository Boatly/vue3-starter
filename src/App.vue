<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { useSession } from './composables/useSession';
import AppLoading from './AppLoading.vue';
import SignIn from './pages/auth/signin.vue';
import AuthenticatedLayout from './components/layouts/AuthenticatedLayout.vue';
import AnonymousLayout from './components/layouts/AnonymousLayout.vue';
import { RouterView } from 'vue-router/auto';
import ConfirmDialog from 'primevue/confirmdialog';

const { session, isLoading } = useSession();
</script>

<template>
  <AppLoading v-if="isLoading" />

  <template v-else>
    <AuthenticatedLayout v-if="session">
      <RouterView />
    </AuthenticatedLayout>

    <AnonymousLayout v-else>
      <SignIn />
    </AnonymousLayout>

    <ConfirmDialog />

    <VueQueryDevtools />
  </template>
</template>
