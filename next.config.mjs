import withPWA from 'next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 기존 Next.js 설정
  transpilePackages: ['jotai-devtools'],
  images: {
    domains: ['juhooray-sample-bucket.s3.ap-northeast-2.amazonaws.com'],
  },
}

const prod = process.env.NODE_ENV === 'production'
export default withPWA({
  dest: 'public',
  disable: prod ? false : true,
  workbox: {
    maximumFileSizeToCacheInBytes: 5000000, // 5MB로 증가 (기본값: 2MB)
  },
})(nextConfig)
