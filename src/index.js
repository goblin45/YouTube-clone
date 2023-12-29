import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<SkeletonTheme>
			<BrowserRouter>
				<Routes>
					<Route path='*' element={<App/>}/>
				</Routes>
			</BrowserRouter>
		</SkeletonTheme>
	</React.StrictMode>
)
