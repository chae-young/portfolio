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
  padding: 12rem 0rem;
`
const TitleStyle = styled.h2`
  padding: 0 6rem;
  margin-bottom: 15rem;
  font-size: 8rem;
  ${({ theme }) => theme.device.tabletL} {
    padding: 0 2rem;
    margin-bottom: 10rem;
    font-size: 4rem;
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
