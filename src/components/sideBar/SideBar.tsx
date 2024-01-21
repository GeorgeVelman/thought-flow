import { ISideBarProps } from '@/types/components/sideBar'
import styles from '@components/sideBar/sideBar.module.scss'
import TagsBlock from '@components/tagsBlock/TagsBlock'
import { useAppSelector } from '@hooks/useAppSelector'
import ContactsIcon from '@mui/icons-material/Contacts'
import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'
import SellIcon from '@mui/icons-material/Sell'
import TurnedInIcon from '@mui/icons-material/TurnedIn'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar: React.FC<ISideBarProps> = ({ closeSideBar }) => {
	const [activeLink, setActiveLink] = React.useState('/')
	const { posts, tags } = useAppSelector(state => state.posts)

	const isTagsLoading = posts.status === 'loading'

	const handleLinkClick = (to: string) => {
		setActiveLink(to)
		closeSideBar?.()
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className={styles.wrap}>
			<nav>
				<ul className={styles.list}>
					<li>
						<Link to='/' className={activeLink === '/' ? styles.activeLink : ''} onClick={() => handleLinkClick('/')}>
							<div className={styles.wrapInner}>
								<HomeIcon fontSize='large' />
								<span>Главная</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/' className={activeLink === '/users' ? styles.activeLink : ''} onClick={() => handleLinkClick('/users')}>
							<div className={styles.wrapInner}>
								<GroupIcon fontSize='large' />
								<span>Пользователи</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/' className={activeLink === '/saved' ? styles.activeLink : ''} onClick={() => handleLinkClick('/saved')}>
							<div className={styles.wrapInner}>
								<TurnedInIcon fontSize='large' />
								<span>Сохраненное</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/' className={activeLink === '/contacts' ? styles.activeLink : ''} onClick={() => handleLinkClick('/contacts')}>
							<div className={styles.wrapInner}>
								<ContactsIcon fontSize='large' />
								<span>Контакты</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/' className={activeLink === '/tags' ? styles.activeLink : ''} onClick={() => handleLinkClick('/tags')}>
							<div className={styles.wrapInner}>
								<SellIcon fontSize='large' />
								<span>Теги</span>
							</div>
						</Link>
					</li>
				</ul>
			</nav>
			<TagsBlock items={tags.items} isLoading={isTagsLoading} />
		</div>
	)
}

export default SideBar
