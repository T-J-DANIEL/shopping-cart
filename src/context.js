import React, { useContext, useState } from "react"

const AppContext = React.createContext()

const useGlobalContext =  () => {
    return useContext(AppContext)
}
// url = "https://course-api.com/react-useReducer-cart-project"
const AppContextProvider = ({ children }) => {
    
    return (
        <AppContext.Provider value={
            {
                value:"numbah one"
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider,useGlobalContext}