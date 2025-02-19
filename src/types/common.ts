export interface ChartType {
  stockName: string
  rate: number
}

export interface BottomSheetType {
  isShowing: boolean
  onClickScrim: VoidFunction
}

export interface TradeHistoryType {
  derivativeName: string
  optionType: 'CALL' | 'PUT' | string // 수정 필요
  tradePrice: number
  commission: number
  settlementAmount: number
  time: Date
}
