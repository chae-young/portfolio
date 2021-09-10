import React from "react"
import Image from "next/image"

import styled from "styled-components"
import HandShaking from "./HandShaking"

const ProfileObj = {
  name: "이채영",
  birthday: "1995-02-23",
  phone: "01095288527",
  school: "백제예술대학 연예매니지먼트 졸업",
  education: "2017.02 ~ 07 한국직업전문학교 웹표준 퍼블리싱 실무자 양성 수료",
}

const Profile = () => {
  return (
    <ProfileBox>
      <MyImg>
        <div>
          <Image
            src="/images/about/me.jpg"
            layout="intrinsic"
            width={2734}
            height={3646}
          />
        </div>
      </MyImg>
      <MyInfo>
        <p>
          안녕하세요.
          <HandShaking />
          <br /> frontend developer 이채영 입니다. <br />
          <b>
            저는 새로운 지식을 배우는 걸 좋아하고 <br />
            배운 지식을 나만의것으로 만드는 것을 목표로 삼고있습니다.
          </b>
        </p>
        <dl>
          <dt>이름</dt>
          <dd>{ProfileObj.name}</dd>
        </dl>
        <dl>
          <dt>생년월일</dt>
          <dd>{ProfileObj.birthday}</dd>
        </dl>
        <dl>
          <dt>연락처</dt>
          <dd>{ProfileObj.phone}</dd>
        </dl>
        <dl>
          <dt>학력</dt>
          <dd>{ProfileObj.school}</dd>
        </dl>
        <dl>
          <dt>교육</dt>
          <dd>{ProfileObj.education}</dd>
        </dl>
      </MyInfo>
    </ProfileBox>
  )
}
const ProfileBox = styled.div`
  ${({ theme }) => theme.device.tabletWidthDesktop} {
    display: flex;
  }
  margin-bottom: 10rem;
  > div {
    flex: 1;
  }
`
const MyImg = styled.div`
  display: flex;

  > div {
    width: 60%;
    margin: auto;
  }
`
const MyInfo = styled.div`
  padding-left: 2rem;
  font-size: 1.4rem;
  ${({ theme }) => theme.device.mobileL} {
    padding: 0;
    margin: 2rem 0 0;
  }

  > p {
    margin-bottom: 2rem;
    font-size: 2rem;
    & b {
      font-weight: 700;
    }
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
`
export default Profile
