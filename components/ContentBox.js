import { motion } from "framer-motion"
import PropTypes from "prop-types"
import React from "react"

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
  return (
    <TitleStyle
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </TitleStyle>
  )
}

const Content = styled.section``
const TitleStyle = styled(motion.h2)`
  margin: 0 auto 4rem;
  font-size: 5.2rem;
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};

  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 6rem;
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
