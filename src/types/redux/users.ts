export interface IUsersData {
	_id: string
	avatarUrl: string
	fullName: string
	email: string
	createdAt: string
	updatedAt: string
	__v: number
}

export interface IUsersState {
	data: IUsersData[] | null
	status: 'loading' | 'loaded' | 'error'
}
