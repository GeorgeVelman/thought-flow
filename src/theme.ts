import { createTheme } from '@mui/material'

const theme = createTheme({
	shadows: Array(25).fill('none') as any,
	palette: {
		primary: {
			main: '#4361ee',
		},
	},
	typography: {
		button: {
			textTransform: 'none',
			fontWeight: 400,
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 550,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
})

export default theme
