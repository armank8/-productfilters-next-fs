"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
  );
};

export default Providers;
