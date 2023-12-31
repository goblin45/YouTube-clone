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
						<button className=''><svg className='w-[24px] p-' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" fill="#FFFFFF" />
						</svg></button>
					</div>
			</nav>
		</>
	)
}

export default Home