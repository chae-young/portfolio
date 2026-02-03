import styled, { keyframes } from "styled-components"

// ChatGPT 스타일 타이핑 인디케이터 애니메이션
const bounce = keyframes`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
`

const Wrapper = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "flex" : "none")};
  gap: 4px;
  align-items: center;
`

const Dot = styled.span<{ delay: number }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #999;
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${({ delay }) => `${delay}s`};
`

interface TypingIndicatorProps {
  active?: boolean
}

const TypingIndicator = ({ active = true }: TypingIndicatorProps) => (
  <Wrapper active={active}>
    <Dot delay={0} />
    <Dot delay={0.2} />
    <Dot delay={0.4} />
  </Wrapper>
)

export default TypingIndicator
