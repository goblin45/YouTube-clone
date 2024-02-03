import React from 'react'
import NavBar from './NavBar'
import SuggestionBar from './SuggestionBar'
import DrawerComp from './DrawerComp'
import DrawerCompRegular from './DrawerCompRegular'
import Dashboard from './Dashboard'

function Home({isDrawerOpen, setIsDrawerOpen}) {
	return (
		
		<>
			<NavBar 
				isDrawerOpen = {isDrawerOpen}
				setIsDrawerOpen = {setIsDrawerOpen}

			/>

				<div className='flex flex-row h-[calc(100vh-100px)]'> 
					{
						isDrawerOpen ? <DrawerComp/> : <DrawerCompRegular/>
					}
					<div className={`${isDrawerOpen ? 'w-[80vw]' : 'w-[90vw]'}`}>
						<SuggestionBar />
						<Dashboard/>
					</div>
				</div>
				
			{/* <div className={`w-full h-[calc(100vh-100px)] flex flex-row ${isDrawerOpen ? 'pl-[280px]' : 'pl-[90px]'}`} >
				<SuggestionBar/>
			</div> */}
		</>
	)
}

export default Home