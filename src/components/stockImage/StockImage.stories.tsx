import type { Meta, StoryObj } from '@storybook/react'

import { StockImage } from './StockImage'

const meta: Meta<typeof StockImage> = {
  title: 'StockImage',
  component: StockImage,
}

export default meta

type Story = StoryObj<typeof StockImage>

export const Default: Story = {
  args: {
    name: 'LG전자',
    imgUrl: 'https://juhooray-sample-bucket.s3.ap-northeast-2.amazonaws.com/kospi/066570.png',
  },
}

export const All = () => {
  return (
    <div className="flex-column gap-[20px]">
      <StockImage
        name="LG전자"
        imgUrl="https://juhooray-sample-bucket.s3.ap-northeast-2.amazonaws.com/kospi/066570.png"
      />
      <StockImage
        name="LG전자"
        imgUrl="https://juhooray-sample-bucket.s3.ap-northeast-2.amazonaws.com/kospi/066570.png"
        isSquare
      />
    </div>
  )
}
