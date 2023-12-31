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
        scheme:'dark',
        color: 'white',
        bgColor: 'black'
    }
    const systemColorData = {
        scheme: 'system' 
    }
    const [ colorTheme, setColorTheme ] = useState(localStorage.getItem('colorTheme'))
    const updateColorTheme = (theme) => {
        if (theme === 'dark') {
            setColorTheme({
                scheme: darkColorData.scheme,
                color: darkColorData.color,
                bgColor: darkColorData.bgColor
            })
        } else if (theme === 'light') {
            setColorTheme({
                scheme: lightColorData.scheme,
                color: lightColorData.color,
                bgColor: lightColorData.bgColor
            }) 
        } else {
            setColorTheme({
                scheme: systemColorData.scheme
            })
        }   
        localStorage.setItem('colorTheme', theme)
    }
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('colorTheme')
        if (savedTheme === null) {
            console.log('check')
            const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
            if (!darkMode) {
                console.log('check 1')
                updateColorTheme('light')
            } else {
                console.log('check 2')
                updateColorTheme('dark')
                console.log('from context: ', colorTheme)
            }
        } else { 
            if (savedTheme === 'light') {
                updateColorTheme('')
            } else if (savedTheme === 'dark') {
                updateColorTheme(darkColorData)
            } else {
                updateColorTheme(systemColorData)
            }
        }
    }
    return (
        <UserContext.Provider value={{user, loadUser, updateUser, colorTheme, loadTheme, updateColorTheme}}>
            {props.children}
        </UserContext.Provider> 
    )
}