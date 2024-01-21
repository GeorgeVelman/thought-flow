import { IUserComment } from '@/types/components/commentsBlock'

const mockCommentData: IUserComment[] = [
	{
		user: {
			fullName: 'Вася Пупкин',
			avatarUrl: 'https://cdn.icon-icons.com/icons2/933/PNG/512/round-account-button-with-user-inside_icon-icons.com_72596.png'
		},
		text: 'Функционал комментариев в разработке'
	},
	{
		user: {
			fullName: 'Иван Иванов',
			avatarUrl: 'https://www.proficinema.com/upload/iblock/568/568ae99c2c880ceca949a77310b01d2d.jpg'
		},
		text: 'Тестовый комментарий'
	}
]

export default mockCommentData
