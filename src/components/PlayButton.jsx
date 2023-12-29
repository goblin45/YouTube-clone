import { useState, useEffect } from "react"
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
        <div class={`box ${minimizePlayButton ? 'minimize-play-button' : ''}`}>
            <div class="play-button">
                <i id="playbutton--icon" class='bx bx-play'></i>
            </div>
        </div>
    )
}

export default PlayButton