import React from "react"
import { motion } from "framer-motion"
import styled, { css } from "styled-components"

interface FloatingBoxProps {
  children: React.ReactNode
  size?: string | ReturnType<typeof css>
}

const FloatingBoxWrap = motion.div

const FloatingBox = ({ children, size }: FloatingBoxProps) => {
  return (
    <FloatingBoxWrapSt
      $size={size || ""}
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
    </FloatingBoxWrapSt>
  )
}

const FloatingBoxWrapSt = styled(FloatingBoxWrap)<{
  $size: string | ReturnType<typeof css>
}>`
  position: relative;
  ${(props) => props.$size}
`
export default FloatingBox
