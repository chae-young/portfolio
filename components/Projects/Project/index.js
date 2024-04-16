import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"

const Project = ({ src, name, desc, tags }) => {
  return (
    <ProjectFigure
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      }}
      viewport={{ once: true, amount: 0 }}
    >
      <ProjectFigureImg>
        <Image src={src} alt={name} sizes="100vw" layout="fill" />
      </ProjectFigureImg>
      <ProjectFigcaption>
        <strong>{name}</strong>
        <p>{desc}</p>
        <ProjectTags>
          {tags.map((tag, index) => (
            <li index={index}>#{tag}</li>
          ))}
        </ProjectTags>
      </ProjectFigcaption>
    </ProjectFigure>
  )
}

const ProjectFigure = styled(motion.figure)`
  margin-bottom: 5em;

  ${({ theme }) => theme.device.desktop} {
    display: flex;
    gap: 5em;
    margin-bottom: 10em;
    &:nth-child(even) {
      flex-direction: row-reverse;

      > figcaption {
        text-align: right;
      }
      figcaption ul {
        justify-content: flex-end;
      }
    }
  }
`
const ProjectFigureImg = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/0.7;
  border-radius: 3rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${({ theme }) => theme.device.desktop} {
    width: 50%;
  }
`
const ProjectFigcaption = styled.figcaption`
  margin-top: 1em;
  text-align: center;
  font-size: 1.4rem;

  > strong {
    font-size: 2.4rem;
    font-weight: 900;
  }

  ${({ theme }) => theme.device.desktop} {
    flex: 1;
    align-self: flex-end;
    font-size: 2rem;
    text-align: left;
    > strong {
      font-size: 8rem;
      font-weight: 900;
    }
  }
`

const ProjectTags = styled.ul`
  display: flex;
  > li {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`

export default Project
