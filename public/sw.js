if (!self.define) {
  let e,
    s = {}
  const n = (n, i) => (
    (n = new URL(n + '.js', i).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (i, a) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[t]) return
    let c = {}
    const r = (e) => n(e, t),
      o = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (a(...e), c))
  }
}
define(['./workbox-b289085b'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: '0f2c717913ab02dc1968dcb681823dd3' },
        {
          url: '/_next/static/7-Fq4p4lKWQI9rFQ8KLi_/_buildManifest.js',
          revision: 'f2912fe1bb89be52c50c52cf338c91b8',
        },
        {
          url: '/_next/static/7-Fq4p4lKWQI9rFQ8KLi_/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/361-d95038a23afbce3f.js', revision: '7-Fq4p4lKWQI9rFQ8KLi_' },
        { url: '/_next/static/chunks/570-407dcc0e4ab0f3dd.js', revision: '7-Fq4p4lKWQI9rFQ8KLi_' },
        { url: '/_next/static/chunks/642-e6c8a9cf3070ca61.js', revision: '7-Fq4p4lKWQI9rFQ8KLi_' },
        {
          url: '/_next/static/chunks/6d9db6b7-a1cb9fd79d8f19cd.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        { url: '/_next/static/chunks/728-06791223204666a8.js', revision: '7-Fq4p4lKWQI9rFQ8KLi_' },
        {
          url: '/_next/static/chunks/72d9bace-0435652bd11f9392.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-in/page-52519e6b70637718.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-up/hedge-type/page-d06a2c2fde3d85f3.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-up/layout-7422d7b213b98bf0.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-up/name/page-0fb3e22b5b8a999c.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/(portfolio)/portfolio/page-d1f73b95d82b03c3.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/(profit)/profit/page-7aa0de8a18789d87.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/(setting)/setting/page-e45117e55a4e50ea.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-acb821bbde4c3742.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/home/page-c1808c77bb0407ae.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/layout-2663e05a45595e10.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/app/on-boarding/page-7940334c4092d7cc.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/framework-110e83a94da5d846.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/main-app-716e182d9d7aa342.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        { url: '/_next/static/chunks/main-d5b47ba14122242f.js', revision: '7-Fq4p4lKWQI9rFQ8KLi_' },
        {
          url: '/_next/static/chunks/pages/_app-ea34dc59242f067e.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/pages/_error-ca96be208f65dd00.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-2d0d35187427dcc2.js',
          revision: '7-Fq4p4lKWQI9rFQ8KLi_',
        },
        { url: '/_next/static/css/cfcca6d7b18ce79f.css', revision: 'cfcca6d7b18ce79f' },
        {
          url: '/_next/static/media/kakao_login.0e0e069d.png',
          revision: 'b2df8abced56e0bbd49f7878a411e9c0',
        },
        {
          url: '/_next/static/media/logo.1b50dcbe.png',
          revision: '6581fad6b69fca3a15a99a5e43b9273f',
        },
        { url: '/icons/icon-192x192.png', revision: 'ed0b46d2c8e1c7d4c96df6fd957892a8' },
        { url: '/icons/icon-256x256.png', revision: 'a84456e81d55bccfab72acb753c10fa4' },
        { url: '/icons/icon-384x384.png', revision: 'a9e9e3557e50ab27ac2ac6c405fa8974' },
        { url: '/icons/icon-512x512.png', revision: '0170a9cc309f69c42504ab061a27236e' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: n, state: i }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    )
})
