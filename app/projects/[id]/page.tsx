"use client"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import React from "react"
import styled from "styled-components"
import Layout from "../../../components/Layout"
import { PROJECTS } from "../../../data"

const BackgroundAreaDiv = motion.div
const BackgroundInnerDiv = motion.div
const DetailImagesUl = motion.ul

const Projects = () => {
  const params = useParams()
  const id = params.id
  const curProject = PROJECTS.find((item) => item.id === Number(id))
  const getPublicImagePath = (src) => {
    if (!src) return ""
    if (src.startsWith("/")) return src
    // ./images/... -> /images/...
    return src.replace(/^\.\//, "/")
  }
  return (
    <Layout>
      {/* 
        오류 원인:
        <BackgroundArea $color={curProject?.color}> 이렇게 curProject?.color가 undefined일 수 있는 값이 전달되기 때문입니다.
        styled-components/Emotion 등에서 타입이 string이어야 하는데 undefined도 들어올 수 있다고 판단 → 타입 오류 발생합니다.
        해결법: undefined 일 때 fallback 값을 넣거나, string 보장 후 넘기기
      */}
      <BackgroundArea $color={curProject?.color ?? "#000"}>
        <BackgroundInner
          $img={getPublicImagePath(curProject?.src) ?? ""}
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, type: "tween", ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            style={{
              position: "absolute",
              left: "50%",
              bottom: "32px",
              transform: "translateX(-50%)",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pointerEvents: "none",
            }}
            initial={{ y: 0 }}
            animate={{ y: [0, 18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.3,
              ease: "easeInOut",
            }}
          >
            {/* 아래 화살표 아이콘 (svg) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="size-6"
              width="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.div>
        </BackgroundInner>
      </BackgroundArea>
      <InfoContent>
        <ProjectInfo>
          <ProjectOverView
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div>
              <h2>{curProject?.title}</h2>
              <p>{curProject?.desc}</p>
            </div>
            <div>
              <h3>상세내용</h3>
              <ul>
                {curProject?.overview.map((content, idx) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <>
                    <li key={idx}>{content.title}</li>
                    {content.details && (
                      <ProjectOverViewSub>
                        {content.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ProjectOverViewSub>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </ProjectOverView>
          <ProjectSub
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <dl>
              <dt>프로젝트 기간</dt>
              <dd>{curProject?.date}</dd>
            </dl>
            <ProjectSkill>
              {curProject?.skill.map((item, idx) => (
                <li key={`${item}-${idx}`}>{item}</li>
              ))}
            </ProjectSkill>
          </ProjectSub>
        </ProjectInfo>
        {/* 사진 유무 */}
        {curProject?.detailImg && (
          <DetailImages $half={curProject?.detailImgHalf || false}>
            {curProject?.detailImg.map((img, idx) => (
              <motion.li
                key={`${curProject?.title}-${idx}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: idx * 0.15,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <img src={getPublicImagePath(img)} alt={curProject?.title} />
              </motion.li>
            ))}
          </DetailImages>
        )}
      </InfoContent>
    </Layout>
  )
}

const BackgroundArea = styled(BackgroundAreaDiv)<{ $color: string }>`
  height: 100vh;
  overflow: hidden;
  background-color: ${({ $color }) => $color};

  ${({ theme }) => theme.device.mobileL} {
    height: 60vh;
  }
`

const BackgroundInner = styled(BackgroundInnerDiv)<{
  $img: string
}>`
  position: relative;
  background-image: url(${({ $img }) => $img});
  background-repeat: no-repeat;
  background-size: 25%;
  background-position: center;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      rgba(88, 88, 88, 0.03) 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`
const InfoContent = styled.div`
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: auto;
  padding: 10rem 6rem 0;
  font-size: 1.7rem;
  line-height: 1.8;
  margin-bottom: 10rem;

  img {
    max-width: 100%;
  }
  ${({ theme }) => theme.device.tabletL} {
    padding: 4rem 2rem 0;
    font-size: 1.4rem;
  }
`

const ProjectInfo = styled(motion.div)`
  display: flex;
  font-size: 1.6rem;
  gap: 9.4rem;
  margin-bottom: 10rem;

  h2 {
    font-size: 3.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.device.tabletL} {
    flex-direction: column;
    margin-bottom: 6rem;

    gap: 4rem;

    h2 {
      font-size: 2.8rem;
      margin-bottom: 2rem;
    }
  }
`

const ImportDesc = styled.p`
  font-size: 1.8rem;
  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
  }
`

const ProjectOverView = styled(motion.section)`
  flex: 1;
  font-size: 1.4rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  > div + div {
    margin-top: 4rem;
  }
  li::marker {
    content: "-";
  }
  li {
    padding-left: 10px;
    margin-left: 10px;
  }

  ${({ theme }) => theme.device.desktop} {
    font-size: 1.7rem;

    h3 {
      font-size: 2.6rem;
    }
  }
`

const ProjectOverViewSub = styled.ul`
  padding-left: 20px;
  margin-left: 20px;
`
const ProjectSub = styled(motion.div)`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  dd {
    color: ${({ theme }) => theme.colors.gray_2};
  }
`
const ProjectSkill = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  > li {
    padding: 0.5rem 2rem;
    color: #fff;
    border-radius: 2rem;
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.colors.black};
  }
`

const DetailImages = styled(DetailImagesUl)<{ $half: boolean }>`
  display: ${({ $half }) => ($half ? "grid" : "block")};

  flex-wrap: wrap;
  gap: 20px;
  li {
    width: 100%;
  }

  ${({ theme }) => theme.device.desktop} {
    grid-template-columns: ${({ $half }) => ($half ? "1fr 1fr" : "1fr")};
  }
`
export default Projects
