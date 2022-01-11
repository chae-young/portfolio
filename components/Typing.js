import React from "react"
import Typed from "react-typed"

const Typing = () => {
  return (
    <Typed
      strings={[
        "더 나은 UI/UX를 향해 끊임없이 고민하고",
        "사용자들에게 좋은 서비스를 위해 달려가는",
        "퍼블리셔 이채영 입니다.",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  )
}
export default Typing
