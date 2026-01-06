import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const SubSection = ({ children, title }) => {
  return (
    <Section>
      <h3>{title}</h3>
      {children}
    </Section>
  )
}
const Section = styled.section`
  padding-bottom: 8rem;
  ${({ theme }) => theme.device.mobileL} {
    padding: 6rem 2rem;
  }
  & h3 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 700;
  }
`
SubSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
export default SubSection
