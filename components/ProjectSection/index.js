import { motion } from "framer-motion"
import Link from "next/link"
import styled from "styled-components"
import { PROJECTS } from "../../data"
import ContentBox from "../ContentBox"

const ProjectSection = () => {
  return (
    <article>
      <ContentBox title="Projects">
        <ProjectList>
          {PROJECTS.map((item, idx) => (
            <ProjectItem
              key={item.id}
              $bgColor={item.color}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                delay: idx * 0.2 + 0.3, // idx로 딜레이를 개별 조정 (순서대로 애니메이션)
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Link href={`/projects/${item.id}`} passHref legacyBehavior>
                <a>
                  <div>
                    <img src={item.src} alt={item.title} />
                  </div>
                  <p>{item.title}</p>
                </a>
              </Link>
            </ProjectItem>
          ))}
        </ProjectList>
      </ContentBox>
    </article>
  )
}

const ProjectList = styled.ul`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  img {
    width: 50%;
  }
  ${({ theme }) => theme.device.mobileL} {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`

const ProjectItem = styled(motion.li)`
  position: relative;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $bgColor }) => $bgColor};
    height: 440px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  img {
    transition: transform 0.3s ease;
  }
  p {
    font-size: 1.6rem;
    margin-top: 2rem;
  }

  ${({ theme }) => theme.device.desktop} {
    cursor: pointer;
    p {
      position: absolute;
      bottom: 20px;
      left: 20px;
      color: #fff;
      font-size: 2.6rem;
      opacity: 0;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    &:hover p {
      opacity: 1;
    }
    &:hover div {
      filter: brightness(0.5);

      img {
        transform: scale(1.2);
      }
    }
  }

  ${({ theme }) => theme.device.mobileL} {
    div {
      height: 250px;
    }
  }
`

const ProjectTitle = styled.div`
  pointer-events: none;
  max-width: 80%;
  word-break: break-word;

  ${({ theme }) => theme.device.mobileL} {
    position: static;
    opacity: 1;
    visibility: visible;
    margin-top: 10px;
    font-size: 14px;
  }
`
export default ProjectSection
