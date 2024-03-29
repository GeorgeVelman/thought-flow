import { ICommentsBlock, IUserComment } from '@/types/components/commentsBlock'
import styles from '@components/commentsBlock/commentsBlock.module.scss'
import SideBlock from '@components/sideBlock/SideBlock'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Skeleton from '@mui/material/Skeleton'
import React from 'react'

export const CommentsBlock: React.FC<ICommentsBlock> = ({ items, children, isLoading = true }) => {
	return (
		<SideBlock title='Комментарии'>
			<List>
				{(isLoading ? [...Array(5)] : items).map((obj: IUserComment, index) => (
					<React.Fragment key={index}>
						<ListItem alignItems='flex-start'>
							<ListItemAvatar>
								{isLoading ? <Skeleton variant='circular' width={40} height={40} /> : <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />}
							</ListItemAvatar>
							{isLoading ? (
								<div className={styles.wrap}>
									<Skeleton variant='text' height={25} width={120} />
									<Skeleton variant='text' height={18} width={230} />
								</div>
							) : (
								<ListItemText primary={obj.user.fullName} secondary={obj.text} />
							)}
						</ListItem>
						<Divider variant='inset' component='li' />
					</React.Fragment>
				))}
			</List>
			{children}
		</SideBlock>
	)
}

export default CommentsBlock
