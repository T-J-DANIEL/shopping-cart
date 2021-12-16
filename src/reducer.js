const reducer = (state, action) => {
  switch (action.type) {
    case "remove-item":
      return {...state,cart:state.cart.filter((item) => item.id !== action.payload.id)}
    case "clear-cart":
      return {...state,cart:[]}
    case "increase-amount":
      return {...state,cart:state.cart.map((item) => {
        if (action.payload.id === item.id) {
          return { ...item, amount: item.amount + 1 }
        } else return item
      })}
    case "decrease-amount":
      return {...state, cart : state.cart.map((item) => {
        if (action.payload.id === item.id) {
            // TODO AMOUNT 0 REMOVE ITEM
          return { ...item, amount: item.amount - 1  }
        } else return item
      })}
    case "cart-count":
      return {...state,amount:state.cart.reduce((total, item) => total + item.amount, 0)}
    default:
      return state
  }
}
export default reducer
