import React, { useContext, useState, useEffect,useReducer } from "react"
import data from "./data"
import reducer from "./reducer"
const AppContext = React.createContext()

const initialState = {
  loading:false,
  cart: data,
  total:0,
  amount:0
}

const useGlobalContext = () => {
  return useContext(AppContext)
}
// url = "https://course-api.com/react-useReducer-cart-project"
const AppContextProvider = ({ children }) => {
   const [cartArray, dispatch] = useReducer(reducer, initialState)
  //cart items array
  // const [cartArray, setCartArray] = useState(data)

  //   fetch data and assign to variable
  //TODO make it async so it works and add loading effect
  // useEffect(()=>{
  //     fetch("https://course-api.com/react-useReducer-cart-project").then(response=>response.json()).then(data=>{setCartArray(data); console.log(data)}).catch(error=>console.log(error))
  // },[])

  //remove item function
  const removeItem = (id) => {
    dispatch({type:"remove-item",payload:{id:id}})
  }
  //clear cart function
  const clearCart = () => {
    dispatch({type:"clear-cart"})
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
    dispatch({ type: "increase-amount", payload: { id:id } })
  }
  //decrease amount
  const decreaseAmount = (id) => {
    dispatch({type:"decrease-amount",payload:{id:id}})
  }
  //cart items number function
  // const cartCount = () => {
  //   dispatch({type:"cart-count"})
  // }
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
        decreaseAmount,
        // cartCount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, useGlobalContext }
