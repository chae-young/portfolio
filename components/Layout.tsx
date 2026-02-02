"use client"

import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

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

const LayoutWrap = styled.div``
export default Layout
