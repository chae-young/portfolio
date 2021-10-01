import React from "react"

import styled, { keyframes } from "styled-components"
import hand from "../public/images/waving-hand.png"

const HandShaking = () => {
  return (
    <Hand>
      <img src={hand} width="100%" />
    </Hand>
  )
}

const Shaking = keyframes`
    0% {
        transform: rotate(0)
    }

    10% {
        transform: rotate(-10deg)
    }

    20% {
        transform: rotate(12deg)
    }

    30% {
        transform: rotate(-10deg)
    }

    40% {
        transform: rotate(9deg)
    }

    50% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(0)
    }
`

const Hand = styled.span`
  width: 30px;
  margin-right: 3px;
  animation: 2.5s infinite ${Shaking};
  transform-origin: 70% 70%;
  display: inline-block;
`

export default HandShaking
