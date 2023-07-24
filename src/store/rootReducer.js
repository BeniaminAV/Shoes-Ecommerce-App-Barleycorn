import { combineReducers } from "redux"
import { userReducer } from "./user/user.reducer"
import { favoriteReducer } from "./favorite/favorite.reducer"
import { cartReducer } from "./cart/cart.reducer"

export const rootReducers = combineReducers({
  user: userReducer,
  favorite: favoriteReducer,
  cart: cartReducer,
})
