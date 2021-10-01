import React from "react"

import styled from "styled-components"

const ImageArr = [
  {
    src: "/images/about/skill_1.png",
    width: "406",
    height: "556",
  },
  {
    src: "/images/about/skill_2.png",
    width: "406",
    height: "556",
  },
  {
    src: "/images/about/skill_3.png",
    width: "406",
    height: "556",
  },
  {
    src: "/images/about/skill_4.png",
    width: "860",
    height: "839",
  },
  {
    src: "/images/about/skill_5.png",
    width: "800",
    height: "479",
  },
  {
    src: "/images/about/skill_6.png",
    width: "408",
    height: "457",
  },
  {
    src: "/images/about/skill_7.png",
    width: "312",
    height: "244",
  },
  {
    src: "/images/about/skill_8.png",
    width: "910",
    height: "380",
  },
]

const Skill = () => {
  return (
    <SkillList>
      {ImageArr.map((v, i) => (
        <li>
          <img key={i} src={v.src} width="100%" />
        </li>
      ))}
    </SkillList>
  )
}

const SkillList = styled.ul`
  display: flex;
  ${({ theme }) => theme.device.mobileL} {
    flex-wrap: wrap;
  }
  li {
    padding: 1rem;
    flex-basis: 100px;
    ${({ theme }) => theme.device.mobileL} {
      flex: 1 1 20%;
    }
  }
`
export default Skill
