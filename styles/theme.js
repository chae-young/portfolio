const deviceSizes = {
  mobileS: "320px",
  tablet: "767px",
  tabletL: "1024px",
  desktop: "1200px",
}

const device = {
  mobileS: `@media screen and (max-width: ${deviceSizes.mobileS})`,
  mobileL: `@media screen and (max-width: ${deviceSizes.tablet})`, // 767 이하
  tabletL: `@media screen and (max-width: ${deviceSizes.desktop})`, // 1200 이하
  tabletWidthDesktop: `@media screen and (min-width: ${deviceSizes.tablet})`,
  onlyTablet: `@media screen and (min-width: ${deviceSizes.tablet}) and (max-width: ${deviceSizes.desktop})`,
  desktop: `@media screen and (min-width: ${deviceSizes.desktop})`,
}
const colors = {
  black: "rgb(0,0,0)",
  white: "rgb(255,255,255)",
  gray: "rgb(103,103,103)",
  gray_2: "#767676",
  green_1: "#3cb46e",
}
const theme = {
  colors,
  deviceSizes,
  device,
}

export default theme
