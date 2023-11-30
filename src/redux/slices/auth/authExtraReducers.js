import {
	fetchAuth,
	fetchAuthMe,
	fetchRegister,
} from '@redux/slices/auth/actions.js'

export const authExtraReducers = {
	[fetchAuth.pending]: state => {
		state.data = null
		state.status = 'loading'
	},
	[fetchAuth.fulfilled]: (state, action) => {
		state.data = action.payload
		state.status = 'loaded'
	},
	[fetchAuth.rejected]: state => {
		state.data = null
		state.status = 'error'
	},

	[fetchAuthMe.pending]: state => {
		state.data = null
		state.status = 'loading'
	},
	[fetchAuthMe.fulfilled]: (state, action) => {
		state.data = action.payload
		state.status = 'loaded'
	},
	[fetchAuthMe.rejected]: state => {
		state.data = null
		state.status = 'error'
	},

	[fetchRegister.pending]: state => {
		;(state.data = null), (state.status = 'loading')
	},
	[fetchRegister.fulfilled]: (state, action) => {
		;(state.data = action.payload), (state.status = 'loaded')
	},
	[fetchRegister.pending]: state => {
		;(state.data = null), (state.status = 'error')
	},
}
