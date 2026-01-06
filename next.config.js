// const withPlugins = require("next-compose-plugins")
// const withImages = require("next-images")

// module.exports = withPlugins([[withImages]], {
//   compress: true,
//   images: {
//     unoptimized: true,
//   },
// })
module.exports = {
  reactStrictMode: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
}
