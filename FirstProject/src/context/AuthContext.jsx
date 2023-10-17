import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAutheticated] = useState(false)
    const [user, setUser] = useState('')

    const handleLogin = async (username, password) => {
        if (username === 'kalan' && password === 'prueba12') {
            setUser(username)
            setIsAutheticated(true)
            await AsyncStorage.setItem('user', username)
            return true
        }
        return false
    }

    const handleLogout = async () => {
        setUser('')
        setIsAutheticated(false)
        await AsyncStorage.removeItem('user')
    }

    useEffect(() => {
        const getUser = async () => {
            try{
                const currentUser = AsyncStorage.getItem('user')
                console.log(currentUser)
            }catch(e){
                console.log(e)
            }
        }
    },[])

    const values = {
        user,
        isAuthenticated,
        handleLogin,
        handleLogout
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}