import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"

import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import theme from "../styles/theme"

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>이채영 포트폴리오</title>
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
