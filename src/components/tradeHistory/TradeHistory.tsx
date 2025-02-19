'use client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import type { TradeHistoryType } from '@/types'
import { formatDate } from '@/utils'

const columnHelper = createColumnHelper<TradeHistoryType>()
const columns = [
  columnHelper.accessor('derivativeName', {
    header: '종목이름',
    cell: (props) => <p>{props.getValue()}</p>,
    size: 54,
  }),
  columnHelper.accessor('optionType', {
    header: '종류',
    cell: (props) => <p className="text-center">{props.getValue()}</p>,
    size: 42,
  }),
  columnHelper.accessor('tradePrice', {
    header: '거래금액',
    cell: (props) => (
      <p className="text-center">
        {props.getValue()?.toLocaleString('ko-KR', { maximumFractionDigits: 2 })}
      </p>
    ),
    size: 62,
  }),
  columnHelper.accessor('commission', {
    header: '수수료',
    cell: (props) => (
      <p className="text-center">
        {props.getValue()?.toLocaleString('ko-KR', { maximumFractionDigits: 2 })}
      </p>
    ),
    size: 62,
  }),
  columnHelper.accessor('settlementAmount', {
    header: '정산금',
    cell: (props) => (
      <p className="text-center">
        {props.getValue()?.toLocaleString('ko-KR', { maximumFractionDigits: 2 })}
      </p>
    ),
    size: 62,
  }),
  columnHelper.accessor('time', {
    header: '주문시간',
    cell: (props) => <p className="text-center">{formatDate(props.getValue())}</p>,
    size: 47,
  }),
]

interface TradeHistoryProps {
  tradeHistoryData: TradeHistoryType[]
}

export const TradeHistory = ({ tradeHistoryData: data }: TradeHistoryProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="w-full">
      <thead className="border-b border-gray-1">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{
                  width: `${header.getSize()}px`,
                }}
                className="body3_bold pb-[8px] text-black"
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="h-[40px] border-b border-gray-1">
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                style={{
                  width: `${cell.column.getSize()}px`,
                }}
                className="body5_reg text-black"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
