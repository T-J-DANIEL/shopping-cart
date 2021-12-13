import React, { useContext, useState, useEffect } from "react"
import data from "./data"
import reducer from "./reducer"
const AppContext = React.createContext()

const useGlobalContext = () => {
  return useContext(AppContext)
}
// url = "https://course-api.com/react-useReducer-cart-project"
const AppContextProvider = ({ children }) => {
  //cart items array
  const [cartArray, setCartArray] = useState(data)

  //   fetch data and assign to variable
  //TODO make it async so it works and add loading effect
  // useEffect(()=>{
  //     fetch("https://course-api.com/react-useReducer-cart-project").then(response=>response.json()).then(data=>{setCartArray(data); console.log(data)}).catch(error=>console.log(error))
  // },[])

  //remove item function
  const removeItem = (id) => {
    setCartArray((prevValue) => {
      return prevValue.filter((item) => item.id !== id)
    })
  }
  //clear cart function
  const clearCart = () => {
    setCartArray([])
  }
  //total function
  const totalFunction = () => {
    return cartArray.reduce((total, value, index) => {
      if (index === cartArray.length - 1) {
        return (total + value.price * value.amount).toFixed(2)
      }
      return total + value.price * value.amount
    }, 0)
  }
  //increase and decrease functions
  const increaseAmount = (id) => {
    setCartArray((prevValue) => {
      const newValue = prevValue.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 }
        }
        return item
      })
      return newValue
    })
  }
  //decrease amount
  const decreaseAmount = (id) => {
    setCartArray((prevValue) => {
      return prevValue.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
    })
  }
  //cart items number function
  const cartCount = () => {
    return cartArray.reduce((total, item) => total + item.amount, 0)
  }
  //implement reducer
  //TODO port all of this functionality to reducer
  return (
    <AppContext.Provider
      value={{
        cartArray,
        removeItem,
        clearCart,
        totalFunction,
        increaseAmount,
        decreaseAmount,
        cartCount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
