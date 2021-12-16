import CartHeader from "./CartHeader"
import Cart from "./Cart"
import { useGlobalContext } from "./context"
function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return <h1>Loading</h1>
  }
  return (
    <>
      <CartHeader />
      <Cart />
    </>
  )
}

export default App
