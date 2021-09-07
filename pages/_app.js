import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from "../styles/GlobalStyle"

const App = ({ Component }) => {
  return (
    <>
      <GlobalStyle />
      <Component />
    </>
  )
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}
export default App
