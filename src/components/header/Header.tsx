import exitImg from '@/assets/exitImg.png'
import logo from '@/assets/logo.png'
import { loginBtn, loginBtnMobile, newPost, newPostMobile, registerBtn, registerBtnMobile } from '@/styled/media-queries-mui'
import HamburgerMenu from '@components/hamburgerMenu/HamburgerMenu'
import styles from '@components/header/header.module.scss'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import AddIcon from '@mui/icons-material/Add'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import LoginIcon from '@mui/icons-material/Login'
import { Fab } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { logout, selectIsAuth } from '@redux/slices/auth/authSlice'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const dispatch = useAppDispatch()
	const isAuth = useAppSelector(selectIsAuth)

	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
	}

	return (
		<header className={styles.root}>
			<Container maxWidth='lg'>
				<div className={styles.inner}>
					<div className={styles.wrap}>
						<HamburgerMenu />
						<Link className={styles.logo} to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
							<img src={logo} alt='logo' />
							<div className={styles.logoText}>through-flow</div>
						</Link>
					</div>
					<div className={styles.buttons}>
						{isAuth ? (
							<>
								<Link to='/add-post'>
									<Button sx={newPost} variant='contained'>
										Написать статью
									</Button>
									<Fab sx={newPostMobile} size='small' color='primary' aria-label='add'>
										<AddIcon />
									</Fab>
								</Link>
								<Link to='/' className={styles.exitLink}>
									<Button onClick={onClickLogout} variant='contained' color='error'>
										Выйти
									</Button>
								</Link>
								<Link to='/' className={styles.exitLinkMobile}>
									<button className={styles.btnExitMobile} onClick={onClickLogout}>
										<img src={exitImg} alt='' />
									</button>
								</Link>
							</>
						) : (
							<>
								<Link to='/login'>
									<Button sx={loginBtn} variant='outlined'>
										Войти
									</Button>
									<Button sx={loginBtnMobile} variant='outlined'>
										<LoginIcon />
									</Button>
								</Link>
								<Link to='/register'>
									<Button sx={registerBtn} variant='contained'>
										Создать аккаунт
									</Button>
									<Button sx={registerBtnMobile} variant='contained'>
										<AppRegistrationIcon />
									</Button>
								</Link>
							</>
						)}
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
