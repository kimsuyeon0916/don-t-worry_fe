import type { Meta, StoryObj } from '@storybook/react'

import { DoughnutChart } from './DoughnutChart'

const meta: Meta<typeof DoughnutChart> = {
  title: 'DoughnutChart',
  component: DoughnutChart,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    chartData: [],
  },
}
