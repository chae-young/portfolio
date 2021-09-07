import React, { useEffect } from "react"
// import "./style"

import styled, { keyframes } from "styled-components"

const Loading = () => (
  <>
    <p>Loading..</p>
    <LoadingBox>
      <Line />
      <Line />
      <Line />
    </LoadingBox>
  </>
)
const lodingAni = keyframes`
0 {
  transform: translate(0, 0);
}
50% {
  transform: translate(0, 15px);
}
100% {
  transform: translate(0, 0);
}
`
const LoadingBox = styled.div`
  display: flex;
  > div:nth-child(1) {
    animation: ${lodingAni} 0.6s 0.1s linear infinite;
  }
  > div:nth-child(2) {
    animation: ${lodingAni} 0.6s 0.2s linear infinite;
  }
  > div:nth-child(3) {
    animation: ${lodingAni} 0.6s 0.3s linear infinite;
  }
`
const Line = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 3px;
  border-radius: 100%;
  background-color: rgb(255, 255, 255);
`
export default Loading
