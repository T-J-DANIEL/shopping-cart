import React, { useContext, useState, useEffect, useReducer } from "react"
import data from "./data"
import reducer from "./reducer"
const AppContext = React.createContext()

const initialState = {
  loading: true,
  cart: data,
  total: 0,
  amount: 0,
}

const useGlobalContext = () => {
  return useContext(AppContext)
}
const url = "https://course-api.com/react-useReducer-cart-project"

const AppContextProvider = ({ children }) => {
  // async fetch data function 
  const fetchData = async () => {
    dispatch({ type: "LOADING" })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: "DISPLAY_ITEMS", payload: cart })
  }
  //auto fetch data when page loads
  useEffect(() => {
    fetchData()
  }, [])

  //use reducer
  const [cartArray, dispatch] = useReducer(reducer, initialState)
  //remove item function
  const removeItem = (id) => {
    dispatch({ type: "remove-item", payload: { id: id } })
  }
  //clear cart function
  const clearCart = () => {
    dispatch({ type: "clear-cart" })
  }
  //total function
  const totalFunction = () => {
    return cartArray.cart.reduce((total, value, index) => {
      if (index === cartArray.cart.length - 1) {
        return (total + value.price * value.amount).toFixed(2)
      }
      return total + value.price * value.amount
    }, 0)
  }
  //increase and decrease functions
  const increaseAmount = (id) => {
    dispatch({ type: "increase-amount", payload: { id: id } })
  }
  //decrease amount
  const decreaseAmount = (id) => {
    dispatch({ type: "decrease-amount", payload: { id: id } })
  }
  //auto recalculate cart count when cart values change
  useEffect(() => {
    dispatch({ type: "cart-count" })
  }, [cartArray.cart])

  return (
    <AppContext.Provider
      value={{
        ...cartArray,
        removeItem,
        clearCart,
        totalFunction,
        increaseAmount,
        decreaseAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
