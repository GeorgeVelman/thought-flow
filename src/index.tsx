import App from '@/App'
import '@/index.scss'
import theme from '@/theme'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import store from '@redux/store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
	<>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<HashRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</HashRouter>
		</ThemeProvider>
	</>
)
