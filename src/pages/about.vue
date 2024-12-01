<script lang="ts" setup>
import { useRouter } from 'vue-router';


const router = useRouter();

const goToHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="flex flex-col text-center gap-6">
    <h1 class="text-4xl">About Simple App</h1>
    <div>
      <Button label="Back to Home Page" @click="goToHome" />
    </div>
  </div>
</template>
