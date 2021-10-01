import React, { useState } from "react"
import Link from "next/link"

import styled, { css } from "styled-components"

const Header = () => {
  const [navActive, setNavAtive] = useState(false)
  const onClickNav = () => {
    setNavAtive((prev) => !prev)
  }
  return (
    <HeaderWrap>
      <Logo>
        <Link href="/">
          <a>
            <img src="/images/logo.png" width="100%" alt="이채영 포트폴리오" />
          </a>
        </Link>
      </Logo>
      <Hamburger onClick={onClickNav} active={navActive}>
        <span />
      </Hamburger>
      <Nav active={navActive}>
        <ul>
          <li />
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="mailto:leechaeng2222@gmail.com">Contact</a>
          </li>
        </ul>
      </Nav>
    </HeaderWrap>
  )
}
const Logo = styled.h1`
  width: 60px;
`
const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 8;
  width: 100%;
  padding: 1rem 6rem;
  box-sizing: border-box;
  ${({ theme }) => theme.device.mobileL} {
    padding: 1rem 2rem;
  }
`
const HamburgerElement = css`
  width: 30px;
  height: 1px;
  background-color: #000;
  border-radius: 0;
  position: absolute;
  transition: transform 0.15s ease;
`
const Hamburger = styled.button`
  position: absolute;
  right: 4rem;
  top: 2rem;
  z-index: 9;
  width: 30px;
  height: 24px;
  ${({ theme }) => theme.device.tabletL} {
    right: 2rem;
  }
  > span {
    display: block;
    top: 50%;
    margin-top: -2px;
    transform: ${(props) => (props.active ? "rotate(45deg)" : "rotate(0deg)")};
    ${HamburgerElement}
    &:before,
    &:after {
      content: "";
      display: block;
      ${HamburgerElement}
      opacity: ${(props) => (props.active ? 0 : 1)};
    }
    &:before {
      top: -8px;
    }
    &:after {
      bottom: ${(props) => (props.active ? 0 : "-8px")};
      transform: ${(props) =>
        props.active ? "rotate(90deg)" : "rotate(0deg)"};
      opacity: 1;
    }
  }
`
const Nav = styled.nav`
  position: absolute;
  right: 4rem;
  top: 64px;
  display: ${(props) => (props.active ? "block" : "none")};
  padding: 2rem;
  background: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tabletL} {
    right: 2rem;
  }
  > ul {
    li {
      line-height: 2;
      a {
        font-size: 1.4rem;
        color: rgb(255, 255, 255);
      }
    }
  }
`
export default Header
