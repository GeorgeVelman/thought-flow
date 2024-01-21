import { IAuthState } from '@/types/redux/auth'
import { IPostsState } from '@/types/redux/posts'
import { IUsersState } from '@/types/redux/users'

export interface IRootState {
	auth: IAuthState
	posts: IPostsState
	users: IUsersState
}
