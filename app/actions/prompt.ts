"use server"

import { streamText } from "ai"
import { createStreamableValue } from "@ai-sdk/rsc"
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

export async function prompt(input: string) {
  const stream = createStreamableValue("")

  ;(async () => {
    const result = await ai.models.generateContentStream({
      model: "gemini-1.5-flash", // 또는 "gemini-2.0-flash-exp-0205"
      contents: input,
    })

    let fullText = ""
    for await (const chunk of result) {
      const text = chunk.text || ""
      fullText += text
      stream.update(fullText) // 누적된 전체 텍스트 업데이트
    }

    stream.done()
  })()

  return { output: stream.value }
}
