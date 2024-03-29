import { UserInfo } from '@/types/components/userInfo'
import styles from '@components/userInfo/userInfo.module.scss'
import React from 'react'

const UserInfo: React.FC<UserInfo> = ({ avatarUrl, fullName, createdAt }) => {
	const formattedDate = new Date(createdAt).toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})

	const defaultAvatarUrl = 'https://cdn.icon-icons.com/icons2/933/PNG/512/round-account-button-with-user-inside_icon-icons.com_72596.png'

	return (
		<div className={styles.root}>
			<img className={styles.avatar} src={avatarUrl || defaultAvatarUrl} alt={fullName} />
			<div className={styles.userDetails}>
				<span className={styles.userName}>{fullName}</span>
				<span className={styles.additional}>{formattedDate}</span>
			</div>
		</div>
	)
}

export default UserInfo
