import axios from '@/axios'
import CommentsBlock from '@/components/CommentsBlock'
import { Post } from '@/components/post/Post'
import Comment from '@components/comment/Comment'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

const FullPost = () => {
	const [data, setData] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(true)
	const { id } = useParams()

	React.useEffect(() => {
		axios
			.get(`/posts/${id}`)
			.then(res => {
				setData(res.data)
				setIsLoading(false)
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка при получении статьи')
			})
	}, [])

	if (isLoading) {
		return <Post isLoading={isLoading} isFullPost />
	}

	return (
		<>
			<Post
				updatedAt={data.updatedAt}
				id={data._id}
				title={data.title}
				imageUrl={
					data.imageUrl
						? `${process.env.REACT_APP_API_URL}${data.imageUrl}`
						: ''
				}
				user={data.user}
				createdAt={data.createdAt}
				viewsCount={data.viewsCount}
				commentsCount={3}
				tags={data.tags}
				isFullPost
			>
				<ReactMarkdown children={data.text} />
			</Post>
			<CommentsBlock
				items={[
					{
						user: {
							fullName: 'Вася Пупкин',
							avatarUrl:
								'https://cdn.icon-icons.com/icons2/933/PNG/512/round-account-button-with-user-inside_icon-icons.com_72596.png',
						},
						text: 'Функционал комментариев в разработке',
					},
					{
						user: {
							fullName: 'Иван Иванов',
							avatarUrl:
								'https://www.proficinema.com/upload/iblock/568/568ae99c2c880ceca949a77310b01d2d.jpg',
						},
						text: 'Тестовый комметарий',
					},
				]}
				isLoading={false}
			>
				<Comment />
			</CommentsBlock>
		</>
	)
}

export default FullPost
