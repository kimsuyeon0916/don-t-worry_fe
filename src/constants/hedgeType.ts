export const hedgeTypeMap: Record<string, string> = {
  '최소 리스크 관리(0%~20%)': 'MINIMUM',
  '균형 리스크 관리(20%~40%)': 'BALANCED',
  '안정 리스크 관리(40%~60%)': 'STABLE',
}

export const hedgeTypeKeys: string[] = Object.keys(hedgeTypeMap)
