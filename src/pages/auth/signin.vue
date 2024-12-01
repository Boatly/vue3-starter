<script lang="ts" setup>
import { ref } from 'vue';
import { supabase } from '@/supabase/supabaseClient';

const loading = ref(false);
const email = ref('');
const password = ref('');
const error = ref<string | null>(null);

const login = async () => {
    loading.value = true;
    try {
        error.value = null;
        const { error: loginError, } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });
        if (loginError) {
            error.value = loginError.message;
        } else {
            location.reload();
        }
    } finally {
        loading.value = false;
    }
};

</script>

<template>
    <div class="flex flex-col items-center gap-8">
        <h1 class="text-2xl">Login</h1>

        <form class="flex flex-col gap-4" @submit.prevent="login">
            <InputText v-model="email" type="email" placeholder="Email" required />
            <InputText v-model="password" type="password" placeholder="Password" required />
            <Button :loading="loading" type="submit" label="Login" />
        </form>
        <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
        <p>Don't have an account? <span>
                <RouterLink to="/auth/signup">Sign Up</RouterLink>
            </span></p>
    </div>
</template>
