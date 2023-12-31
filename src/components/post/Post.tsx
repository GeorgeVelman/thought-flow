import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import DeleteIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import IconButton from '@mui/material/IconButton'
import clsx from 'clsx'
import React from 'react'

import { IPost } from '@/types/components/post'
import styles from '@components/post/post.module.scss'
import UserInfo from '@components/userInfo/UserInfo'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { fetchRemovePost } from '@redux/slices/posts/actions'
import { Link } from 'react-router-dom'

export const Post: React.FC<IPost> = ({
	id,
	createdAt,
	title,
	imageUrl,
	user,
	viewsCount,
	commentsCount,
	tags,
	children,
	isFullPost,
	isEditable,
}) => {
	const dispatch = useAppDispatch()

	const onClickRemove = () => {
		if (window.confirm('Вы действительно хотите удалить статью?')) {
			dispatch(fetchRemovePost(id))
		}
	}

	return (
		<div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
			{isEditable && (
				<div className={styles.editButtons}>
					<Link to={`/posts/${id}/edit`}>
						<IconButton color='primary'>
							<EditIcon />
						</IconButton>
					</Link>
					<IconButton onClick={onClickRemove} color='secondary'>
						<DeleteIcon />
					</IconButton>
				</div>
			)}
			{imageUrl && (
				<img
					className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
					src={imageUrl}
					alt={title}
				/>
			)}
			<div className={styles.wrapper}>
				<UserInfo {...user} createdAt={createdAt} />
				<div className={styles.indention}>
					<h2
						className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
					>
						{isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
					</h2>
					<ul className={styles.tags}>
						{tags.map((name, index) => (
							<li key={index}>
								<Link to={`/tag/${name}`}>{name ? '#' + name : ''}</Link>
							</li>
						))}
					</ul>
					{children && <div className={styles.content}>{children}</div>}
					<ul className={styles.postDetails}>
						<li>
							<EyeIcon />
							<span>{viewsCount}</span>
						</li>
						<li>
							<CommentIcon />
							<span>{commentsCount}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
