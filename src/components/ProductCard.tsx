import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProductCard({ product }: any) {
  const dispatch = useDispatch()

  return (
    <div className="rounded border p-4">
      <img src={product.thumbnail} className="h-40 w-full object-cover" />

      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p>${product.price}</p>

      <Button className="mt-2" onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard
