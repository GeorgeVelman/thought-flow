import { IPostsState } from '@/types/redux/posts'
import {
	fetchPosts,
	fetchRemovePost,
	fetchTags,
} from '@redux/slices/posts/actions'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IPostsState = {
	posts: {
		items: [],
		status: 'loading',
	},
	tags: {
		items: [],
		status: 'loading',
	},
}

const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchPosts.pending, state => {
				state.posts.items = []
				state.posts.status = 'loading'
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.posts.items = action.payload
				state.posts.status = 'loaded'
			})
			.addCase(fetchPosts.rejected, state => {
				state.posts.items = []
				state.posts.status = 'error'
			})

			.addCase(fetchTags.pending, state => {
				state.tags.items = []
				state.tags.status = 'loading'
			})
			.addCase(fetchTags.fulfilled, (state, action) => {
				state.tags.items = action.payload
				state.tags.status = 'loaded'
			})
			.addCase(fetchTags.rejected, state => {
				state.tags.items = []
				state.tags.status = 'error'
			})

			.addCase(fetchRemovePost.pending, (state, action) => {
				state.posts.items = state.posts.items.filter(
					obj => obj._id !== action.meta.arg
				)
			})
	},
})

export const postsReducer = postSlice.reducer
