export const readDeviceId = () => {
  const key = 'deviceId'
  let deviceId = localStorage.getItem(key)

  if (!deviceId) {
    deviceId = crypto.randomUUID() // 새로운 UUID 생성
    localStorage.setItem(key, deviceId)
  }

  return deviceId
}
