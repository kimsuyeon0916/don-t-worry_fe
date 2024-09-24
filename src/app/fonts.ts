import localFont from 'next/font/local'

export const nanumBarunGothic = localFont({
  src: [
    {
      path: '../assets/fonts/nanumBarunGothic/NanumBarunGothicBold.ttf',
      weight: '600',
    },
    {
      path: '../assets/fonts/nanumBarunGothic/NanumBarunGothic.ttf',
      weight: '400',
    },
    {
      path: '../assets/fonts/nanumBarunGothic/NanumBarunGothicLight.ttf',
      weight: '300',
    },
  ],
  display: 'swap',
  variable: '--font-nanumBarunGothic',
})
