import React, { useEffect, useState } from "react"
import Typed from "react-typed"

const Typing = () => {
  return (
    <Typed
      strings={["Hello Friend ", "Long time no see"]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  )
}
export default Typing
