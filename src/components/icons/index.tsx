import { ArrowBottomIcon, ArrowDownIcon, ArrowUpIcon } from './Arrow'
import { BackIcon, BottomBackIcon } from './Back'
import { BellIcon } from './Bell'
import { CheckBoxNoIcon, CheckBoxYesIcon, CheckIcon } from './Check'
import { DeleteIcon, TextDeleteIcon } from './Delete'
import { EditIcon } from './Edit'
import { GoIcon } from './Go'
import { HomeIcon, PortfolioIcon, ProfitIcon, SettingIcon } from './Navigation'
import { PlusIcon } from './Plus'

export interface IconProps {
  color?: string
  size?: number
}

export const iconMap = {
  back: BackIcon,
  'bottom-back': BottomBackIcon,
  go: GoIcon,
  bell: BellIcon,
  check: CheckIcon,
  'check-box-yes': CheckBoxYesIcon,
  'check-box-no': CheckBoxNoIcon,
  delete: DeleteIcon,
  'text-delete': TextDeleteIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  'arrow-bottom': ArrowBottomIcon,
  plus: PlusIcon,
  edit: EditIcon,
  home: HomeIcon,
  portfolio: PortfolioIcon,
  profit: ProfitIcon,
  setting: SettingIcon,
}

export interface IconComponentProps extends IconProps {
  name: keyof typeof iconMap
}

export const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = iconMap[name]

  return <IconComponent {...props} />
}
