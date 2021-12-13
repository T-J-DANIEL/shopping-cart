import { useGlobalContext } from "./context"

const CartItem = ({item}) => {
    const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext()
    const {id,title, price, img, amount } = item
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt="phone" />
      </div>
      <div className="cart-item-text">
        <h3>{title}</h3>
        <p>£{price}</p>
        <button
          onClick={() => {
            removeItem(id)
          }}
        >
          remove
        </button>
      </div>
      <div className="cart-item-amount">
        <button
          onClick={() => {
            increaseAmount(id)
          }}
        >
          ^
        </button>
        <p>{amount>0?amount:removeItem(id)}</p>
        <button
          onClick={() => {
            decreaseAmount(id)
          }}
        >
          &#709;
        </button>
      </div>
    </div>
  )
}

export default CartItem
