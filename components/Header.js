import React from "react"
import Link from "next/link"

import styled from "styled-components"

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>로고</a>
      </Link>
      <Nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </Nav>
    </header>
  )
}

const Nav = styled.nav`
  position: absolute;
  right: 20px;
  top: 0;
  & ul {
    display: flex;
  }
`
export default Header
