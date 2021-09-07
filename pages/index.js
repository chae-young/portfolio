import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import styled, { keyframes } from "styled-components"
import hand from "../public/waving-hand.png"
import Layout from "../components/Layout"
import Loading from "../components/Loading"

const Main = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {}, 5000)
  }, [])
  return (
    <>
      <Layout>
        <section>
          <h2>welcome!</h2>
          <p>
            안녕하세요.
            <Hand>
              <Image src={hand} alt="hello" />
            </Hand>
            Front-end developer 이채영입니다.
          </p>
        </section>
      </Layout>
    </>
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
  margin-right: 3px;
  animation: 2.5s infinite ${Shaking};
  transform-origin: 70% 70%;
  display: inline-block;
`
export default Main
