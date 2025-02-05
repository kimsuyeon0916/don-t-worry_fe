'use client'

import { useEffect, useRef } from 'react'
import { ArcElement, Chart, DoughnutController, Legend, Tooltip } from 'chart.js'

import type { ChartType } from '@/types'
import { calculatePercentage } from '@/utils'

Chart.register(DoughnutController, ArcElement, Tooltip, Legend)

interface ChartProps {
  chartData: ChartType[]
}

export const DoughnutChart = ({ chartData }: ChartProps) => {
  const chart = useRef(null)

  const defaultChartData = [
    {
      stockName: '아직 입력한 데이터가 없어요.',
      rate: 0,
    },
  ]

  useEffect(() => {
    if (!!chart.current) {
      const ctx = chart.current

      const hasChartData = chartData.length > 0

      const labels = hasChartData ? chartData.map((item) => item.stockName) : defaultConfig.labels
      const dataset = hasChartData ? chartData.map((item) => item.rate) : defaultConfig.data
      const bgColors = hasChartData ? chartColors.slice(0, labels.length) : defaultConfig.bgColor

      const data = {
        labels: labels,
        datasets: [
          {
            data: dataset,
            backgroundColor: bgColors,
            hoverOffset: 4,
          },
        ],
      }

      const doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          layout: {
            autoPadding: false,
          },
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
              position: 'right',
              align: 'start',
              labels: {
                padding: 8,
                boxWidth: 14,
                boxHeight: 14,
                useBorderRadius: true,
                borderRadius: 4,
              },
            },
          },
        },
      })

      return function cleanup() {
        doughnutChart.destroy()
      }
    }
  }, [chartData])

  return (
    <div className="flex gap-[32px]">
      <div className="size-[144px]">
        <canvas ref={chart} />
      </div>
      <ul className="flex-column gap-[4px]">
        {(chartData.length ? chartData : defaultChartData).map(({ stockName, rate }, index) => (
          <li key={stockName} className="flex-align body5_reg gap-[8px] text-black">
            <div
              className={`size-[14px] rounded-sm ${chartData.length ? bgColorStyle[index] : 'bg-gray-4'}`}
            />
            {stockName} {rate !== 0 && `${calculatePercentage(rate)}%`}
          </li>
        ))}
      </ul>
    </div>
  )
}

const defaultConfig = {
  labels: ['아직 입력한 데이터가 없어요.'],
  data: [1],
  bgColor: ['#D9D9D9'],
}

const chartColors = ['#708FFF', '#FF9292', '#FFDA15', '#72DE83', '#E0ADFF', '#FCBD5D', '#55CCFF']
const bgColorStyle = [
  'bg-piechart-1',
  'bg-piechart-2',
  'bg-piechart-3',
  'bg-piechart-4',
  'bg-piechart-5',
  'bg-piechart-6',
  'bg-piechart-7',
]
