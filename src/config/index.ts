import { QueryClient } from "@tanstack/vue-query";

const configureApp = () => {};

export const getVueQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        staleTime: 20000,
      },
    },
  });
};

export default configureApp;
