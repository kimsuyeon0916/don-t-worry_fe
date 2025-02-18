import { getMessaging, getToken } from 'firebase/messaging'

import { app } from '@/app/settingFcm'

// 서비스 워커 실행
export const registerServiceWorker = () => {
  navigator.serviceWorker
    .register('firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Service Worker 등록 성공:', registration)
    })
    .catch(function (error) {
      console.error('Service Worker 등록 실패:', error)
    })
}

// 토큰 조회
export const getDeviceToken = async () => {
  // 권한이 허용된 후에 토큰을 가져옴
  const messaging = getMessaging(app)
  const token = await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
  })

  return token
}

// 알림 허용
export const handleAllowNotification = async () => {
  await Notification.requestPermission()
  registerServiceWorker()
  try {
    const token = await getDeviceToken()
    return token
  } catch (error) {
    console.error(error)
  }
}
