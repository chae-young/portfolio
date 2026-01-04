import styled from "styled-components"

const TwoColumnLayout = ({ left, right }) => {
  return (
    <Wrapper>
      <LayoutWrapper>
        <LeftSection>{left}</LeftSection>
        <RightSection>{right}</RightSection>
      </LayoutWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

const LayoutWrapper = styled.div`
  max-width: ${({ theme }) => theme.deviceSizes.maxSize};
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${({ theme }) => theme.device.desktop} {
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 60px;
    align-items: start;
  }
`

const LeftSection = styled.div`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;

  ${({ theme }) => theme.device.desktop} {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    padding-top: 10rem;
    font-size: 4rem;
  }
`

const RightSection = styled.div`
  ${({ theme }) => theme.device.desktop} {
    padding: 100px 0;
  }
`

export default TwoColumnLayout
