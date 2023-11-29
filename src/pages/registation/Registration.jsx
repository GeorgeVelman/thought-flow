import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { fetchRegister } from '../../redux/slices/auth/actions.js'
import { selectIsAuth } from '../../redux/slices/auth/auth.js'
import styles from './registration.module.scss'

const Registration = () => {
	const dispatch = useDispatch()
	const isRegister = useSelector(selectIsAuth)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onSubmit = async values => {
		const data = await dispatch(fetchRegister(values))

		if (!data.payload) {
			return alert('Не удалось зарегистрироваться!')
		}

		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token)
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
				<Avatar sx={{ width: 100, height: 100 }} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					{...register('fullName', { required: 'Укажите имя' })}
					error={Boolean(errors.fullName?.message)}
					helperText={errors.fullName?.message}
					className={styles.field}
					label='Полное имя'
					fullWidth
				/>
				<TextField
					{...register('email', { required: 'Укажите почту' })}
					error={Boolean(errors.email?.message)}
					helperText={errors.email?.message}
					className={styles.field}
					label='E-Mail'
					fullWidth
				/>
				<TextField
					{...register('password', { required: 'Укажите пароль' })}
					error={Boolean(errors.password?.message)}
					helperText={errors.password?.message}
					className={styles.field}
					label='Пароль'
					fullWidth
				/>
				<Button
					type='submit'
					disabled={!isValid}
					size='large'
					variant='contained'
					fullWidth
				>
					Зарегистрироваться
				</Button>
			</form>
		</Paper>
	)
}

export default Registration
