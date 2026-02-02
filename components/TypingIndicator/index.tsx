import styled, { keyframes, css } from "styled-components"

const popIn = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.02);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`

export const ChatInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  background: #f5f5f5;
  transition: box-shadow 0.2s ease;

  &:focus-within {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`

export const ChatInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 15px;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`

const TypingIndicator = styled.div<{ active: boolean }>`
  margin-left: 8px;
  font-size: 12px;
  color: #666;

  ${({ active }) =>
    active &&
    css`
      animation: ${popIn} 0.25s ease-out;
    `}
`

export default TypingIndicator
