import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import { PROJECTS } from "../../data"

const Projects = () => {
  const router = useRouter()
  const { id } = router.query
  const curProject = PROJECTS.find((item) => item.id === Number(id))
  const getPublicImagePath = (src) => {
    if (!src) return ""
    if (src.startsWith("/")) return src
    // ./images/... -> /images/...
    return src.replace(/^\.\//, "/")
  }
  return (
    <Layout>
      <BackgroundArea
        $img={getPublicImagePath(curProject?.src)}
        $color={curProject?.color}
      >
        <div>Query id: {id}</div>
      </BackgroundArea>
      <InfoContent>
        <ProjectInfo>
          <ProjectOverView>
            <div>
              <h2>{curProject?.title}</h2>
              <p>{curProject?.desc}</p>
            </div>
            <div>
              <h3>상세내용</h3>
              <ul>
                {curProject?.overview.map((desc, idx) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          </ProjectOverView>
          <ProjectSub>
            <dl>
              <dt>프로젝트 기간</dt>
              <dd>2025~242345</dd>
            </dl>
            <ProjectSkill>
              <li>Vue</li>
              <li>Vue</li>
              <li>Vue</li>
            </ProjectSkill>
          </ProjectSub>
        </ProjectInfo>
        {/* 사진 유무 */}
        <ul>
          {curProject?.detailImg.map((img, idx) => (
            <li key={`${curProject?.title}-${idx}`}>
              <img src={getPublicImagePath(img)} alt={curProject?.title} />
            </li>
          ))}
        </ul>
      </InfoContent>
    </Layout>
  )
}

const BackgroundArea = styled.div`
  background-image: url(${({ $img }) => $img});
  background-color: ${({ $color }) => $color};
  background-repeat: no-repeat;
  background-size: 25%;
  background-position: center;
  height: 50vh;

  ${({ theme }) => theme.device.desktop} {
    height: 100vh;
  }
`
const InfoContent = styled.div`
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: auto;
  padding: 10rem 2rem 0;

  img {
    max-width: 100%;
  }
  ${({ theme }) => theme.device.tabletL} {
    padding: 4rem 2rem 0;
  }
`

const ProjectInfo = styled.div`
  display: flex;
  font-size: 1.6rem;
  gap: 9.4rem;
  margin-bottom: 10rem;

  h2 {
    font-size: 7.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.device.tabletL} {
    flex-direction: column;
    margin-bottom: 6rem;

    gap: 2rem;
  }
`

const ImportDesc = styled.p`
  font-size: 1.8rem;
  ${({ theme }) => theme.device.desktop} {
    font-size: 2rem;
  }
`

const ProjectOverView = styled.section`
  flex: 1;
  font-size: 2rem;

  h3 {
    font-size: 2.6rem;
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
`
const ProjectSub = styled.section`
  flex: 0.5;
  font-size: 2rem;
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

  > li {
    padding: 0.5rem 2rem;
    color: #fff;
    border-radius: 2rem;
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.colors.black};
  }
`
export default Projects
