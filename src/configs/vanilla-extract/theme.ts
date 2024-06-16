import { createTheme } from "@mantine/core"
import { themeToVars } from "@mantine/vanilla-extract"

export const theme = createTheme({
  fontFamily: "'Inter Variable', sans-serif",
  fontFamilyMonospace: "'Fira Mono', monospace",
})

export const vars = themeToVars(theme)
