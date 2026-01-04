const deviceSizes = {
  mobileS: "320px",
  tablet: "767px",
  tabletL: "1024px",
  desktop: "1200px",
  maxSize: "1400px",
}

const device = {
  mobileS: `@media screen and (max-width: ${deviceSizes.mobileS})`,
  mobileL: `@media screen and (max-width: ${deviceSizes.tablet})`, // 767 이하
  tabletL: `@media screen and (max-width: ${deviceSizes.desktop})`, // 1200 이하
  tabletWidthDesktop: `@media screen and (min-width: ${deviceSizes.tablet})`,
  onlyTablet: `@media screen and (min-width: ${deviceSizes.tablet}) and (max-width: ${deviceSizes.desktop})`,
  desktop: `@media screen and (min-width: ${deviceSizes.desktop})`,
}

const fonts = {
  subEng: `'Playfair Display', serif`,
}

const colors = {
  black: "#1c1c1c",
  white: "rgb(255,255,255)",
  gray: "#a0a0a0",
  gray_2: "#767676",
  green_1: "#3cb46e",
  purple: "rgb(200,150,255)",
}
const theme = {
  colors,
  fonts,
  deviceSizes,
  device,
}

export default theme
