import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const contentReft = useRef(null)
  const [style, setStyle] = useState(null)

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
