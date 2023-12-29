import { useState, createContext } from 'react'

const UserContext = createContext(null)

const UserState = (props) => {
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
    return (
        <UserContext.Provider value={{user, loadUser, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState