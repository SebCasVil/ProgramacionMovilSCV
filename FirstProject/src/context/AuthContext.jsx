import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAutheticated] = useState(false)
    const [user, setUser] = useState('')

    const handleLogin = (username, password) => {
        if (username === 'kalan' && password === 'prueba12') {
            setUser(username)
            setIsAutheticated(true)
            return true
        }
        return false
    }

    const handleLogout = () => {
        setUser('')
        setIsAutheticated(false)
    }

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