import type { Metadata } from 'next'
import React from 'react'
import StyledComponentsRegistry from './registry'
import Theme from './theme-provider'

export const metadata: Metadata = {
  title: 'LeeChaeng Portfolio',
  description: 'Frontend Developer Portfolio',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2016%2Ces2015%2Ces2017%2Ces2018%2Ces2019" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Theme>
            {children}
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
