import axios from '@/axios'
import { IParams, IUserData } from '@/types/redux/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAuth = createAsyncThunk<IUserData, IParams>(
	'auth/fetchAuth',
	async params => {
		const { data } = await axios.post('auth/login', params)
		return data
	}
)

export const fetchAuthMe = createAsyncThunk<IUserData>(
	'auth/fetchAuthMe',
	async () => {
		const { data } = await axios.get('auth/me')
		return data
	}
)

export const fetchRegister = createAsyncThunk<IUserData, IParams>(
	'auth/fetchRegister',
	async params => {
		const { data } = await axios.post('auth/register', params)
		return data
	}
)
