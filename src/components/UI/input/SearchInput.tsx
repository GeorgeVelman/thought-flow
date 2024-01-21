import icon from '@/assets/search-icon.png'
import styles from '@components/UI/input/searchInput.module.scss'
import React from 'react'

const SearchInput = () => {
	const [searchValue, setSearchValue] = React.useState('')
	return (
		<div className={styles.wrap}>
			<img className={styles.icon} src={icon} />
			<input className={styles.search} type='text' placeholder='Поиск' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
		</div>
	)
}

export default SearchInput
