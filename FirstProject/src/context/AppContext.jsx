import React, { useState, createContext } from 'react'
import { THEMES } from '../../assets'

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {

    const[theme, setTheme] = useState(THEMES.DARKMODE)

    const toggleTheme = () => {
        setTheme((prevTheme) =>
        prevTheme === THEMES.DARKMODE ? THEMES.BRIGHTMODE : THEMES.DARKMODE)
    }

    return(
        <AppContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </AppContext.Provider>
    )
}