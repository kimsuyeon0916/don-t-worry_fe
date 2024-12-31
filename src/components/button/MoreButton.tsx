'use client'

interface MoreButtonProps {
  onClick: VoidFunction
}

export const MoreButton = ({ onClick }: MoreButtonProps) => {
  return (
    <button
      className={`flex-center btn_reg h-[32px] w-full text-center text-gray-7`}
      onClick={onClick}
      type="button"
    >
      더보기
    </button>
  )
}
