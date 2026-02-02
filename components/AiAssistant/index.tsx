import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import RainbowBotIcon from "components/RainbowBotIcon"

const Button = styled.button`
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

export default function AiAssistant() {
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
    <div className="p-8">
      <Button onClick={handleClick}>
        {loading ? "요청중..." : "AI에게 포트폴리오 소개 요청"}
        <RainbowBotIcon />
      </Button>
      <div className="mt-4">{response}</div>
    </div>
  )
}
