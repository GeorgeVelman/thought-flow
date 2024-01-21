import axios from '@/axios'

export default class PostService {
	static async getPostById(id: string) {
		try {
			const res = await axios.get(`/posts/${id}`)
			return res.data
		} catch (err) {
			console.warn(err)
			throw new Error('Ошибка при получении статьи')
		}
	}
}
