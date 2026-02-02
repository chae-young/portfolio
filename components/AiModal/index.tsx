import * as Dialog from "@radix-ui/react-dialog"
import ReactMarkdown from "react-markdown"
import RainbowBotIcon from "components/RainbowBotIcon"
import { useState } from "react"
import styled from "styled-components"
import TypingIndicator from "components/TypingIndicator"

export function AiModal() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")

  const handleClick = async () => {
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

      let done = false
      while (!done) {
        const { value, done: readerDone } = await reader.read()
        done = readerDone

        if (value) {
          const text = decoder.decode(value, { stream: true })
          setResponse((prev) => prev + text)
        }
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog.Root>
      <Button onClick={handleClick}>
        {loading ? "요청중..." : "AI에게 포트폴리오 소개 요청"}
        <RainbowBotIcon />
      </Button>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <ContentWrapper>
            <ContentDesc>
              <TypingIndicator active />
              {/* {loading ? (
                <TypingIndicator active />
              ) : (
                <Markdown>{response}</Markdown>
              )} */}
            </ContentDesc>
            <Dialog.Close>닫기</Dialog.Close>
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
const Button = styled(Dialog.Trigger)`
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
  color: #fff;
`
const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ContentWrapper = styled.div`
  max-height: 500px;
  padding: 20px;
  background: white;
  width: min(1000px, 90vw);
`

const ContentDesc = styled(Dialog.Description)`
  font-size: 16px;
  line-height: 1.8;
  overflow-y: auto;
  max-height: 500px;
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
  hr {
    border: none;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
    margin: 32px 0;
  }
`
