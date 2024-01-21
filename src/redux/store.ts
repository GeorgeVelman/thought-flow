import { authReducer } from '@redux/slices/auth/authSlice'
import { postsReducer } from '@redux/slices/posts/postsSlice'
import { usersReducer } from '@redux/slices/users/usersSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		posts: postsReducer,
		auth: authReducer,
		users: usersReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
