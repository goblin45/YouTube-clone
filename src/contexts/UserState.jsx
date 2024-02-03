import { useState, createContext, useEffect } from 'react'

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
    const updateUser = () => {
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
    const [loggedIn, setloggedIn] = useState(false);

    useEffect(() => {
        const logIn = localStorage.getItem('logIn')
        if(!logIn)
        {
            setloggedIn(false);
        }
        else { 
            setloggedIn(true);
        }
    }, [])
    
    const logInUser = () => {
        setloggedIn(true)
        localStorage.setItem('logIn', true)
    }

    const logOutUser = () => {
        setloggedIn(false);
        localStorage.setItem('logIn', false)
    }

    return (
        <UserContext.Provider value={{user, loadUser, updateUser,loggedIn, logInUser, logOutUser, colorTheme, loadTheme, updateColorTheme}}>
            {props.children}
        </UserContext.Provider> 
    )
}