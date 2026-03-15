import { useSelector } from "react-redux"
import { type RootState } from "../store/store"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@base-ui/react/button"

function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (!token) {
    return
  }

  return (
    <div className="flex justify-between border-b p-4">
      <Link to="/">
        <h2 className="text-xl font-bold">E-Commerce</h2>
      </Link>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart ({cartItems.length})</Link>
        <Button
          onClick={() => {
            localStorage.removeItem("token")
            navigate("/login")
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Navbar
