if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, i) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[t]) return
    let c = {}
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), c))
  }
}
define(['./workbox-b289085b'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: '01cba7f8b7b75a259eeb005a69ec63e6' },
        {
          url: '/_next/static/LeayU8W66G9PGg4hJhqZZ/_buildManifest.js',
          revision: 'f2912fe1bb89be52c50c52cf338c91b8',
        },
        {
          url: '/_next/static/LeayU8W66G9PGg4hJhqZZ/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/201-6970ecc3041fee06.js', revision: 'LeayU8W66G9PGg4hJhqZZ' },
        { url: '/_next/static/chunks/473-932bbc908bf037aa.js', revision: 'LeayU8W66G9PGg4hJhqZZ' },
        { url: '/_next/static/chunks/577-d728f2636c7c9dac.js', revision: 'LeayU8W66G9PGg4hJhqZZ' },
        {
          url: '/_next/static/chunks/591eab03-f42a37f2b54930fa.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/6d9db6b7-5d28053abe1ff9da.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        { url: '/_next/static/chunks/728-33ce6404ef328f2d.js', revision: 'LeayU8W66G9PGg4hJhqZZ' },
        { url: '/_next/static/chunks/819-d6c0777499428b87.js', revision: 'LeayU8W66G9PGg4hJhqZZ' },
        { url: '/_next/static/chunks/848.38e588bd911ec439.js', revision: '38e588bd911ec439' },
        { url: '/_next/static/chunks/896-9edda6fa73f51c41.js', revision: 'LeayU8W66G9PGg4hJhqZZ' },
        {
          url: '/_next/static/chunks/app/(auth)/sign-in/page-01a507877feb418f.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-up/hedge-type/page-7462541e785d66fb.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-up/layout-d51a7e4eaf6ac859.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/(auth)/sign-up/name/page-568c51ac7fb6724f.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/(home)/hedge/page-2cba7991f898b72c.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/(home)/page-9d89fd6ad0082593.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/(setting)/setting/page-cab49887778696fc.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-b5e950769ccc5b81.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/layout-2c1f87d4a60c4a27.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/on-boarding/page-f0890cd71c21a4a2.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/portfolio/page-9159081ab01cebd1.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/profit/page-37818a4f039b312c.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/trade-history/service/page-e8c3c25a2fecb850.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/app/trade-history/user/page-574102d507795c9a.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/framework-110e83a94da5d846.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/main-app-22ecc77bef988e8f.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        { url: '/_next/static/chunks/main-de9272d3c8286ef4.js', revision: 'LeayU8W66G9PGg4hJhqZZ' },
        {
          url: '/_next/static/chunks/pages/_app-ea34dc59242f067e.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/pages/_error-ca96be208f65dd00.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-58eb4af888f7d1b0.js',
          revision: 'LeayU8W66G9PGg4hJhqZZ',
        },
        { url: '/_next/static/css/1bf1254d808d0f98.css', revision: '1bf1254d808d0f98' },
        { url: '/_next/static/css/fb4167e0cf4695f1.css', revision: 'fb4167e0cf4695f1' },
        {
          url: '/_next/static/media/kakao_login.0e0e069d.png',
          revision: 'b2df8abced56e0bbd49f7878a411e9c0',
        },
        {
          url: '/_next/static/media/logo.1b50dcbe.png',
          revision: '6581fad6b69fca3a15a99a5e43b9273f',
        },
        { url: '/firebase-messaging-sw.js', revision: 'ca57ff575b50cf323cea2396eb3cb077' },
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
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
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
