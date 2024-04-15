import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <Header />
      {children}
      <Footer />
    </LayoutWrap>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutWrap = styled.div`
  overflow-x: hidden;
`
export default Layout
