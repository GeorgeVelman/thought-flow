import { avatar } from '@/styled/media-queries-mui'
import { IParams, IUserData } from '@/types/redux/auth'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import styles from '@pages/registration/registration.module.scss'
import { fetchRegister } from '@redux/slices/auth/actions'
import { selectIsAuth } from '@redux/slices/auth/authSlice'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

const Registration = () => {
	const dispatch = useAppDispatch()
	const isRegister = useAppSelector(selectIsAuth)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: ''
		},
		mode: 'onChange'
	})

	const onSubmit = async (values: IParams) => {
		const data = await dispatch(fetchRegister(values))
		const payload = data.payload as IUserData

		if (!payload) {
			return alert('Не удалось зарегистрироваться!')
		}

		if ('token' in payload) {
			window.localStorage.setItem('token', payload.token)
		}
	}

	if (isRegister) {
		return <Navigate to='/' />
	}

	return (
		<Paper classes={{ root: styles.root }}>
			<Typography classes={{ root: styles.title }} variant='h5'>
				Создание аккаунта
			</Typography>
			<div className={styles.avatar}>
				<Avatar sx={avatar} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					{...register('fullName', { required: 'Укажите имя' })}
					error={Boolean(errors.fullName?.message)}
					helperText={errors.fullName?.message}
					className={styles.field}
					label='Полное имя'
					autoComplete='off'
					fullWidth
				/>
				<TextField
					{...register('email', { required: 'Укажите почту' })}
					error={Boolean(errors.email?.message)}
					helperText={errors.email?.message}
					className={styles.field}
					label='E-Mail'
					autoComplete='off'
					fullWidth
				/>
				<TextField
					{...register('password', { required: 'Укажите пароль' })}
					error={Boolean(errors.password?.message)}
					helperText={errors.password?.message}
					className={styles.field}
					label='Пароль'
					autoComplete='off'
					fullWidth
				/>
				<Button type='submit' disabled={!isValid} size='large' variant='contained' fullWidth>
					Зарегистрироваться
				</Button>
			</form>
		</Paper>
	)
}

export default Registration
