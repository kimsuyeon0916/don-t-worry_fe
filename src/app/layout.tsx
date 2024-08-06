import type { PropsWithChildren } from 'react'

import QueryProvider from '@/hooks/QueryProvider'

import { nanumBarunGothic } from './fonts'

import './globals.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="kr" className={nanumBarunGothic.variable}>
      <head />
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
