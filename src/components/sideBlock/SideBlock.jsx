import styles from '@components/sideBlock/sideBlock.module.scss'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

const SideBlock = ({ title, children }) => {
	return (
		<Paper classes={{ root: styles.root }}>
			<Typography variant='h6' classes={{ root: styles.title }}>
				{title}
			</Typography>
			{children}
		</Paper>
	)
}

export default SideBlock
