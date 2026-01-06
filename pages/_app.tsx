import React from "react"
import Head from "next/head"

import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import GlobalStyle from "../styles/GlobalStyle"
import theme from "../styles/theme"

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>LeeChaeng Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component />
      </ThemeProvider>
    </>
  )
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default App
