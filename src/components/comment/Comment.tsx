import React from 'react'

import styles from '@components/comment/comment.module.scss'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Comment = () => {
	return (
		<>
			<div className={styles.root}>
				<Avatar
					classes={{ root: styles.avatar }}
					src='https://cdn.icon-icons.com/icons2/933/PNG/512/round-account-button-with-user-inside_icon-icons.com_72596.png'
				/>
				<div className={styles.form}>
					<TextField
						label='Написать комментарий'
						variant='outlined'
						maxRows={10}
						multiline
						fullWidth
					/>
					<Button disabled variant='contained'>
						Отправить
					</Button>
				</div>
			</div>
		</>
	)
}

export default Comment
