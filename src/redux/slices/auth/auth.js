import { authExtraReducers } from '@redux/slices/auth/authExtraReducers'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
	extraReducers: authExtraReducers,
})

export const selectIsAuth = state => Boolean(state.auth.data)

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
