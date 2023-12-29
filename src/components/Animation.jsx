import { useEffect, useState } from 'react'
import '../styles/PlayButton.css'

function Animation () {
  
    const [showAnimation, setShowAnimation ] = useState(false)
    const [activateBarAnimation , setActivateBarAnimation] = useState(false)
    
    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setShowAnimation(true)
        }, 500)
        return ()=>{
            clearTimeout(timeOut)
        }
    }, []);
    
    return (
        <>
            <div class="middle"> 
                <i class={`bx bx-play ${showAnimation ? 'icons' : 'hidden'}`}></i>
                <div class={`${showAnimation ? 'bar' : 'hidden'}`}>
                    <div class={`${showAnimation ? 'redbar' : 'hidden'}`}></div>
                </div>
            </div>
        </>
    )
}

export default Animation