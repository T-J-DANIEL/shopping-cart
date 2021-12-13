
import CartItem from "./CartItem"
const Cart = () => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
      </div>
      <hr/>
      <div className="total">
          <h3>Total</h3>
          <h3>£3999.99</h3>
      </div>
      <button>Clear Cart</button>
    </div>
  )
}

export default Cart
