import { IUsersState } from '@/types/redux/users'
import { fetchUsers } from '@redux/slices/users/actions'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IUsersState = {
	data: null,
	status: 'loading',
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.data = []
				state.status = 'loading'
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = 'loaded'
			})
			.addCase(fetchUsers.rejected, state => {
				state.data = []
				state.status = 'error'
			})
	},
})

export const usersReducer = usersSlice.reducer
