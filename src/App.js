import './App.css'
import PlayButton from './components/PlayButton'
import Home from './components/Home'

import {UserContext} from './contexts/UserState'

import { useEffect, useContext, useState } from 'react'
import {Routes, Route} from 'react-router-dom'

function App() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

	const userContext = useContext(UserContext) 
    const [colorReloadingBool, setColorReloadingBool] = useState(true)
    useEffect(() => {
        userContext.loadTheme()
        if (userContext.colorTheme.scheme === '') {
            setColorReloadingBool(!colorReloadingBool)
        }
    }, [colorReloadingBool])

    return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<PlayButton/>} /> 
				<Route path='/home' element={<Home
                    isDrawerOpen = {isDrawerOpen}
                    setIsDrawerOpen = {setIsDrawerOpen}
                />} /> 
			</Routes>
		</div>
    )
}
export default App