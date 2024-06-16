import { fileURLToPath } from "node:url"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import react from "@vitejs/plugin-react-swc"
import Unfonts from "unplugin-fonts/vite"
import { defineConfig } from "vite"
import biomePlugin from "vite-plugin-biome"

export default defineConfig({
  plugins: [
    react(),
    biomePlugin({
      mode: "check",
      applyFixes: true,
    }),
    vanillaExtractPlugin(),
    Unfonts({
      fontsource: {
        families: ["Inter Variable", "Fira Mono"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src/", import.meta.url)),
    },
  },
})
