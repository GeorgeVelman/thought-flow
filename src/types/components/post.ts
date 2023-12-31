import { IPostsData } from '@/types/redux/posts'
import { ReactNode } from 'react'

export interface IPost
	extends Pick<
		IPostsData,
		'createdAt' | 'title' | 'imageUrl' | 'user' | 'viewsCount' | 'tags'
	> {
	id: string
	commentsCount: number
	children?: ReactNode
	isFullPost?: boolean
	isEditable?: boolean
}
