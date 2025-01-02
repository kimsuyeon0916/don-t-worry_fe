'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icon } from '../icons'

const NAV_ITEMS = [
  { text: '홈', icon: 'home', path: '/' },
  { text: '포트폴리오', icon: 'portfolio', path: '/portfolio' },
  { text: '시세차익', icon: 'profit', path: '/profit' },
  { text: '설정', icon: 'setting', path: '/setting' },
] as const

export const BottomNav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex-between-align fixed bottom-0 w-screen max-w-[var(--layout-max-w)] rounded-t-lg border border-b-0 border-gray-4 bg-white px-[22px] py-[4px]">
      {NAV_ITEMS.map(({ text, icon, path }) => {
        const selected = path === pathname

        const textStyle = selected ? 'text-button-text' : 'text-gray-6'
        const bgColorStyle = selected ? '#374162' : '#DDDDDD'

        return (
          <Link
            key={path}
            href={path}
            className={`flex-column-align navi_bold gap-px py-[6px] ${textStyle} w-[48px]`}
          >
            <Icon name={icon} color={bgColorStyle} />
            {text}
          </Link>
        )
      })}
    </nav>
  )
}
