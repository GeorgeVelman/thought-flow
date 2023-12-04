import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React from 'react'

import CommentsBlock from '@components/CommentsBlock'
import { Post } from '@components/post/Post'
import TagsBlock from '@components/tagsBlock/TagsBlock'
import { fetchPosts, fetchTags } from '@redux/slices/posts/actions'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
	const [value, setValue] = React.useState(0)

	const dispatch = useDispatch()
	const userData = useSelector(state => state.auth.data)
	const { posts, tags } = useSelector(state => state.posts)

	const isPostsLoading = posts.status === 'loading'
	const isTagsLoading = posts.status === 'loading'

	React.useEffect(() => {
		dispatch(fetchPosts())
		dispatch(fetchTags())
	}, [])

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const sortPostsByViews = posts => {
		return [...posts].sort((a, b) => b.viewsCount - a.viewsCount)
	}
	const sortPostsByDate = posts => {
		return [...posts].sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		)
	}

	const sortedViewedPosts = sortPostsByViews(posts.items)
	const sortedDatePosts = sortPostsByDate(posts.items)

	const postsToRender = isPostsLoading
		? [...Array(5)]
		: value
		? sortedViewedPosts
		: sortedDatePosts

	return (
		<>
			<Tabs
				onChange={handleChange}
				style={{ marginBottom: 15 }}
				value={value}
				aria-label='basic tabs example'
			>
				<Tab label='Новые' />
				<Tab label='Популярные' />
			</Tabs>
			<Grid container spacing={4}>
				<Grid xs={8} item>
					{postsToRender.map((obj, index) =>
						isPostsLoading ? (
							<Post key={index} isLoading={true} />
						) : (
							<Post
								key={obj._id}
								id={obj._id}
								title={obj.title}
								imageUrl={
									obj.imageUrl
										? `${process.env.REACT_APP_API_URL}${obj.imageUrl}`
										: ''
								}
								user={obj.user}
								createdAt={obj.createdAt}
								viewsCount={obj.viewsCount}
								commentsCount={3}
								tags={obj.tags}
								isEditable={userData?._id === obj.user._id}
							/>
						)
					)}
				</Grid>
				<Grid xs={4} item>
					<TagsBlock items={tags.items} isLoading={isTagsLoading} />
					<CommentsBlock
						items={[
							{
								user: {
									fullName: 'Вася Пупкин',
									avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
								},
								text: 'Это тестовый комментарий',
							},
							{
								user: {
									fullName: 'Иван Иванов',
									avatarUrl:
										'https://www.proficinema.com/upload/iblock/568/568ae99c2c880ceca949a77310b01d2d.jpg',
								},
								text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
							},
						]}
						isLoading={false}
					/>
				</Grid>
			</Grid>
		</>
	)
}

export default Home
