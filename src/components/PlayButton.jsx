import { useState, useEffect } from "react"
import Animation from "./Animation"
import '../styles/PlayButton.css'

const PlayButton = () => {

    const [minimizePlayButton, setMinimizePlayButton] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMinimizePlayButton(true)
        }, 500)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <>
            <div className={`box ${minimizePlayButton ? 'minimize-play-button' : ''}`}>
                <div className="play-button">
                    <i id="playbutton--icon" className='bx bx-play'></i>
                </div>
            </div>
            <Animation/>
        </>
    )
}

export default PlayButton