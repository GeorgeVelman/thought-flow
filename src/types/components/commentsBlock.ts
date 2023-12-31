import { ReactNode } from 'react'

export interface IUserComment {
	user: {
		fullName: string
		avatarUrl: string
	}
	text: string
}

export interface ICommentsBlock {
	items: IUserComment[]
	children?: ReactNode
	isLoading: Boolean
}
