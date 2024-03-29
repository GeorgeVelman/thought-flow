import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { btnLogin } from '@/styled/media-queries-mui'
import { IParams, IUserData } from '@/types/redux/auth'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import styles from '@pages/login/login.module.scss'
import { fetchAuth } from '@redux/slices/auth/actions'
import { selectIsAuth } from '@redux/slices/auth/authSlice'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

const Login = () => {
	const isAuth = useAppSelector(selectIsAuth)
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		mode: 'onChange'
	})

	const onSubmit = async (values: IParams) => {
		const data = await dispatch(fetchAuth(values))
		const payload = data.payload as IUserData

		if (!payload) {
			return alert('Не удалось авторизоваться!')
		}

		if ('token' in payload) {
			window.localStorage.setItem('token', payload.token)
		}
	}

	if (isAuth) {
		return <Navigate to='/' />
	}

	return (
		<Paper classes={{ root: styles.root }}>
			<Typography classes={{ root: styles.title }} variant='h5'>
				Вход в аккаунт
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className={styles.field}
					label='E-Mail'
					error={Boolean(errors.email?.message)}
					helperText={errors.email?.message}
					{...register('email', { required: 'Укажите почту' })}
					autoComplete='off'
					fullWidth
				/>
				<TextField
					className={styles.field}
					label='Пароль'
					error={Boolean(errors.password?.message)}
					helperText={errors.password?.message}
					{...register('password', { required: 'Укажите пароль' })}
					autoComplete='off'
					fullWidth
				/>
				<Button sx={btnLogin} type='submit' size='large' variant='contained' fullWidth>
					Войти
				</Button>
			</form>
		</Paper>
	)
}

export default Login
