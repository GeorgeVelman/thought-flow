import { IPostsData } from '@/types/redux/posts'
import Layout from '@components/layout/Layout'
import { Post } from '@components/post/Post'
import PostSkeleton from '@components/post/Skeleton'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
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
		return [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
	}

	const sortedViewedPosts = sortPostsByViews(posts.items)
	const sortedDatePosts = sortPostsByDate(posts.items)

	const postsToRender: IPostsData[] = isPostsLoading ? [...Array(5)] : value ? sortedViewedPosts : sortedDatePosts

	return (
		<Layout>
			<Tabs className={styles.tabs} onChange={handleChange} value={value} aria-label='basic tabs example'>
				<Tab className={styles.tab} label='Новые' />
				<Tab className={styles.tab} label='Популярные' />
			</Tabs>
			<>
				{postsToRender.map((obj, index) =>
					isPostsLoading ? <PostSkeleton key={index} /> : <Post key={obj._id} data={obj} isEditable={userData?._id === obj.user._id} />
				)}
			</>
		</Layout>
	)
}

export default Home
