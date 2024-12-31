import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: '텍스트',
    onClick: () => alert('클릭'),
  },
}

export const All = () => {
  return (
    <div className="flex-column gap-[20px]">
      <Button text="텍스트" onClick={() => alert('클릭')} />
      <Button text="텍스트" onClick={() => alert('클릭')} isDisable />
    </div>
  )
}
