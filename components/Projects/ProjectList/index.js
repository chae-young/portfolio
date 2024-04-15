import React from "react"
import styled from "styled-components"
import Project from "../Project"

const Brands = [
  {
    name: "Wconcept",
    img: "/images/project/wc.png",
    desc: "프로모션/모션 구축",
    tag: ["CSS, Scroll Interaction, UI/UX"],
  },
  {
    name: "FILA",
    img: "/images/project/fila.jpg",
    desc: "사이트 구축/프로모션/유지보수",
    tag: ["HTML5,CSS,Interaction"],
  },
  {
    name: "Columbia",
    img: "/images/project/columbia.webp",
    desc: "사이트 구축/프로모션/유지보수",
    tag: ["HTML5,CSS,Interaction"],
  },
  {
    name: "Leica",
    img: "/images/project/leica.jpg",
    desc: "사이트 구축/프로모션/유지보수",
    tag: ["HTML5,CSS,Interaction"],
  },
]

const ProjectList = () => {
  return (
    <ProjectListWrap>
      {Brands.map((brand, index) => (
        <Project
          key={index}
          src={brand.img}
          name={brand.name}
          desc={brand.desc}
        />
      ))}
    </ProjectListWrap>
  )
}

const ProjectListWrap = styled.article``

export default ProjectList
