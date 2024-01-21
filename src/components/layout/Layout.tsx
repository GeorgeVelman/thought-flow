// import { sideBar } from '@/styled/media-queries-mui'
import SideBar from '@components/sideBar/SideBar'
// import Grid from '@mui/material/Grid'
import React, { ReactNode } from 'react'
import styles from '@components/layout/layout.module.scss'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<main className={styles.wrap}>
			<div className={styles.sideBarWrap}>
				<SideBar />
			</div>
			<div>{children}</div>
		</main>
	)
}

export default Layout
