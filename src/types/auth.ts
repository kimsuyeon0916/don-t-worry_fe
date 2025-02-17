import type { NotificationToken } from './notification'

export interface AuthToken {
  accessToken: string
}

export interface SignUpForm {
  name: string
  hedgeType: string
}

export type SignUpRequest = SignUpForm &
  NotificationToken & {
    username: string
  }

export interface SignUpResponse extends AuthToken {
  name?: string
  username?: string
}

export type CheckExistUserRequest = NotificationToken & {
  username: string
}

export interface CheckExistUserResponse extends SignUpResponse {}
