import { onMounted, ref } from 'vue';
import { supabase } from '@/supabase/supabaseClient';
import type { Session } from '@supabase/supabase-js';

const session = ref<Session | null>(null);
const isLoading = ref(true);

export function useSession() {
  async function getSession() {
    const { data } = await supabase.auth.getSession();
    session.value = data.session;
    isLoading.value = false;
  }

  async function logout() {
    await supabase.auth.signOut();
  }

  onMounted(async () => {
    await getSession();
  });

  return { session, isLoading, logout };
}
