import Link from "next/link"
import React, { useEffect, useState } from "react"

import styled, { css } from "styled-components"

const Header = () => {
  const [navActive, setNavAtive] = useState(false)
  const [isIntroVisible, setIsIntroVisible] = useState(true)

  useEffect(() => {
    const introElement = document.getElementById("intro")
    if (!introElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntroVisible(entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(introElement)

    return () => observer.disconnect()
  }, [])

  const onClickNav = () => {
    setNavAtive((prev) => !prev)
  }

  return (
    <HeaderWrap>
      <Logo $isIntroVisible={isIntroVisible}>
        <Link href="/">
          <img src="/images/logo.png" width="100%" alt="이채영 포트폴리오" />
        </Link>
      </Logo>
      <Hamburger
        onClick={onClickNav}
        $active={navActive}
        $isIntroVisible={isIntroVisible}
      >
        <span />
      </Hamburger>
      <Nav $active={navActive} $isIntroVisible={isIntroVisible}>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* <li>
            <Link href="/projects">Work</Link>
          </li> */}
          <li>
            <a href="mailto:leechaeng2222@gmail.com">Contact</a>
          </li>
        </ul>
      </Nav>
    </HeaderWrap>
  )
}
const Logo = styled.h1<{ $isIntroVisible: boolean }>`
  width: 60px;

  img {
    filter: ${(props) =>
      props.$isIntroVisible ? "none" : "brightness(0) invert(1)"};
    transition: filter 0.3s ease;
  }
`
const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 8;
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: auto;
  padding: 1rem 2rem;
  ${({ theme }) => theme.device.mobileL} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`
const HamburgerElement = css<{ $isIntroVisible: boolean }>`
  width: 30px;
  height: 1px;
  background-color: #000;
  border-radius: 0;
  position: absolute;
  transition: transform 0.15s ease;

  ${({ $isIntroVisible }) => !$isIntroVisible && `background-color: #fff;`}
`
const Hamburger = styled.button<{ $active: boolean; $isIntroVisible: boolean }>`
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
    transform: ${(props) => (props.$active ? "rotate(45deg)" : "rotate(0deg)")};
    ${HamburgerElement}
    &:before,
    &:after {
      content: "";
      display: block;
      ${HamburgerElement}
      opacity: ${(props) => (props.$active ? 0 : 1)};
    }
    &:before {
      top: -8px;
    }
    &:after {
      bottom: ${(props) => (props.$active ? 0 : "-8px")};
      transform: ${(props) =>
        props.$active ? "rotate(90deg)" : "rotate(0deg)"};
      opacity: 1;
    }
  }
`
const Nav = styled.nav<{ $active: boolean; $isIntroVisible: boolean }>`
  position: absolute;
  right: 4rem;
  top: 64px;
  display: ${(props) => (props.$active ? "block" : "none")};
  padding: 2rem;
  background: ${(props) =>
    props.$isIntroVisible ? props.theme.colors.black : "#fff"};
  transition: background 0.3s ease;
  ${({ theme }) => theme.device.tabletL} {
    right: 2rem;
  }
  > ul {
    li {
      line-height: 2;
      a {
        font-size: 1.4rem;
        color: ${(props) => (props.$isIntroVisible ? "#fff" : "#000")};
        transition: color 0.3s ease;
      }
    }
  }
`
export default Header
