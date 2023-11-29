import { createSlice } from '@reduxjs/toolkit'

import { postsExtraReducers } from './postsExtraReducers'

const initialState = {
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
	reducer: {},
	extraReducers: postsExtraReducers,
})

export const postsReducer = postSlice.reducer
