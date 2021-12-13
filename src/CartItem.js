const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
          <img
            src="https://media.4rgos.it/i/Argos/9442140_R_Z002A?w=750&h=440&qlt=70"
            alt="phone"
            
          />
      </div>
      <div className="cart-item-text">
        <h3>Cart Item</h3>
        <p>£499.99</p>
        <button>remove</button>
      </div>
      <div className="cart-item-amount">
        <button>^</button>
        <p>1</p>
        <button>&#709;</button>
      </div>
    </div>
  )
}

export default CartItem
