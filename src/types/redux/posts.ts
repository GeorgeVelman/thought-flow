import { IUserData } from '@/types/redux/auth'

export type UserDetails = Pick<IUserData, '_id' | 'fullName' | 'email' | 'avatarUrl'>

export interface IPostsState {
	posts: {
		items: IPostsData[]
		status: 'loading' | 'loaded' | 'error'
	}
	tags: {
		items: string[]
		status: 'loading' | 'loaded' | 'error'
	}
}

export interface IPostsData {
	_id: string
	title: string
	text: string
	tags: string[]
	viewsCount: number
	user: UserDetails
	imageUrl?: string
	createdAt: string
	updatedAt: string
	__v: number
}
