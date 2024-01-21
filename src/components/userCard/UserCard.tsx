import { IUserCard } from '@/types/components/userCard'
import styles from '@components/userCard/userCard.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const UserCard: React.FC<IUserCard> = ({ _id, avatarUrl, fullName, createdAt }) => {
	console.log(_id, createdAt)
	return (
		<div className={styles.wrap}>
			<div className={styles.avatar}>
				<img src={avatarUrl} alt='' />
			</div>
			<div className={styles.details}>
				<Link to='/'>{fullName}</Link>
				<span>120</span>
			</div>
			<div className={styles.tags}>
				<Link to='/'>tags1</Link>
				<Link to='/'>tags2</Link>
				<Link to='/'>tags3</Link>
			</div>
		</div>
	)
}

export default UserCard
