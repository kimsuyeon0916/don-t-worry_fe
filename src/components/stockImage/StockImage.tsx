'use client'

import Image from 'next/image'

interface StockImageProps {
  name: string
  imgUrl: string
  isSquare?: boolean
}

export const StockImage = ({ name, imgUrl, isSquare = false }: StockImageProps) => {
  const borderStyle = isSquare ? 'rounded-md' : 'rounded-[50%] border border-solid border-gray-2'
  const sizeVariant = isSquare ? 'size-[56px]' : 'size-[40px]'

  return (
    <div className={`${borderStyle} ${sizeVariant} overflow-hidden`}>
      <Image className="size-full object-cover" src={imgUrl} alt={name} width={40} height={40} />
    </div>
  )
}
