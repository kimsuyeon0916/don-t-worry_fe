import type { PropsWithChildren } from 'react'
import { DevTools } from 'jotai-devtools'

import QueryProvider from '@/hooks/QueryProvider'

import './globals.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <DevTools />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
