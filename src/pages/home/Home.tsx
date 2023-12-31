import { sideBar } from '@/styled/media-queries-mui'
import { IPostsData } from '@/types/redux/posts'
import { Post } from '@components/post/Post'
import PostSkeleton from '@components/post/Skeleton'
import SideBar from '@components/sideBar/SideBar'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import styles from '@pages/home/home.module.scss'
import { fetchPosts, fetchTags } from '@redux/slices/posts/actions'
import React from 'react'

const Home = () => {
	const [value, setValue] = React.useState<number>(0)

	const dispatch = useAppDispatch()
	const userData = useAppSelector(state => state.auth.data)
	const { posts } = useAppSelector(state => state.posts)

	const isPostsLoading = posts.status === 'loading'

	React.useEffect(() => {
		dispatch(fetchPosts())
		dispatch(fetchTags())
	}, [])

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const sortPostsByViews = (posts: IPostsData[]) => {
		return [...posts].sort((a, b) => b.viewsCount - a.viewsCount)
	}
	const sortPostsByDate = (posts: IPostsData[]) => {
		return [...posts].sort(
			(a, b) =>
				new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
		)
	}

	const sortedViewedPosts = sortPostsByViews(posts.items)
	const sortedDatePosts = sortPostsByDate(posts.items)

	const postsToRender: IPostsData[] = isPostsLoading
		? [...Array(5)]
		: value
		? sortedViewedPosts
		: sortedDatePosts

	return (
		<main>
			<Grid container spacing={4} columns={200}>
				<Grid sx={sideBar} md={44} item>
					<SideBar />
				</Grid>
				<Grid md={156} item>
					<Tabs
						className={styles.tabs}
						onChange={handleChange}
						value={value}
						aria-label='basic tabs example'
					>
						<Tab label='Новые' />
						<Tab label='Популярные' />
					</Tabs>
					<div className={styles.wrap}>
						{postsToRender.map((obj, index) =>
							isPostsLoading ? (
								<PostSkeleton key={index} />
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
					</div>
				</Grid>
			</Grid>
		</main>
	)
}

export default Home
