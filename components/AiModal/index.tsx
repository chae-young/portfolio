import * as Dialog from "@radix-ui/react-dialog"
import ReactMarkdown from "react-markdown"
import RainbowBotIcon from "components/RainbowBotIcon"
import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import TypingIndicator from "components/TypingIndicator"
import { X } from "lucide-react"
import { useStreamingResponse } from "hooks/useStreamingResponse"

export function AiModal() {
  const { response, loading, error, fetchAndStream, reset } =
    useStreamingResponse()
  const contentDescRef = useRef<HTMLDivElement>(null)

  // 텍스트가 추가될 때마다 스크롤을 하단으로 자동 이동
  useEffect(() => {
    if (contentDescRef.current) {
      contentDescRef.current.scrollTop = contentDescRef.current.scrollHeight
    }
  }, [response])

  return (
    <Dialog.Root onOpenChange={(open) => !open && reset()}>
      <DialogButton onClick={fetchAndStream} disabled={loading}>
        {loading ? "요청중..." : "AI에게 요약 요청"}
        <RainbowBotIcon />
      </DialogButton>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <ContentWrapper>
            <ContentTitle className="DialogTitle">
              포트폴리오 요약 요청
              <Dialog.Close>
                <X width={30} height={30} />
              </Dialog.Close>
            </ContentTitle>
            <ContentDesc ref={contentDescRef} asChild>
              <div>
                {error ? (
                  <ErrorMessage>{error}</ErrorMessage>
                ) : response === "" && loading ? (
                  <LoadingContent>
                    <TypingIndicator active={true} />
                    <p>AI에게 요청 보내는 중...</p>
                  </LoadingContent>
                ) : (
                  <Markdown>{response}</Markdown>
                )}
              </div>
            </ContentDesc>
          </ContentWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
`

const DialogButton = styled(Dialog.Trigger)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 13px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`

const ContentWrapper = styled.div`
  padding: 20px;
  background: white;
  width: min(1000px, 80vw);
  border-radius: 10px;
  overflow: hidden;
`

const ContentTitle = styled(Dialog.Title)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  font-size: 24px;
`

const ContentDesc = styled(Dialog.Description)`
  font-size: 16px;
  line-height: 1.8;
  overflow-y: auto;
  max-height: 500px;
`

const ErrorMessage = styled.div`
  padding: 12px;
  background-color: #ffebee;
  color: #d32f2f;
  border-radius: 8px;
  border-left: 4px solid #d32f2f;
`
const LoadingContent = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Markdown = styled(ReactMarkdown)`
  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  h2 {
    font-size: 24px;
    margin-top: 32px;
  }

  ul {
    padding-left: 20px;
  }

  li {
    list-style: disc;
  }

  strong {
    font-weight: 600;
  }

  p {
    color: #3b3b3b;
  }

  hr {
    border: none;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
    margin: 32px 0;
  }
`
