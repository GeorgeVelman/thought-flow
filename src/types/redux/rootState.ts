import { IAuthState } from '@/types/redux/auth'
import { IPostsState } from '@/types/redux/posts'

export interface IRootState {
	auth: IAuthState
	posts: IPostsState
}
