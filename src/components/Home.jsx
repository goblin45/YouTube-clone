import React from 'react'

function Home () {
	return (
		<>
			<nav className='w-w-full h-[60px] bg-slate-600 flex justify-between px-4 py-2 md:px-5'>
					<div className='my-auto'>
						<a href="" className='text-white text-[25px] p-8'>&#9776;</a>
					</div>
					<div className='my-auto'>
						<img className='h-[32px]' src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" />
					</div>
					<div className="text-white my-auto px-1 text-[25px]   ">
						YouTube
					</div>
					<div className='my-auto max-w-xl'>
						<input className='rounded-[50px] rounded-r-none' type="text" placeholder='Search' />
						<button className=''><searchIcon/></button>
				
					</div>
			</nav>
		</>
	)
}

export default Home