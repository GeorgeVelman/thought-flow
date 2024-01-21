import { listItem, listItemBtn, listItemIcon, listItemText } from '@/styled/media-queries-mui'
import { ITagsBlock } from '@/types/components/tagsBlock'
import SideBlock from '@components/sideBlock/SideBlock'
import styles from '@components/tagsBlock/tagsBlock.module.scss'
import TagIcon from '@mui/icons-material/Tag'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Skeleton from '@mui/material/Skeleton'
import React from 'react'

export const TagsBlock: React.FC<ITagsBlock> = ({ items, isLoading = true }) => {
	return (
		<SideBlock title='Популярные теги'>
			<List>
				{(isLoading ? [...Array(5)] : items).map((name: string | undefined, index) => (
					<a key={index} className={styles.link} href={`/tags/${name}`}>
						<ListItem sx={listItem} disablePadding>
							<ListItemButton sx={listItemBtn}>
								<ListItemIcon sx={listItemIcon}>
									<TagIcon />
								</ListItemIcon>
								{isLoading ? <Skeleton width={100} /> : <ListItemText sx={listItemText} primary={name} />}
							</ListItemButton>
						</ListItem>
					</a>
				))}
			</List>
		</SideBlock>
	)
}

export default TagsBlock
