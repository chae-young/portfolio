import type { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  colors: {
    black: "#1c1c1c",
    white: "rgb(255,255,255)",
    gray: "#a0a0a0",
    gray_2: "#767676",
    green_1: "#3cb46e",
    purple: "rgb(200,150,255)",
  },
  fonts: {
    subEng: `'Playfair Display', serif`,
  },
  deviceSizes: {
    mobileS: "320px",
    tablet: "767px",
    tabletL: "1024px",
    desktop: "1200px",
    maxSize: "1400px",
  },
  device: {
    mobileS: `@media screen and (max-width: 320px)`,
    mobileL: `@media screen and (max-width: 767px)`,
    tabletL: `@media screen and (max-width: 1200px)`,
    tabletWidthDesktop: `@media screen and (min-width: 767px)`,
    onlyTablet: `@media screen and (min-width: 767px) and (max-width: 1200px)`,
    desktop: `@media screen and (min-width: 1200px)`,
  },
}

export default theme
