import type { IconProps } from '.'

export const BackIcon = (props: IconProps) => {
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
        d="M28 15L19 23.5L28 32"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const BottomBackIcon = (props: IconProps) => {
  const { color = '#333333', size = 40 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M24 11L15 19.5L24 28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
