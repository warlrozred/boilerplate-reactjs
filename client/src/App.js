import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import RouterConfig from './navigation/RouterConfig'

export default function App() {
	return (
		<BrowserRouter>
			<RouterConfig />
		</BrowserRouter>
	)
}