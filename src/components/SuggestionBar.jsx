import {React, useState} from 'react'
import '../styles/SuggestionBar.css'

const suggestions =[
    {title: 'All'},
    {title: 'GamingMixes'},
    {title: 'Battlegrounds Mobile India'},
    {title: 'Music'},
    {title: 'Live'},
    {title: 'AlComputer Programming'},
    {title: 'Gadgets'},
    {title: 'Grand Theft Auto v'},
    {title: 'Arijit Singh'},
    {title: 'Indian Pop Music'},
    {title: 'Bollywoor Music'},
    {title: 'Game Shows'},
    {title: 'Comedy'},
    {title: 'Guitar'},
    {title: 'Recently Uploaded'},
    {title: 'Watched'},
    {title: 'New to You'},
    {title: 'Mirchi Bangla'}
]

function SuggestionBar () {

  return (
    <div id='suggeestionScroll' className=' h-15 bg-transparent flex flex-row overflow-y-clip overflow-x-scroll pt-5 px-3' >
        {
          suggestions.map((option) => 
            
                <div className='text-white justify-center py-2 px-[15px] flex rounded-xl h-10 mx-1 cursor-pointer bg-neutral-800 hover:bg-neutral-700 duration-200 ease-in-out text-sm' style={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                }}>{option.title}</div> )
        }
    </div>
  )
}
export default SuggestionBar