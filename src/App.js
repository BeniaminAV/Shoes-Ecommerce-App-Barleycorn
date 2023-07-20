import { Routes, Route } from "react-router-dom"
import Navbar from "./routes/navbar/navbar"
import Home from "./routes/home/home"
import Favorite from "./routes/favorite/favorite"
import Shop from "./routes/shop/shop"
import Authentication from "./routes/auth/authentication"
import User from "./routes/user/user"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<User />} />
        <Route path="/authentication" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
