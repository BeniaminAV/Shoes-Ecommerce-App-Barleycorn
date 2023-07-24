import { createAction } from "../../utils/reducer/reducer"
import { CART_ACTION_TYPES } from "./cart.types"

const addToCart = (cartItems, addToProduct) => {
  const existingUser = cartItems.find(
    (cartItem) => cartItem.id === addToProduct.id
  )

  if (existingUser) {
    return cartItems.map((cartItem) =>
      cartItem.id === addToProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...addToProduct, quantity: 1 }]
}

const removeCartItem = (cartItems, removeFromCart) => {
  const existingItemCart = cartItems.find(
    (cartItem) => cartItem.id === removeFromCart.id
  )

  if (existingItemCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeFromCart.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === removeFromCart.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

export const addItemToCart = (cartItems, addToProduct) => {
  const newAddItemToCart = addToCart(cartItems, addToProduct)

  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newAddItemToCart)
}

export const removeItemFromCart = (cartItems, removeFromCart) => {
  const newRemoveItemFromCart = removeCartItem(cartItems, removeFromCart)

  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newRemoveItemFromCart)
}
