import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuandity, cartItem) =>
            accumalatedQuandity + cartItem.quandity,
        0
    )
);


export const selectCartTotal =createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuandity, cartItem) =>
            accumalatedQuandity + cartItem.quandity*cartItem.price,
        0
    )
)