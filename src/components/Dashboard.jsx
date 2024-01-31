import React from 'react'
import {dummyVids} from './Index'

function Dashboard () {
  return (
    <>
    <div className='grid grid-cols-3 gap-6 px-4 max:grid-cols-2'>
	{
		dummyVids.map((option) => 
		<div className='text-white color flex flex-col gap-3'> 
			<div className='h-56 w-full rounded-xl'>{option.img}</div>
			<div className='flex flex-row gap-3'>
				<div className=''>{option.dp}</div>
				<div className='flex flex-col gap-1'>
					<div className='text-xl' style={{fontFamily: 'sans-serif',fontSize: '18px'}}>{option.thumbnail}</div>

					<div className='text-sm font-semibold cursor-pointer text-zinc-400 hover:text-white duration-200 ease-in-out'>{option.title}</div>

					<div className='flex felx-row gap-3 text-sm cursor-pointer ' style={{color: 'rgb(150, 150, 150)'}}>
						<div>{option.views}</div>
						<div>{option.time}</div>
					</div>
				</div>
			</div>
		</div>)
		
	}
    </div>
        
    </>
  )
}

export default Dashboard