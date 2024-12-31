import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header.Sub> = {
  title: 'Header',
  component: Header.Sub,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Header.Sub>

export const Default: Story = {
  args: {
    title: '헤더 텍스트',
  },
}

export const All = () => {
  return (
    <div className="flex-column gap-[20px]">
      <Header.Home onClose={() => alert('알람')} />
      <Header.Sub title="헤더" />
      <Header.Tab
        subtitle="서브 타이틀"
        onEdit={() => alert('편집')}
        onDelete={() => alert('삭제')}
        onClose={() => alert('닫기')}
      />
      <Header.Title title="타이틀" />
      <Header.Title title="타이틀" canClose onClose={() => alert('닫기')} />
      <Header.Title title="타이틀" subtitle="서브 타이틀" canClose onClose={() => alert('닫기')} />
      <Header.Title
        title="타이틀"
        subtitle="서브 타이틀"
        canClose
        canBack
        onClose={() => alert('닫기')}
      />
    </div>
  )
}
