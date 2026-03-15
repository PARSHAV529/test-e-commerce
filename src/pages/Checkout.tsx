import { useSelector } from "react-redux"
import { type RootState } from "../store/store"

function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl">Checkout</h2>

      {cartItems.length === 0 && <p>No items in cart</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="mb-2 flex justify-between">
          <span>{item.title}</span>
          <span>${item.price}</span>
        </div>
      ))}

      <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
    </div>
  )
}

export default Checkout
