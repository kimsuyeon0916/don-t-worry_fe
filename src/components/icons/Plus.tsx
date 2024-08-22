import type { IconProps } from '.'

export const PlusIcon = (props: IconProps) => {
  const { color = '#333333', size = 48 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M31.875 23.4375H15M23.4375 15V31.875"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
