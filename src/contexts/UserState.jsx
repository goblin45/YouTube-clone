import { useState, createContext } from 'react'

export const UserContext = createContext(null)

export const UserState = (props) => {
    const blankUserData = {
        id: '',
        username: '',
        e_mail: '',
        avatar: ''
    }
    const [ user, setUser ] = useState(blankUserData)
    const loadUser = () => {
        setUser({
            id: localStorage.getItem('id'),
            username: localStorage.getItem('username'),
            e_mail: localStorage.getItem('e_mail'),
            avatar: localStorage.getItem('avatar')
        })
    }
    const updateUser = (user) => {
        localStorage.setItem('id', user.id)
        localStorage.setItem('username', user.username)
        localStorage.setItem('e_mail', user.e_mail)
        localStorage.setItem('avatar', user.avatar)
        loadUser()
    }
    const lightColorData = {
        scheme: 'light',
        color: 'black',
        bgColor: 'white'
    }
    const darkColorData = {
        scheme: 'dark',
        color: 'white',
        bgColor: 'black'
    }
    const systemColorData = {
        scheme: 'system' 
    }
    const [ colorTheme, setColorTheme ] = useState({ scheme: '', color: '', bgColor: ''})
    const updateColorTheme = (theme) => {
        if (theme === 'dark') {
            setColorTheme(darkColorData)
        } else if (theme === 'light') {
            setColorTheme(lightColorData) 
        } else {
            setColorTheme(systemColorData)
        }   
    }
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('colorTheme')
        if (savedTheme === null) {
            const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
            if (!darkMode) {
                updateColorTheme('light')
            } else {
                updateColorTheme('dark')
            }
        } else { 
            updateColorTheme(savedTheme)
        }
    }
    return (
        <UserContext.Provider value={{user, loadUser, updateUser, colorTheme, loadTheme, updateColorTheme}}>
            {props.children}
        </UserContext.Provider> 
    )
}