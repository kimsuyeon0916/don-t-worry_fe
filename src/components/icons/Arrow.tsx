import type { IconProps } from '.'

export const ArrowUpIcon = (props: IconProps) => {
  const { color = '#FF9292', size = 14 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M11.1727 10L2.99149 10C2.25587 10 1.88805 9.08945 2.40712 8.55859L6.49774 4.375C6.82087 4.04453 7.34337 4.04453 7.66305 4.375L11.7571 8.55859C12.2762 9.08945 11.9084 10 11.1727 10Z"
        fill={color}
      />
    </svg>
  )
}

export const ArrowDownIcon = (props: IconProps) => {
  const { color = '#708FFF', size = 14 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M2.82726 4H11.0085C11.7441 4 12.1119 4.91055 11.5929 5.44141L7.50226 9.625C7.17913 9.95547 6.65663 9.95547 6.33695 9.625L2.24288 5.44141C1.72382 4.91055 2.09163 4 2.82726 4Z"
        fill={color}
      />
    </svg>
  )
}

export const ArrowBottomIcon = (props: IconProps) => {
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
        d="M3 5.00049L8 10.0005L13 5.00049"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
