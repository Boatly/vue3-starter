<script lang="ts" setup>
import { useGetPerson } from '@/api/People';
import { useSession } from '@/composables/useSession';
import { ref } from 'vue';

const { session, logout } = useSession();

const showSession = ref(false);

const personId = ref("xyz123");

const { data: person, isLoading } = useGetPerson(personId);

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

      <div class="flex flex-col gap-4 mb-12">
        <div>
          <Button label="Log Out" raised rounded @click="signout" />
        </div>

        <div>
          <RouterLink to="/about" class="text-primary">Go to About</RouterLink>
        </div>
      </div>

      <Divider />

      <div class="flex flex-col text-left">
        <div v-if="isLoading">
          <p>Loading...</p>
        </div>
        <div v-else>
          <p>Called the API to get this person:</p>
          <pre>{{ person }}</pre>
        </div>
        <Divider />
      </div>

      <Button label="Show Session" @click="showSession = !showSession" />

      <div v-if="showSession" class="mt-4">
        <div class="text-surface-700 dark:text-surface-100 text-2xl mb-8">Your session details are:</div>
        <pre class="text-sm">{{ session }}</pre>
      </div>
    </div>
  </div>
</template>