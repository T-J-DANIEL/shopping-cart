
import CartItem from "./CartItem"
import { useGlobalContext } from "./context"
const Cart = () => {
const { cartArray, clearCart, totalFunction } = useGlobalContext()
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartArray.map((item, index) => {
          return <CartItem key={index} item={item} />
        })}
      </div>
      <hr />
      <div className="total">
        <h3>Total</h3>
        <h3>£{totalFunction()}</h3>
      </div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart
