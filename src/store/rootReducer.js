import { combineReducers } from "redux"
import { userReducer } from "./user/user.reducer"
import { favoriteReducer } from "./favorite/favorite.reducer"

export const rootReducers = combineReducers({
  user: userReducer,
  favorite: favoriteReducer,
})
