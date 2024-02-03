import React from 'react'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserState"
import '../styles/DrawerComp.css'
import { navFirstOptions, navSecondOptions, navSecondOptionsSignedOut, exploreOptions, moreOptions, lastOptions } from './Index'

function DrawerComp () {
  const [showMore, setShowMore] = useState(false);

  const [isSignedIn, setIsSignedIn] = useState(true);

  const userContext = useContext(UserContext)
    const [ theme, setTheme ] = useState({})
    useEffect(() => {
        setTheme(userContext.colorTheme)
    }, [userContext.colorTheme])


  return(
    <>
      {/* <div className='flex flex-row h-[calc(100vh-100px)]'> */}
        <div id='scroll' className='flex flex-col w-[260px] mt-[2px] p-[9px] cursor-pointer overflow-x-clip overflow-y-auto h-full' style={{ backgroundColor: "rgb(15, 15, 15)"}}>
          {
          navFirstOptions.map((option) => 
          <div key={option.title} className='text-white color flex flex-row items-center w-[220px] hover:bg-neutral-800 hover:rounded-xl'> 
            <div className='mx-6 my-[9px]'>{option.icon}</div>
            <div className=''>{option.title}</div>
          </div>)
          }

          <div className=' h-[0.5px] w-[240px] mx-[1px] my-[14px] p-[0.4px]' style={{ backgroundColor: 'rgb(64, 64, 64)'}}></div>

          

          {userContext.loggedIn ? 
            <>
            <div className='flex flex-row items-center mx-2 my-[1px] px-3 py-2 hover:bg-neutral-800 hover:rounded-xl '><p className='text-white text-lg font-semibold'>You</p><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" focusable="false" style={{pointerEvents: 'none', 
          display: 'block', 
          width: '17px', 
          height: '17px',
          fontWeight: 'lighter'}}
          className='mx-2 mt-[2px]'>
          <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z" fill='white'></path></svg></div>
            {
            navSecondOptions.map((option) => 
          <div key={option.title} className='text-white color flex flex-row items-center w-[220px] hover:bg-neutral-800 hover:rounded-xl'> 
            <div className='mx-6 my-[7px]'>{option.icon}</div>
            <div className=''>{option.title}</div>
          </div>)
          }

          <div  onClick = {() => setShowMore(!showMore)}>
          {
            showMore 
              && 
            <>
            <div className='text-white color flex flex-row items-center w-[220px] hover:bg-neutral-800 hover:rounded-xl'>
              <div><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{
                pointerEvents: 'none',
                display: 'block',
                width: '27px', 
                height: '27px'}}
                className='mx-6 my-[9px]'><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" fill={theme.color}></path></svg></div>
                <div>Liked Videos</div>
            </div>
            <div className='text-white color flex flex-row items-center w-[220px] hover:bg-neutral-800 hover:rounded-xl'>
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{
                  pointerEvents: 'none',
                  display: 'block',
                  width: '27px', 
                  height: '27px'}}
                  className='mx-6 my-[9px]'><path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z" fill={theme.color}></path></svg>
              </div>
              <div>Made project</div>
            </div>
            </>
          }
          <div className='flex flex-row items-center hover:bg-neutral-800 hover:rounded-xl'>
           <div>{showMore ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: 'none', 
              display: 'block', 
              width: '24px', 
              height: '24px',
              fontWeight: 'lighter'}}
              className='mx-6 my-[9px]'>
              <path d="M18.4 14.6 12 8.3l-6.4 6.3.8.8L12 9.7l5.6 5.7z" fill='white'></path>
              </svg> 
              : 
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: 'none', 
              display: 'block', 
              width: '24px', 
              height: '24px',
              fontWeight: 'lighter'}}
              className='mx-6 my-[9px]'
              ><path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z" fill='white'></path>
              </svg>}
            </div>
            <div className='text-white '>{showMore ? "Show Less" : "Show More"}</div>
            </div>
          </div>
            </> :
            <>
            {
            navSecondOptionsSignedOut.map((option) => 
          <div key={option.title} className='text-white color flex flex-row items-center w-[220px] hover:bg-neutral-800 hover:rounded-xl'> 
            <div className='mx-6 my-[9px]'>{option.icon}</div>
            <div className=''>{option.title}</div>
          </div>)
          }
            </>
          }

          <div className=' h-[0.5px] w-[240px] mx-[1px] my-[14px] p-[0.4px]' style={{ backgroundColor: 'rgb(64, 64, 64)'}}></div>

          {isSignedIn ? 
          <div className='text-white mx-4 text-lg font-semibold'>Subscriptions</div> : 
          <div>
          <div className='text-white mx-6 w-[180px] cursor-text'> Sign in to like videos, comment, and subscribe</div>
          <div className='mx-6 my-5'>
          <button className="rounded-full border-[1px] border-solid border-stone-700 w-[110px] flex flex-row items-center gap-3 p-2 mb-[-1em]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25px" height="25px"
                    style={{
                        border: '1px solid rgb(14, 156, 227)',
                        borderRadius: '50%',
                        padding: '0%', margin: '0%'
                    }}
                    >
                        <path d="M 16 4 C 12.144531 4 9 7.144531 9 11 C 9 13.394531 10.21875 15.519531 12.0625 16.78125 C 8.484375 18.304688 6 21.859375 6 26 L 8 26 C 8 21.535156 11.535156 18 16 18 C 20.464844 18 24 21.535156 24 26 L 26 26 C 26 21.859375 23.515625 18.304688 19.9375 16.78125 C 21.78125 15.519531 23 13.394531 23 11 C 23 7.144531 19.855469 4 16 4 Z M 16 6 C 18.773438 6 21 8.226563 21 11 C 21 13.773438 18.773438 16 16 16 C 13.226563 16 11 13.773438 11 11 C 11 8.226563 13.226563 6 16 6 Z" fill="rgb(14, 156, 227)" />
                        </svg>
                        <p className="text-sky-500 font-semibold text-[16px] items-center mt-[-4px] ">Sign in</p>
                    </button>
          </div>
          </div>
          }

          <div className=' h-[0.5px] w-[240px] mx-[1px] my-[14px] p-[0.4px]' style={{ backgroundColor: 'rgb(64, 64, 64)'}}></div>

          <div className='text-white text-lg font-semibold mx-4 cursor-text'>Explore</div>

          {
            exploreOptions.map((option) => 
          <div key={option.title} className='text-white color flex flex-row items-center w-[220px] hover:bg-neutral-800 hover:rounded-xl'> 
            <div className='mx-6 my-[7px]'>{option.icon}</div>
            <div className=''>{option.title}</div>
          </div>)
          }

          <div className=' h-[0.5px] w-[226px] mx-[2px] my-[14px] p-[0.4px]' style={{ backgroundColor: 'rgb(64, 64, 64)'}}></div>

          <div className='text-white text-lg font-semibold mx-4 cursor-text'>More from YouTube</div>
          
          {
            moreOptions.map((option) => 
          <div key={option.title} className='text-white color flex flex-row items-center w-[220px] hover:bg-neutral-800 hover:rounded-xl'> 
            <div className='mx-6 my-[9px]'>{option.icon}</div>
            <div className=''>{option.title}</div>
          </div>)
          }

          <div className=' h-[0.5px] w-[226px] mx-[2px] my-[14px] p-[0.4px]' style={{ backgroundColor: 'rgb(64, 64, 64)'}}></div>
          {
            lastOptions.map((option) => 
          <div key={option.title} className='text-white color flex flex-row items-center w-[220px] hover:bg-neutral-800 hover:rounded-xl'> 
            <div className='mx-6 my-[9px]'>{option.icon}</div>
            <div className=''>{option.title}</div>
          </div>)
          }

          <div className=' h-[0.5px] w-[226px] mx-[2px] my-[14px] p-[0.4px]'style={{ backgroundColor: 'rgb(64, 64, 64)'}}></div>

          <a href="">
            <pre style={{fontSize: '13px', color: 'rgb(171, 171, 171)', fontFamily: 'sans-serif'}} className='px-5 py-2'> 
              About  Press  Copyright <br />
              Contact us Creator  Advertise <br />
              Developers <br /> <br />
              Terms Privacy Policy & Safety <br />
              How YouTube works <br />
              Test new features <br />
            </pre>
          </a>
        </div>  
    </>
  )
}

export default DrawerComp