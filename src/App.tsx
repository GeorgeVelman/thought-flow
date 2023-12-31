import Home from '@/pages/home/Home'
import Header from '@components/header/Header'
import Container from '@mui/material/Container'
import FullPost from '@pages/FullPost'
import AddPost from '@pages/addPost/AddPost'
import Login from '@pages/login/Login'
import Registration from '@pages/registration/Registration'
import { fetchAuthMe } from '@redux/slices/auth/actions'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from './hooks/useAppDispatch'

function App() {
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch(fetchAuthMe())
	}, [])

	return (
		<>
			<Header />
			<Container maxWidth='lg'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/posts/:id' element={<FullPost />} />
					<Route path='/posts/:id/edit' element={<AddPost />} />
					<Route path='/add-post' element={<AddPost />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Registration />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
