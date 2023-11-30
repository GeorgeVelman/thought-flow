import { authReducer } from '@redux/slices/auth/auth'
import { postsReducer } from '@redux/slices/posts/posts'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		posts: postsReducer,
		auth: authReducer,
	},
})

export default store
