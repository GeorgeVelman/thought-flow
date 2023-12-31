import '@components/hamburgerMenu/hamburgerMenu.scss'
import SideBar from '@components/sideBar/SideBar'
import React, { useState } from 'react'

const HamburgerMenu = () => {
	const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
	const [navMove, setNavMove] = useState('nav unclicked')
	const [menu_class, setMenuClass] = useState('menu hidden')
	const [isMenuClicked, setIsMenuClicked] = useState(false)
	const [blackBg_class, setBlackBg_class] = useState('unclicked')

	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass('burger-bar clicked')
			setMenuClass('menu visible')
			setBlackBg_class('blackBg')
			setNavMove('nav nav-move')
		} else {
			setBurgerClass('burger-bar unclicked')
			setMenuClass('menu hidden')
			setBlackBg_class('unclicked')
			setNavMove('nav unclicked')
		}
		setIsMenuClicked(!isMenuClicked)
	}

	const closeSideBar = () => {
		setBurgerClass('burger-bar unclicked')
		setMenuClass('menu hidden')
		setBlackBg_class('unclicked')
		setNavMove('nav unclicked')
		setIsMenuClicked(!isMenuClicked)
	}

	return (
		<div className='hamburgerMenu' style={{ width: '60px', paddingRight: 10 }}>
			<nav className={navMove}>
				<button className='burger-menu' onClick={updateMenu}>
					<span className={burger_class}></span>
					<span className={burger_class}></span>
					<span className={burger_class}></span>
				</button>
			</nav>
			<div style={{ paddingTop: 75 }} className={menu_class}>
				<SideBar closeSideBar={closeSideBar} />
			</div>
			<div className={blackBg_class} onClick={closeSideBar}></div>
		</div>
	)
}

export default HamburgerMenu
