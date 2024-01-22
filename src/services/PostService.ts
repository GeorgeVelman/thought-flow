import axios from '@/axios'

export default class PostService {
	static async getPostById(id: string) {
		try {
			const res = await axios.get(`/posts/${id}`)
			return res.data
		} catch (err) {
			console.warn(err)
			alert('Ошибка при получении статьи')
		}
	}

	static async createPost(fields: any) {
		try {
			const res = await axios.post('/posts', fields)
			return res.data._id
		} catch (error) {
			console.warn(error)
			alert('Ошибка при создании статьи')
		}
	}

	static async updatePost(fields: any, id?: string) {
		try {
			axios.patch(`/posts/${id}`, fields)
			return id
		} catch (error) {
			console.warn(error)
			alert('Ошибка при сохранении статьи')
		}
	}
}
