import React from 'react'
import { useContext, useEffect, useState } from "react"
import { UserContext } from '../contexts/UserState'

const regularOptions = [
  {title: 'Home', icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: 'none', 
  display: 'block', 
  width: '27px', 
  height: '27px',
  fontWeight: 'lighter'
  }}><path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z" fill='white'></path></svg>},
  {title: 'Shorts', icon: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: 'none', 
  display: 'block', 
  width: '27px', 
  height: '27px',
  fontWeight: 'lighter'
  }}><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" fill='white'></path></svg>},
  {title: 'Subscriptions', icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: 'none', 
  display: 'block', 
  width: '27px', 
  height: '27px',
  fontWeight: 'lighter'
  }}><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z" fill='white'></path></svg>},
  {title: 'You', icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: 'none', 
  display: 'block', 
  width: '27px', 
  height: '27px',
  fontWeight: 'lighter'
  }}><path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z" fill='white'></path></svg>},
]

function DrawerCompRegular () {

  const userContext = useContext(UserContext)
    const [ theme, setTheme ] = useState({})
    useEffect(() => {
        setTheme(userContext.colorTheme)
    }, [userContext.colorTheme])

  return (
    <div className='flex flex-row h-[calc(100vh-100px)] '>
      <div className='flex flex-col bg-transparent w-[85px] items-center mt-[5px] px-4'>
      {
          regularOptions.map((option) => 
          <div key={option.title} className='text-white color flex flex-col items-center justify-center w-[70px] hover:bg-neutral-800 hover:rounded-xl h-[78px] cursor-pointer mx-2'> 
            <div className=''>{option.icon}</div>
            <div className='text-xs mt-[4px]'>{option.title}</div>
          </div>)
          }
      </div>
    </div>


    
  )
}

export default DrawerCompRegular