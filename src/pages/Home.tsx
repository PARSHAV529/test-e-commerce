import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/productSlice"
import { type RootState, type AppDispatch } from "../store/store"
import ProductCard from "../components/ProductCard"

function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const { items } = useSelector((state: RootState) => state.products)

  const [page, setPage] = useState(1)

  const limit = 10

  useEffect(() => {
    const skip = (page - 1) * limit
    dispatch(fetchProducts({ limit, skip }))
  }, [page])

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4">
        {items.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}

export default Home
