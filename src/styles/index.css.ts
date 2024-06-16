import { vars } from "@/configs/vanilla-extract/theme"
import { style } from "@vanilla-extract/css"
export const styles = {
  title: style({
    fontSize: vars.fontSizes.lg,
    fontWeight: "bold",
  }),
  subTitle: style({
    fontSize: vars.fontSizes.md,
    fontWeight: "normal",
    fontFamily: "monospace",
  }),
}
