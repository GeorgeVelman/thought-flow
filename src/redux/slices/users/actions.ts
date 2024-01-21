import axios from '@/axios'
import { IUsersData } from '@/types/redux/users'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk<IUsersData[]>(
	'users/fetchUsers',
	async () => {
		const { data } = await axios.get('/users')
		return data
	}
)
