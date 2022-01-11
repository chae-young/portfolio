import React from "react"

import styled from "styled-components"
import HandShaking from "./HandShaking"

const ProfileObj = {
  name: "이채영",
  birthday: "1995-02-23",
  phone: "010-9528-8527",
  school: "백제예술대학 연예매니지먼트 졸업",
  education: "2017.02 ~ 07 한국직업전문학교 웹표준 퍼블리싱 실무자 양성 수료",
}

const Profile = () => {
  return (
    <ProfileBox>
      <MyImg>
        <div>
          <img src="/images/about/me.jpg" width="100%" />
        </div>
      </MyImg>
      <MyInfo>
        <h2>
          <b> 더 나은 UI/UX를 향해 끊임없이 고민하는</b> <br />
          웹퍼블리셔 이채영 입니다.
        </h2>
        <p>
          웹 표준을 준수하여 시맨틱한 마크업을 하고, 다양한 디바이스에서
          반응하도록 UI를 설계합니다. 사용자들이 좋은 경험을 할 수 있도록
          UI/UX를 고민하며 유지보수에 최적화된 스타일을 모듈화 하는 것에 관심이
          많습니다. <br />
          <br />
          항상 새로운 시도를 하려고 합니다. <br />
          트렌드 기술을 어떠한 방법으로 활용하여 어떻게 화면에 녹여낼지
          고민합니다. (현재 포트폴리오도 react에 styled component를
          활용하였어요🙂)
          <br />
          <br />
          자부심을 가지고 다양하고 효율성 있는 UI를 계속 구현하고 싶습니다.
          목표를 가진만큼 사용자들에게 더 다가가기 위해 계속 고민하고 배우며
          발전하고 있습니다.
        </p>
      </MyInfo>
    </ProfileBox>
  )
}
const ProfileBox = styled.div`
  padding: 20rem 8rem;
  background: rgb(0, 0, 0);

  ${({ theme }) => theme.device.tabletWidthDesktop} {
    display: flex;
    align-items: flex-start;
  }
  ${({ theme }) => theme.device.tabletL} {
    padding: 6rem 2rem;
  }
  > div {
    flex: 1;
  }
`
const MyImg = styled.div`
  display: flex;

  ${({ theme }) => theme.device.desktop} {
    > div {
      width: 70%;
      margin: auto;
    }
  }
  ${({ theme }) => theme.device.tabletL} {
    padding-right: 10px;
  }
`
const MyInfo = styled.div`
  padding-left: 2rem;
  font-size: 1.4rem;
  color: rgb(255, 255, 255);

  > h2 {
    margin-bottom: 8rem;
    font-size: 3.6rem;
    & b {
      font-weight: 700;
      &:before {
        content: "";
        display: bloack;
      }
    }
  }
  p {
    word-break: break-all;
    line-height: 3.6rem;
    font-size: 2rem;
  }
  > dl {
    display: flex;
    line-height: 2.4;
    dt {
      flex-shrink: 0;
      font-weight: 700;
      width: 70px;
    }
  }

  ${({ theme }) => theme.device.desktop} {
    p {
      width: 70%;
    }
  }
  ${({ theme }) => theme.device.tabletL} {
    p {
      font-size: 1.4rem;
      line-height: 2.6rem;
    }
  }
  ${({ theme }) => theme.device.mobileL} {
    padding: 0;
    margin: 2rem 0 0;

    > h2 {
      position: relative;
      top: -52px;
      padding: 0 2rem;
      margin-bottom: 0rem;
      font-size: 2.8rem;
      word-break: keep-all;
    }
  }
`
export default Profile
