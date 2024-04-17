import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import PropTypes from "prop-types"

const FloatingBox = ({ children, size }) => {
  return (
    <FloatingBoxWrap
      $size={size}
      animate={{
        y: [-10, 10],
        rotate: 0,
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      {children}
    </FloatingBoxWrap>
  )
}

FloatingBox.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.array,
}

const FloatingBoxWrap = styled(motion.div)`
  position: relative;
  ${(props) => props.$size}
`
FloatingBox.defaultProps = {
  size: [],
}

export default FloatingBox
