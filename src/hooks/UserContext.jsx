import { useContext, useState, useEffect, createContext } from "react";

const userContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({})

    const putUserData = (userInfo) => {
        setUserInfo(userInfo)
        
        localStorage.setItem("devburger:userData", JSON.stringify(userInfo))
    }

    const Logout = () => {
        setUserInfo()
        localStorage.removeItem("devburger:userData")
    }

    useEffect(() => {
        const userInfoLocal = localStorage.getItem("devburger:userData")
        if(userInfoLocal) {
            setUserInfo(JSON.parse(userInfoLocal))
        }
    }, [])

    return (
        <userContext.Provider value={{userInfo, putUserData, Logout}}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(userContext)

    if (!context) {
        throw new Error('useUser must be a valid context')
    }

    return context
}

