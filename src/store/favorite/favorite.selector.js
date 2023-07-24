import { createSelector } from "reselect"

const selectFavoriteReducer = (state) => state.favorite

export const selectFavoriteProduct = createSelector(
  [selectFavoriteReducer],
  (favorite) => favorite.favoriteItems
)

export const selectCountFavorite = createSelector(
  [selectFavoriteProduct],
  (favoriteItems) =>
  favoriteItems.reduce(
      (total, favoriteItem) => total + favoriteItem.quantity,
      0
    )
)
