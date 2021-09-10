import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const ContentBox = ({ children, title }) => {
  return (
    <Content
      style={
        title === "About"
          ? { background: "rgb(36 232 127)" }
          : { background: "rgb(255,255,255)" }
      }
    >
      <Title>{title}</Title>
      {children}
    </Content>
  )
}

const Title = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>
}

const Content = styled.section`
  padding: 6rem;
  ${({ theme }) => theme.device.tabletL} {
    padding: 0 2rem;
  }
`
const TitleStyle = styled.h2`
  margin-bottom: 6rem;
  font-size: 8rem;
`
ContentBox.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
Title.propTypes = {
  children: PropTypes.node.isRequired,
}
export default ContentBox
