import Header from '@components/header/Header'
import { useAppDispatch } from '@hooks/useAppDispatch'
import Container from '@mui/material/Container'
import FullPost from '@pages/FullPost'
import AddPost from '@pages/addPost/AddPost'
import Contacts from '@pages/contacts/Contacts'
import Home from '@pages/home/Home'
import Login from '@pages/login/Login'
import Registration from '@pages/registration/Registration'
import Saved from '@pages/saved/Saved'
import Tags from '@pages/tags/Tags'
import Users from '@pages/users/Users'
import { fetchAuthMe } from '@redux/slices/auth/actions'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

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
					<Route path='/users' element={<Users />} />
					<Route path='/saved' element={<Saved />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/tags' element={<Tags />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
