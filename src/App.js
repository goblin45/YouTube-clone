import './App.css'
import PlayButton from './components/PlayButton'
import Home from './components/Home'

import {UserContext} from './contexts/UserState'

import { useEffect, useContext } from 'react'
import {Routes, Route} from 'react-router-dom'

function App() {

	const userContext = useContext(UserContext)
    useEffect(() => {
		
		console.log(userContext.user, userContext.colorTheme)
    }, [])

    return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<PlayButton/>} /> 
				<Route path='/home' element={<Home/>} /> 
			</Routes>
		</div>
    )
}
export default App