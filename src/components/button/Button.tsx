'use client'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit'
  onClick?: VoidFunction
  isDisable?: boolean
  secondary?: boolean
}

export const Button = ({
  text,
  type = 'button',
  onClick,
  isDisable,
  secondary = false,
}: ButtonProps) => {
  const buttonStyle = isDisable
    ? 'text-button-text bg-button-disable'
    : secondary
      ? 'text-gray-7 bg-white border border-gray-1 active:bg-gray-1'
      : 'text-white bg-primary  active:bg-button-press'
  return (
    <button
      className={`btn_bold w-full rounded-md px-[16px] py-[15px] text-center ${buttonStyle}`}
      onClick={onClick}
      type={type}
      disabled={isDisable}
    >
      {text}
    </button>
  )
}
