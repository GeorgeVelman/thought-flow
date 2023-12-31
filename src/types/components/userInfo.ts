import { IUserData } from '@/types/redux/auth'

export type UserInfo = Pick<IUserData, 'avatarUrl' | 'fullName' | 'createdAt'>
