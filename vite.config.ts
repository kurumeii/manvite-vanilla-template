import { fileURLToPath } from "node:url"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import react from "@vitejs/plugin-react-swc"
import UnpluginFont from "unplugin-fonts/vite"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ command, mode }) => {
  console.log(`configuring vite with command: ${command}, mode: ${mode}`)
  const env = loadEnv(mode, process.cwd(), "VITE_")
  return {
    plugins: [
      react(),
      vanillaExtractPlugin(),
      UnpluginFont({
        fontsource: {
          families: ["Fira Mono", "Inter Variable"],
        },
      }),
    ],
    envDir: process.cwd(),
    server: {
      strictPort: true,
      port: Number.parseInt(env.VITE_PORT),
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
      ],
    },
  }
})
