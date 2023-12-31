import axios from '@/axios'
import { IPostsData } from '@/types/redux/posts'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk<IPostsData[]>(
	'posts/fetchPosts',
	async () => {
		const { data } = (await axios.get('/posts')) as {
			data: IPostsData[]
		}
		return data
	}
)

export const fetchTags = createAsyncThunk<string[]>(
	'posts/fetchTags',
	async () => {
		const { data } = (await axios.get('/tags')) as { data: string[] }
		return data
	}
)

export const fetchRemovePost = createAsyncThunk<void, string>(
	'posts/fetchRemovePost',
	async id => {
		axios.delete(`/posts/${id}`)
	}
)
