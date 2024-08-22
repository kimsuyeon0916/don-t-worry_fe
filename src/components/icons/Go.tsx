import type { IconProps } from '.'

export const GoIcon = (props: IconProps) => {
  const { color = '#AEAEAE', size = 16 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5 13L10 8L5 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
