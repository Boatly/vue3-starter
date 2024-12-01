import { useQuery } from "@tanstack/vue-query";
import { peopleKey } from "./keys";
import type { GetPersonResponse } from "@/api/types";
import { useApiClient } from "@/composables/useApiClient";
import { computed, type Ref } from "vue";

export const useGetPerson = (id: Ref<string | undefined>) => {
  return useQuery<GetPersonResponse>({
    queryFn: async () => {
      const { axiosInstance } = useApiClient();
      const { data } = await axiosInstance.get<GetPersonResponse>(
        `/people/${id.value}`
      );
      return data;
    },
    queryKey: peopleKey.byId(id).queryKey,
    enabled: computed(() => !!id.value),
    staleTime: 1 * 60 * 1000,
  });
};

export const useListPeople = () => {
  return useQuery<GetPersonResponse[]>({
    queryFn: async () => {
      const { axiosInstance } = useApiClient();
      const { data: response } = await axiosInstance.get(`/people`);
      return response;
    },
    queryKey: peopleKey.list.queryKey,
    staleTime: 1 * 60 * 1000,
  });
};
