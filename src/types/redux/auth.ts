export interface IParams {
	email: string
	password: string
}

export interface IUserData {
	_id: string
	fullName: string
	email: string
	avatarUrl?: string
	createdAt: string
	updatedAt: string
	__v: number
	token: string
}

export interface IAuthState {
	data: IUserData | null
	status: 'loading' | 'loaded' | 'error'
}
