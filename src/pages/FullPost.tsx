// import mockCommentData from '@/mockData/mockCommentData'
// import CommentsBlock from '@components/commentsBlock/CommentsBlock'
// import Comment from '@components/comment/Comment'
import PostService from '@/services/PostService'
import { IPostsData } from '@/types/redux/posts'
import { Post } from '@components/post/Post'
import PostSkeleton from '@components/post/Skeleton'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

const FullPost = () => {
	const [data, setData] = React.useState<IPostsData | null>(null)
	const [isLoading, setIsLoading] = React.useState(true)
	const { id } = useParams()

	React.useEffect(() => {
		const fetchPost = async () => {
			const data = await PostService.getPostById(id!)
			setData(data)
			setIsLoading(false)
		}
		fetchPost()
	}, [])

	if (isLoading || !data) {
		return <PostSkeleton />
	}

	return (
		<>
			<Post data={data} isFullPost isEditable>
				<ReactMarkdown children={data.text} />
			</Post>
			{/* <CommentsBlock items={mockCommentData} isLoading={false}>
				<Comment />
			</CommentsBlock> */}
		</>
	)
}

export default FullPost
