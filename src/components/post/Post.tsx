import mockCommentCount from '@/mockData/mockCommentCount'
import { IPost } from '@/types/components/post'
import styles from '@components/post/post.module.scss'
import UserInfo from '@components/userInfo/UserInfo'
import { useAppDispatch } from '@hooks/useAppDispatch'
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import DeleteIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import IconButton from '@mui/material/IconButton'
import { fetchRemovePost } from '@redux/slices/posts/actions'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

export const Post: React.FC<IPost> = ({ data, children, isFullPost, isEditable }) => {
	const { _id, createdAt, title, imageUrl, user, viewsCount, tags } = data

	const dispatch = useAppDispatch()

	const onClickRemove = () => {
		if (window.confirm('Вы действительно хотите удалить статью?')) {
			dispatch(fetchRemovePost(_id))
		}
	}

	return (
		<div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
			{isEditable && (
				<div className={styles.editButtons}>
					<Link to={`/posts/${_id}/edit`}>
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
				<div className={styles.imgWrap}>
					<img className={styles.image} src={imageUrl ? `${process.env.REACT_APP_API_URL}${imageUrl}` : ''} alt={title} />
				</div>
			)}
			<div className={styles.wrapper}>
				<UserInfo {...user} createdAt={createdAt} />
				<div className={styles.indention}>
					<h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>{isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}</h2>
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
							<span>{mockCommentCount}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
