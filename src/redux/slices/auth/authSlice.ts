import { IAuthState } from '@/types/redux/auth'
import { IRootState } from '@/types/redux/rootState'
import {
	fetchAuth,
	fetchAuthMe,
	fetchRegister,
} from '@redux/slices/auth/actions'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IAuthState = {
	data: null,
	status: 'loading',
}

const authSlice = createSlice({
	initialState,
	name: 'auth',
	reducers: {
		logout: state => {
			state.data = null
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAuth.pending, state => {
				state.data = null
				state.status = 'loading'
			})
			.addCase(fetchAuth.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = 'loaded'
			})
			.addCase(fetchAuth.rejected, state => {
				state.data = null
				state.status = 'error'
			})
			.addCase(fetchAuthMe.pending, state => {
				state.data = null
				state.status = 'loading'
			})
			.addCase(fetchAuthMe.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = 'loaded'
			})
			.addCase(fetchAuthMe.rejected, state => {
				state.data = null
				state.status = 'error'
			})
			.addCase(fetchRegister.pending, state => {
				state.data = null
				state.status = 'loading'
			})
			.addCase(fetchRegister.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = 'loaded'
			})
			.addCase(fetchRegister.rejected, state => {
				state.data = null
				state.status = 'error'
			})
	},
})

export const selectIsAuth = (state: IRootState) => Boolean(state.auth.data)

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
