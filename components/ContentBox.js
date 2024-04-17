import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const ContentBox = ({ children, title }) => {
  return (
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  )
}

const Title = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>
}

const Content = styled.section`
  padding: 12rem 0 5rem;

  ${({ theme }) => theme.device.desktop} {
    padding: 12rem 0;
  }
`
const TitleStyle = styled.h2`
  font-size: 3.4rem;
  font-weight: 900;
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: 0 auto 1em;
  padding: 0 2rem;
  ${({ theme }) => theme.device.desktop} {
    font-size: 10rem;
  }
`
ContentBox.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
Title.propTypes = {
  children: PropTypes.node.isRequired,
}
export default ContentBox
