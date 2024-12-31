'use client'

import { useRouter } from 'next/navigation'

import { useBoolean } from '@/hooks'

import { Icon } from '../icons'

type HeaderProps = {
  title?: string
  subtitle?: string
  canBack?: boolean
  canClose?: boolean
  canEdit?: boolean
  canDelete?: boolean
  onClose?: VoidFunction
  onEdit?: VoidFunction
  onDelete?: VoidFunction
}

export const Home = ({ onClose }: Pick<HeaderProps, 'onClose'>) => {
  return (
    <header className="flex-between-align h-[56px] w-full pl-[16px]">
      <div className="flex-align h3_bold gap-[8px] text-black">
        <Icon name="ellipse" />
        don-t-worry
      </div>
      <button onClick={onClose} type="button">
        <Icon name="bell" />
      </button>
    </header>
  )
}

export const Title = ({
  title,
  subtitle,
  canBack,
  canClose,
  onClose,
}: Pick<HeaderProps, 'title' | 'subtitle' | 'canBack' | 'canClose' | 'onClose'>) => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  const headerStyle = !canBack && 'pl-[16px]'

  return (
    <header className={`flex-between-align relative w-full ${headerStyle}`}>
      <div className="flex-align">
        {canBack && (
          <button onClick={handleBack} type="button">
            <Icon name="back" />
          </button>
        )}
        <h1 className="h2_bold text-black">{title}</h1>
      </div>
      <button onClick={onClose} type="button">
        {canClose && <Icon name="delete" />}
      </button>
      <h2 className="body4_light absolute bottom-[-4px] left-[16px] text-black">{subtitle}</h2>
    </header>
  )
}

export const Tab = ({
  subtitle,
  onEdit,
  onDelete,
  onClose,
}: Pick<HeaderProps, 'subtitle' | 'onEdit' | 'onDelete' | 'onClose'>) => {
  const [canEdit, toggleEdit] = useBoolean(true)

  const handleClickEdit = () => {
    toggleEdit()
    if (onEdit) onEdit()
  }

  const handleClickDelete = () => {
    toggleEdit()
    if (onDelete) onDelete()
  }

  return (
    <header className="flex-column w-full gap-[3px] pl-[16px]">
      <div className="flex-between-align relative">
        <div className="flex-align gap-[12px]">
          <button
            className="h2_bold relative w-[40px] text-black"
            onClick={handleClickEdit}
            type="button"
          >
            편집
            {canEdit && (
              <hr className="absolute bottom-[-7px] left-1/2 h-[4px] w-[40px] -translate-x-1/2 border-none bg-black" />
            )}
          </button>
          <button
            className="h2_bold relative w-[40px] text-black"
            onClick={handleClickDelete}
            type="button"
          >
            삭제
            {!canEdit && (
              <hr className="absolute bottom-[-7px] left-1/2 h-[4px] w-[40px] -translate-x-1/2 border-none bg-black" />
            )}
          </button>
        </div>
        <button onClick={onClose} type="button">
          <Icon name="delete" />
        </button>
      </div>
      <h2 className="body4_light text-black">{subtitle}</h2>
    </header>
  )
}

export const Sub = ({ title }: Pick<HeaderProps, 'title'>) => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  return (
    <header className="flex-between-align relative w-full">
      <button className="h3_bold text-black" onClick={handleBack} type="button">
        <Icon name="back" />
      </button>
      <h1 className="h3_bold absolute left-1/2 -translate-x-1/2 text-black">{title}</h1>
    </header>
  )
}

export const Header = { Home, Title, Tab, Sub }
