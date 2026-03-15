import { LoginForm } from "@/components/login-form"
import { loginUser } from "@/store/authSlice"
import type { AppDispatch, RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (token) {
    navigate("/")
  }

  const { user, error, loading } = useSelector((state: RootState) => state.auth)

  const handleLogin = (username: string, password: string) => {
    dispatch(loginUser({ username, password }))
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm
        className="w-100"
        onSubmit={handleLogin}
        error={error}
        loading={loading}
      />
    </div>
  )
}
