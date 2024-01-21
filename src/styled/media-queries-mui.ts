import theme from '@/theme'

export const newPost = {
	[theme.breakpoints.down('sm')]: {
		display: 'none'
	}
} as const

export const newPostMobile = {
	[theme.breakpoints.up('sm')]: {
		display: 'none'
	},
	[theme.breakpoints.down('sm')]: {
		display: 'inline-flex'
	}
} as const

export const loginBtn = {
	[theme.breakpoints.down('sm')]: {
		display: 'none'
	}
} as const

export const loginBtnMobile = {
	[theme.breakpoints.up('sm')]: {
		display: 'none'
	},
	[theme.breakpoints.down('sm')]: {
		display: 'inline-flex'
	}
} as const

export const registerBtn = {
	[theme.breakpoints.down('sm')]: {
		display: 'none'
	}
} as const

export const registerBtnMobile = {
	[theme.breakpoints.up('sm')]: {
		display: 'none'
	},
	[theme.breakpoints.down('sm')]: {
		display: 'inline-flex'
	}
} as const

export const listItemIcon = {
	[theme.breakpoints.down(450)]: {
		minWidth: '40px'
	}
} as const

export const avatar = {
	width: '100px',
	height: '100px'
} as const

export const btnLogin = {
	fontSize: '15px'
}

export const listItemBtn = {
	paddingLeft: '6px',
	paddingRight: '30px',
	[theme.breakpoints.down(450)]: {
		paddingLeft: '29px !important'
	}
} as const

export const listItemText = {
	'& .MuiTypography-root': {
		fontSize: '16px'
	}
} as const

export const listItem = {
	[theme.breakpoints.down(450)]: {
		width: '200px'
	}
} as const
