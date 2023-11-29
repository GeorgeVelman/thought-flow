import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth/auth'
import { postsReducer } from './slices/posts/posts'

const store = configureStore({
	reducer: {
		posts: postsReducer,
		auth: authReducer,
	},
})

export default store
