import * as Dialog from "@radix-ui/react-dialog"
import ReactMarkdown from "react-markdown"
import RainbowBotIcon from "components/RainbowBotIcon"
import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import TypingIndicator from "components/TypingIndicator"
import { X } from "lucide-react"
import AiButton from "components/AiButton"
import { streamPortfolioDescription } from "utils/aiChat"

const SESSION_STORAGE_KEY = "aiModalResponse"

export function AiModal() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [error, setError] = useState<string | null>(null)
  const contentDescRef = useRef<HTMLDivElement>(null)

  // 텍스트가 추가될 때마다 스크롤을 하단으로 자동 이동
  useEffect(() => {
    if (contentDescRef.current) {
      contentDescRef.current.scrollTop = contentDescRef.current.scrollHeight
    }
  }, [response])

  const handleClick = async () => {
    // 세션에 저장된 응답이 있는지 확인
    const cachedResponse = sessionStorage.getItem(SESSION_STORAGE_KEY)
    if (cachedResponse) {
      setResponse(cachedResponse)
      return
    }

    setLoading(true)
    setResponse("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          prompt:
            "이 개발자의 포트폴리오를 종합적으로 소개해주세요. 주요 강점, 프로젝트 경험, 기술 스택, 그리고 성과를 중심으로 친근하게 설명해주세요.",
        }),
      })

      if (!res.body) return

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      let buffer = ""
      let done = false
      let isDisplaying = false
      let fullText = ""

      // 버퍼에 있는 텍스트를 글자 단위로 자연스럽게 표시
      const displayCharacters = async () => {
        while (buffer.length > 0) {
          const char = buffer.charAt(0)
          buffer = buffer.slice(1)
          fullText += char
          setResponse((prev) => prev + char)
          // 10ms 간격으로 글자 표시 (ChatGPT 스타일)
          await new Promise((resolve) => setTimeout(resolve, 10))
        }
        // 버퍼가 비워졌으므로 플래그 리셋
        isDisplaying = false
      }

      // 스트리밍 받기
      while (!done) {
        const { value, done: readerDone } = await reader.read()
        done = readerDone

        if (value) {
          const text = decoder.decode(value, { stream: true })
          buffer += text

          // 글자 표시 시작
          if (!isDisplaying) {
            isDisplaying = true
            displayCharacters()
          }
        }
      }

      // 남은 버퍼 모두 표시될 때까지 대기
      while (buffer.length > 0) {
        await new Promise((resolve) => setTimeout(resolve, 10))
      }

      // 완료된 응답을 세션에 저장
      sessionStorage.setItem(SESSION_STORAGE_KEY, fullText)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog.Root>
      <DialogButton onClick={handleClick} disabled={loading}>
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
            <ContentDesc ref={contentDescRef}>
              {error ? (
                <ErrorMessage>{error}</ErrorMessage>
              ) : response === "" && loading ? (
                <TypingIndicator active={true} />
              ) : (
                <Markdown>{response}</Markdown>
              )}
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
`

const ContentWrapper = styled.div`
  padding: 20px;
  background: white;
  width: min(1000px, 90vw);
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
