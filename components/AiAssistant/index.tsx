import React, { useState } from "react"
import styled from "styled-components"
import RainbowBotIcon from "components/RainbowBotIcon"
import AiButton from "components/AiButton"
import { streamPortfolioDescription } from "utils/aiChat"

export default function AiAssistant() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleClick = async () => {
    setLoading(true)
    setResponse("")
    setError(null)

    try {
      await streamPortfolioDescription({
        onBatchUpdate: (fullText) => {
          setResponse(fullText)
        },
        onComplete: () => {
          setError(null)
        },
        onError: (err) => {
          setError(`요청 중 오류가 발생했습니다: ${err.message}`)
        },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <AiButton onClick={handleClick} disabled={loading}>
        {loading ? "요청중..." : "AI에게 포트폴리오 소개 요청"}
        <RainbowBotIcon />
      </AiButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {response && <ResponseContainer>{response}</ResponseContainer>}
    </div>
  )
}

const ErrorMessage = styled.div`
  margin-top: 16px;
  padding: 12px;
  background-color: #ffebee;
  color: #d32f2f;
  border-radius: 8px;
  border-left: 4px solid #d32f2f;
`

const ResponseContainer = styled.div`
  margin-top: 16px;
  line-height: 1.6;
`
