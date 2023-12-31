import { useEffect, useState } from 'react'
import '../styles/PlayButton.css'
import {useNavigate} from 'react-router-dom'

function Animation () {
  
    const [showAnimation, setShowAnimation ] = useState(false)
<<<<<<< HEAD

    const navigate = useNavigate()



=======
    
>>>>>>> 186ec7358a0b58e7256448dc43b858dc8067fd5e
    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setShowAnimation(true)
        }, 500)
        return ()=>{
            clearTimeout(timeOut)
        }
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/home')
        }, 1200)
    })
    
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