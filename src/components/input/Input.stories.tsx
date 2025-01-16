import { FormProvider, useForm } from 'react-hook-form'
import type { Meta } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input.Text> = {
  title: 'Input',
  component: Input.Text,
}

export default meta

type FormType = {
  input: string
}

export const Form = () => {
  const formMethod = useForm<FormType>({
    defaultValues: {
      input: '',
    },
  })

  const {
    handleSubmit,
    formState: { errors },
  } = formMethod
  const handleSubmitForm: (formData: FormType) => void = (formData) => alert('제출')

  return (
    <div className="max-w-[450px]">
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="flex-column gap-8">
          <Input.Text name="입력폼" placeholder="텍스트" maxLength={5} />
          <Input.Select name="선택입력폼" placeholder="선택" onClick={() => alert('입력폼 클릭')} />
          <Input.TextWithTitle title="제목" name="제목텍스트입력폼" placeholder="텍스트" />
          <button type="submit" onClick={() => console.log(errors)}>
            제출
          </button>
        </form>
      </FormProvider>
    </div>
  )
}
