'use client'

import type { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

import { BottomNav, Header, MoreButton, TradeHistory } from '@/components'
import { AccountTab, InvestmentTab } from '@/features'
import { useTab } from '@/hooks'

const TabMenu = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex-align mx-[16px] mb-[6px] divide-x divide-[#AAA] rounded-md bg-gray-1 py-[8px] text-black [&_>_button]:p-[4px_9px] [&_>_button]:text-left">
      {children}
    </section>
  )
}

export const ProfitClientPage = () => {
  const name = localStorage.getItem('name') // 전역 데이터로 수정
  const [options, selectedOption, Tab, handleClickOption] = useTab({
    '계좌 입 · 출금': AccountTab,
    '투자 · 회수': InvestmentTab,
  })

  const router = useRouter()
  const handleGoUserTradeHistory = () => {
    router.push(`/trade-history/user`)
  }

  return (
    <div>
      <div className="flex pb-[16px] pt-[24px]">
        <Header.Title title="시세차익 투자" />
      </div>
      <hr className="h-[8px] w-full border-none bg-gray-1" />
      <main>
        <section className="px-[16px] py-[24px]">
          <div className="flex-column gap-[32px]">
            <div className="flex-between-align h2_bold text-black">
              <h1>총 평가금액</h1>
              0원
            </div>
            <div className="flex-column gap-[16px]">
              <div className="flex-between-align body2_bold text-black">
                <h2>총 투자금액</h2>
                0원
              </div>
              <div className="flex-between-align body2_bold text-black">
                <h2>총 계좌잔액</h2>
                0원
              </div>
            </div>
          </div>
        </section>
        <section>
          <TabMenu>
            {options.map((option) => {
              const textColorStyle = selectedOption === option ? 'text-button-2' : 'text-gray-7'

              return (
                <button
                  key={option}
                  className={`flex-column-align body3_bold flex-1 ${textColorStyle}`}
                  onClick={() => handleClickOption(option)}
                  type="button"
                >
                  {option}
                </button>
              )
            })}
          </TabMenu>
          <Tab />
        </section>
        <hr className="h-[8px] w-full border-none bg-gray-1" />
        <section className="mx-[16px] mt-[24px]">
          <h2 className="h3_bold mb-[12px] text-black">{name}의 매매내역</h2>
          {/* 매매내역 */}
          <TradeHistory tradeHistoryData={tradeHistoryData.slice(0, 2)} />
          <MoreButton onClick={handleGoUserTradeHistory} />
        </section>
      </main>
      <BottomNav />
    </div>
  )
}

// mockData
const tradeHistoryData = [
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'PUT',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: '2024-08-07T01:00:00',
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'CALL',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: '2024-08-07T01:00:00',
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'CALL',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: '2024-08-07T01:00:00',
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'CALL',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: '2024-08-07T01:00:00',
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'PUT',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: '2024-08-07T01:00:00',
  },
  {
    derivativeName: '가나다라마바사아자차카타',
    optionType: 'CALL',
    tradePrice: 400.06,
    commission: 0.06,
    settlementAmount: 400,
    time: '2024-08-07T01:00:00',
  },
]
