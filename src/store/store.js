import { compose, applyMiddleware, createStore } from "redux"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import logger from "redux-logger"
import { rootReducers } from "./rootReducer"

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
)

const composedEnhancers = compose(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)
