import './App.css'
import PlayButton from './components/PlayButton'
import Home from './components/Home'

import {Routes, Route} from 'react-router-dom'
import UserState from './contexts/UserState'
import '../src/styles/build.css'

function App() {
    return (
		<UserState>
			<div className='App'>
				<Routes>
					<Route path='/' element={<PlayButton/>} /> 
					<Route path='/home' element={<Home/>} /> 
				</Routes>
			</div>
		</UserState>
		
    )
}
export default App