import Container from '@mui/material/Container'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import AddPost from './pages/AddPost/AddPost.jsx'
import FullPost from './pages/FullPost'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Registration from './pages/registation/Registration'
import { fetchAuthMe } from './redux/slices/auth/actions.js'
import { selectIsAuth } from './redux/slices/auth/auth.js'

function App() {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectIsAuth)

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
