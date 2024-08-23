import { type ComponentProps, type MouseEventHandler, useEffect } from 'react'
import { m, type Variants } from 'framer-motion'

import { zIndex } from '@/constants'
import { useScrollLock } from '@/hooks'

import { AnimatePortal } from '../portal/AnimatePortal'

interface BottomSheetProps extends ComponentProps<typeof AnimatePortal> {
  onClickScrim?: VoidFunction
  variant?: 'short' | 'middle' | 'long'
}

export const BottomSheet = ({
  onClickScrim,
  variant = 'long',
  isShowing,
  children,
  mode,
}: BottomSheetProps) => {
  const { lockScroll, unlockScroll } = useScrollLock()

  const handleClickScrim: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return
    if (onClickScrim) onClickScrim()
  }

  useEffect(() => {
    if (isShowing) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [isShowing, lockScroll, unlockScroll])

  const heightStyle = {
    short: 'min-h-[calc(100vh-498px)]',
    middle: 'h-[calc(100vh-198px)]',
    long: 'h-[calc(100vh-72px)]',
  }

  return (
    <AnimatePortal isShowing={isShowing} mode={mode}>
      <m.div
        className={`fixed inset-0 ${zIndex.backdrop} h-full w-screen overflow-hidden bg-[rgba(0,0,0,0.4)]`}
        onClick={handleClickScrim}
        variants={bottomSheetFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <m.div
          className={`flex-column-align ${heightStyle[variant]} absolute left-0 top-full ${zIndex.backdrop} w-full rounded-t-2xl bg-white px-[16px] pb-[16px] pt-[12px]`}
          variants={bottomSheetVariants}
        >
          {children}
        </m.div>
      </m.div>
    </AnimatePortal>
  )
}

const easing = [0.6, -0.05, 0.01, 0.99]

const bottomSheetFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: easing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
    willChange: 'opacity',
  },
}

const bottomSheetVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.3, ease: easing },
    willChange: 'transform',
  },
  animate: {
    y: '-100%',
    transition: { duration: 0.3, ease: easing },
    willChange: 'transform',
  },
  exit: {
    y: 0,
    transition: { duration: 0.3, ease: easing },
    willChange: 'transform',
  },
}
