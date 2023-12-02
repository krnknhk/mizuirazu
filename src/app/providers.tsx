"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import "./style.css";

const theme = extendTheme({
  fonts: {
    japanese: "'Zen Kaku Gothic Antique', sans-serif",
    japanese2: "'Zen Kaku Gothic New', sans-serif",
    english: "'Roboto', serif",
    english2: "'Hedvig Letters Serif', serif",
    english3: "'Press Start 2P', serif",
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
