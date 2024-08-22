'use client'

import { type PropsWithChildren, useState } from 'react'
import { QueryClient, type QueryClientConfig, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DevTools } from 'jotai-devtools'

const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
}

export const QueryProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient(queryClientOption))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
      <DevTools />
    </QueryClientProvider>
  )
}
