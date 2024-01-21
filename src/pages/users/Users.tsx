import axios from '@/axios'
import UserCard from '@/components/userCard/UserCard'
import { IUsersData } from '@/types/redux/users'
import SearchInput from '@components/UI/input/SearchInput'
import Layout from '@components/layout/Layout'
import styles from '@pages/users/users.module.scss'
import React from 'react'

const Users = () => {
	const [data, setData] = React.useState<IUsersData[] | null>()
	React.useEffect(() => {
		axios
			.get('/users')
			.then(({ data }) => {
				setData(data)
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка при получении пользователей')
			})
	}, [])
	console.log(data)

	return (
		<Layout>
			<h2 className={styles.title}>Пользователи</h2>
			<SearchInput />
			<div className={styles.wrap}>
				{data?.map((user: IUsersData) => (
					<UserCard key={user._id} _id={user._id} avatarUrl={user.avatarUrl} fullName={user.fullName} createdAt={user.createdAt} />
				))}
			</div>
		</Layout>
	)
}

export default Users
