import { createAction } from "../../utils/reducer/reducer"
import { FAVORITE_ACTION_TYPES } from "./favorite.types"

const addToFavorite = (favoriteItems, addToProduct) => {
  const existingUser = favoriteItems.find(
    (favoriteItem) => favoriteItem.id === addToProduct.id
  )

  if (existingUser) {
    return favoriteItems.map((favoriteItem) =>
      favoriteItem.id === addToProduct.id
        ? { ...favoriteItem, quantity: favoriteItem.quantity + 1 }
        : favoriteItem
    )
  }

  return [...favoriteItems, { ...addToProduct, quantity: 1 }]
}

const removeFromFavorite = (favoriteItems, removeToProduct) => {
  const existingFavoriteItem = favoriteItems.find(
    (favoriteItem) => favoriteItem.id === removeToProduct.id
  )

  if (existingFavoriteItem.quantity === 1) {
    return favoriteItems.filter(
      (favoriteItem) => favoriteItem.id !== removeToProduct.id
    )
  }

  return favoriteItems.map((favoriteItem) =>
    favoriteItem.id === removeToProduct.id
      ? { ...favoriteItem, quantity: favoriteItem.quantity - 1 }
      : favoriteItem
  )
}

export const addItemToFavorite = (favoriteItems, addToProduct) => {
  const newFavoriteItems = addToFavorite(favoriteItems, addToProduct)

  return createAction(
    FAVORITE_ACTION_TYPES.SET_FAVORITE_ITEMS,
    newFavoriteItems
  )
}

export const removeItemFromFavorite = (favoriteItems, removeToProduct) => {
  const newRemoveFavoriteItem = removeFromFavorite(
    favoriteItems,
    removeToProduct
  )

  return createAction(
    FAVORITE_ACTION_TYPES.SET_FAVORITE_ITEMS,
    newRemoveFavoriteItem
  )
}
