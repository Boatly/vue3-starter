<script lang="ts" setup>
import { useSession } from '@/composables/useSession';

const { session, logout } = useSession();

const signout = async () => {
  await logout();
  location.reload();
};
</script>

<template>
  <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
    <div class="text-surface-700 dark:text-surface-100 text-center">
      <div class="text-primary font-bold mb-4">POWERED BY VUE 3</div>
      <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-4">Welcome to Simple App</div>

      <div class="flex flex-col text-center gap-4 mb-12">
        <div>
          <Button label="Log Out" raised rounded @click="signout" />
        </div>

        <div>
          <RouterLink to="/about" class="text-primary">Go to About</RouterLink>
        </div>
      </div>

      <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">Your session details are:</div>
      <pre class="text-sm">{{ session }}</pre>

    </div>
  </div>
</template>