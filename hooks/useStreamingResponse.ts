import { useCallback, useRef, useState } from "react"

const SESSION_STORAGE_KEY = "aiModalResponse"

function getCache(): string | null {
  try {
    return sessionStorage.getItem(SESSION_STORAGE_KEY)
  } catch {
    return null
  }
}
function setCache(text: string) {
  try {
    return sessionStorage.setItem(SESSION_STORAGE_KEY, text)
  } catch {
    console.warn("sessionStorage write failed")
  }
}
// text 타이핑
async function typeText(
  text: string,
  append: (char: string) => void,
  interval = 10,
) {
  for (const char of text) {
    append(char)
    await new Promise((resolve) => setTimeout(resolve, interval))
  }
}

export function useStreamingResponse() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const append = useCallback((char: string) => {
    setResponse((prev) => prev + char)
  }, [])

  const reset = useCallback(() => {
    abortRef.current?.abort()
    setResponse("")
    setError(null)
    setLoading(false)
  }, [])

  const fetchAndStream = useCallback(async () => {
    const cached = getCache()
    // 캐시된거 있으면 사용
    if (cached) {
      await typeText(cached, append)
      return
    }

    setLoading(true)
    setResponse("")
    setError(null)
    // 진행 중인 요청 중단
    abortRef.current?.abort()
    const controller = new AbortController()
    abortRef.current = controller

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          prompt:
            "이 개발자의 포트폴리오를 종합적으로 소개해주세요. 주요 강점, 프로젝트 경험, 기술 스택, 그리고 성과를 중심으로 친근하게 설명해주세요.",
        }),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      if (!res.body) throw new Error("No response body")

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ""

      while (true) {
        const { value, done } = await reader.read()

        if (done) break

        const chunk = decoder.decode(value, { stream: true })

        for (const char of chunk) {
          if (controller.signal.aborted) return
          fullText += char
          append(char)
          await new Promise((resolve) => setTimeout(resolve, 10))
        }
      }
      // 완료 시 캐시 저장
      setCache(fullText)
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return
      setError(err instanceof Error ? err.message : "요청 실패")
    } finally {
      setLoading(false)
    }
  }, [])

  return { response, loading, error, fetchAndStream, reset }
}
