'use client'

import { useFormContext } from 'react-hook-form'

import { Icon } from '../icons'

interface InputProps {
  name: string
  placeholder: string
  canClear?: boolean
  maxLength?: number
  onClick?: VoidFunction
}

export const Text = ({ name, placeholder, maxLength }: InputProps) => {
  const { register, setValue, watch } = useFormContext()

  const handleClearInput = () => {
    setValue(name, '')
  }

  const inputValue: string = watch(name)

  return (
    <div className="relative w-full">
      <input
        type="text"
        {...register(name)}
        className="body2_bold h-[48px] w-full rounded-md border border-gray-1 bg-white px-[16px] text-black shadow-card placeholder:font-regular placeholder:text-gray-6 focus:border-primary focus:outline-none"
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <div className="flex-align body3_reg absolute right-[17px] top-1/2 -translate-y-1/2 text-gray-6">
        {inputValue?.length > 0 && (
          <button type="button" onClick={handleClearInput}>
            <Icon name="text-delete" />
          </button>
        )}
        {inputValue?.length ?? 0}/{maxLength}
      </div>
    </div>
  )
}

export const Select = ({ name, placeholder, onClick }: InputProps) => {
  const { register, watch } = useFormContext()

  const inputValue: string = watch(name)
  const inputStyle = inputValue?.length > 0 && 'border-primary'

  return (
    <div className="relative w-full">
      <input
        type="text"
        {...register(name)}
        readOnly
        className={`body2_bold h-[48px] w-full rounded-md border border-gray-1 bg-white px-[16px] text-black shadow-card placeholder:font-regular placeholder:text-gray-6 focus:outline-none ${inputStyle}`}
        placeholder={placeholder}
        onClick={onClick}
      />
      <button
        type="button"
        className="flex-align body3_reg absolute right-[17px] top-[18.5px] text-gray-6"
      >
        <Icon name="arrow-bottom" />
      </button>
    </div>
  )
}

interface InputWithTitleProps extends InputProps {
  title: string
}

export const TextWithTitle = ({ title, name, placeholder }: InputWithTitleProps) => {
  const { register, setValue, watch } = useFormContext()

  const handleClearInput = () => {
    setValue(name, '')
  }

  const inputValue: string = watch(name)
  const inputStyle = inputValue?.length > 0 ? 'pr-[32px] pl-[16px]' : 'px-[16px]'

  return (
    <div className="relative w-full">
      <label className="body3_reg absolute left-[17px] top-1/2 -translate-y-1/2 text-black placeholder:text-gray-6">
        {title}
      </label>
      <input
        type="text"
        {...register(name)}
        className={`body3_bold h-[48px] rounded-md border border-gray-1 bg-white ${inputStyle} w-full text-right text-black  shadow-card placeholder:font-regular placeholder:text-gray-6 focus:border-primary  focus:outline-none`}
        placeholder={placeholder}
        key={name}
      />
      {inputValue?.length > 0 && (
        <button
          type="button"
          className="absolute right-px top-1/2 -translate-y-1/2"
          onClick={handleClearInput}
        >
          <Icon name="text-delete" />
        </button>
      )}
    </div>
  )
}

export const Input = { Text, Select, TextWithTitle }
