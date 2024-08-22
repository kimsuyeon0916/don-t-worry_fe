import type { IconProps } from '.'

export const DeleteIcon = (props: IconProps) => {
  const { color = '#D9D9D9', size = 48 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="16" fill={color} />
      <path
        d="M30 18L18 30M18 18L30 30"
        stroke="#333333"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const TextDeleteIcon = (props: IconProps) => {
  const { color = '#D9D9D9', size = 40 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.202 16.202C16.4713 15.9327 16.908 15.9327 17.1773 16.202L20 19.0247L22.8227 16.202C23.092 15.9327 23.5287 15.9327 23.798 16.202C24.0673 16.4713 24.0673 16.908 23.798 17.1773L20.9753 20L23.798 22.8227C24.0673 23.092 24.0673 23.5287 23.798 23.798C23.5287 24.0673 23.092 24.0673 22.8227 23.798L20 20.9753L17.1773 23.798C16.908 24.0673 16.4713 24.0673 16.202 23.798C15.9327 23.5287 15.9327 23.092 16.202 22.8227L19.0247 20L16.202 17.1773C15.9327 16.908 15.9327 16.4713 16.202 16.202Z"
        fill="#EEEEEF"
      />
    </svg>
  )
}
