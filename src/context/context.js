import React, {useState, useContext } from 'react';
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isToggle, setToggle] = useState(false)

    const toggleClass = () => {
        setToggle(!isToggle);
    }

    const closeSidebar = () => {
        setToggle(false)
    }
    return (
        <AppContext.Provider
        value= {{ isToggle, 
                toggleClass,
                closeSidebar
                }} >
                    {children}
                </AppContext.Provider> 
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext}