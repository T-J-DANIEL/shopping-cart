import { useGlobalContext } from "./context"
const CartHeader = () => {
    const { amount } = useGlobalContext()
  return (
    <div className="cart-header">
      <div className="cart-header-center">
        <h2>Shopping Cart</h2>
        <div className="cart-icon-container">
          <div className="cart-icon">Icon</div>
          <div className="cart-count">{amount}</div>
        </div>
      </div>
    </div>
  )
}

export default CartHeader
