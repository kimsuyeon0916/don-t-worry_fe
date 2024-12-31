import type { Meta, StoryObj } from '@storybook/react'

import { MoreButton } from './MoreButton'

const meta: Meta<typeof MoreButton> = {
  title: 'MoreButton',
  component: MoreButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClick: () => alert('클릭'),
  },
}
