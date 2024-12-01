import type { AxiosInstance } from "axios";
import { supabase } from "@/supabase/supabaseClient";
import axios from "axios";

let axiosInstance: AxiosInstance | null = null;

export function useApiClient() {
  if (axiosInstance) return { axiosInstance };

  axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Accept: "application/json",
      "X-Timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  });

  // Add request interceptor
  axiosInstance?.interceptors.request.use(
    async (config) => {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      // Handle request error here
      return Promise.reject(error);
    }
  );

  // Add response interceptor
  axiosInstance?.interceptors.response.use(
    (response) => {
      // Modify response data here if needed
      return response;
    },
    (error) => {
      // Handle response error here
      return Promise.reject(error);
    }
  );

  return {
    axiosInstance,
  };
}
