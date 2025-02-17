import dynamic from 'next/dynamic'

export const HookformDevTools: React.ElementType = dynamic(
  () => import('@hookform/devtools').then((module) => module.DevTool),
  { ssr: false },
)
