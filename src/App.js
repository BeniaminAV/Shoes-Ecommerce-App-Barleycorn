import { Routes, Route } from "react-router-dom"
import {
  Navbar,
  Home,
  Favorite,
  Cart,
  User,
  Authentication,
  Novelty,
  Collection,
  Sales,
  CustomerService,
  Contact,
} from "./routes/index"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
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
