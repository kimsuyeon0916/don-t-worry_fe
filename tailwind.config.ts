import type { Config } from 'tailwindcss'

import { borderRadius, boxShadow, colors, fontSize, fontWeight } from './src/styles/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius,
      boxShadow,
      colors,
      fontSize,
      fontWeight,
      fontFamily: {
        nanumBarunGothic: ['--font--nanumBarunGothic'],
      },
    },
  },
  plugins: [],
}
export default config
