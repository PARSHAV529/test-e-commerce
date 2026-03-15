import { useSelector } from "react-redux"
import { type RootState } from "../store/store"
import { Link } from "react-router-dom"

function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <div className="flex justify-between border-b p-4">
      <Link to="/">
        <h2 className="text-xl font-bold">E-Commerce</h2>
      </Link>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart ({cartItems.length})</Link>
      </div>
    </div>
  )
}

export default Navbar
