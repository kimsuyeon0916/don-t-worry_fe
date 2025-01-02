import type { IconProps } from '.'

export const EllipseIcon = (props: IconProps) => {
  const { color = '#1E6AFF', size = 16 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="8" fill={color} />
    </svg>
  )
}
