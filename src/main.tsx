import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import React from "react"
import ReactDOM from "react-dom/client"
import "unfonts.css"
import App from "./App.tsx"
import { theme } from "./configs/vanilla-extract/theme.ts"

const root = document.getElementById("root-app")

if (!root) {
  throw new Error("Root element not found")
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </React.StrictMode>
)
