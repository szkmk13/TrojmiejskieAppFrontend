import React from "react";
import { HeaderApp } from "../components/Header/Header.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "./head.tsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head />
      <HeaderApp />

      {children}

      {/* <Footer /> */}
    </QueryClientProvider>
  );
}
