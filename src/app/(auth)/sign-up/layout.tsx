import type { PropsWithChildren } from 'react'

import { SignUpFormProvider } from '@/features'

const SignUpLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-column-align relative mx-auto min-h-screen w-full">
      <SignUpFormProvider>{children}</SignUpFormProvider>
    </main>
  )
}

export default SignUpLayout
