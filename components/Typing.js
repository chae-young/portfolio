import React from "react"
import Typed from "react-typed"

const Typing = () => {
  return (
    <Typed
      strings={[
        "새로운 시도와",
        "새로운것을 접하는걸 좋아하는",
        "프론트엔드 개발자 이채영 입니다.",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  )
}
export default Typing
