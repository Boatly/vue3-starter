import { createQueryKeys } from "@lukemorales/query-key-factory";
import type { MaybeRef } from "vue";

export const peopleKey = createQueryKeys("people", {
  list: null,
  byId: (id: MaybeRef<string | undefined>) => [id],
});
