import { atomWithStorage } from 'jotai/utils'

export const usernameAtom = atomWithStorage('username', '')

export const nameAtom = atomWithStorage('name', '')
