import { Routes, Route } from "react-router-dom"
import {
  Navbar,
  Home,
  Favorite,
  Cart,
  Authentication,
  Novelty,
  Collection,
  Sales,
  CustomerService,
  Contact,
} from "./routes/index"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {
  createDocumentForAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase"
import { setCurrentUser } from "./store/user/user.action"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createDocumentForAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/authentication/*" element={<Authentication />} />
        <Route path="/novelty" element={<Novelty />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/customService" element={<CustomerService />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
