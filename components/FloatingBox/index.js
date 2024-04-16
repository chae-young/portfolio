import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const FloatingBox = ({ children, size }) => {
  return (
    <FloatingBoxWrap
      size={size}
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

const FloatingBoxWrap = styled(motion.div)`
  position: relative;
  ${(props) => props.size}
`

export default FloatingBox
