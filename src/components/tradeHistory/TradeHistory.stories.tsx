import type { Meta, StoryObj } from '@storybook/react'

import { TradeHistory } from './TradeHistory'

const meta: Meta<typeof TradeHistory> = {
  title: 'TradeHistory',
  component: TradeHistory,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

// mockData
const tradeHistoryData = [
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'PUT',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: new Date('2024-08-07T01:00:00'),
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'CALL',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: new Date('2024-08-07T00:00:00'),
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'CALL',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: new Date('2024-08-07T00:00:00'),
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'CALL',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: new Date('2024-08-07T00:00:00'),
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'PUT',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: new Date('2024-08-07T00:00:00'),
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'CALL',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: new Date('2024-08-07T00:00:00'),
  },
]

export const Default: Story = {
  args: {
    tradeHistoryData: tradeHistoryData,
  },
}
