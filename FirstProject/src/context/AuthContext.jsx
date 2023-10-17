import { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAutheticated] = useState(false)
    const [user, setUser] = useState('')

    const handleLogin = async (username, password) => {
        if (username === 'kalan' && password === 'prueba12') {
            setUser(username)
            setIsAutheticated(true)
            await SecureStore.setItemAsync('user', username)
            return true
        }
        return false
    }

    const handleLogout = async () => {
        setUser('')
        setIsAutheticated(false)
        await SecureStore.deleteItemAsync('user')
    }

    useEffect(() => {
        const getUser = async () => {
          try {
            const currentUser = await SecureStore.getItemAsync('user');
            console.log('Logged user: ', currentUser);
      
            if (currentUser) {
              setUser(currentUser);
              setIsAutheticated(true); 
              console.log("Autenticado? ",isAuthenticated);
            }
          } catch (e) {
            console.log(e);
          }
        };
        getUser();
      }, []);
      

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