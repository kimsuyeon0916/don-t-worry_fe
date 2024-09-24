import type { PropsWithChildren } from 'react'

import { LazyMotionProvider, QueryProvider } from '@/hooks'

import { nanumBarunGothic } from './fonts'

import './globals.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="kr" className={`${nanumBarunGothic.variable} font-nanumBarunGothic`}>
      <head />
      <body>
        <QueryProvider>
          <LazyMotionProvider>
            <div className="layout">{children}</div>
          </LazyMotionProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
