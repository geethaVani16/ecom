export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(
        Item => Item.id === cartItemToAdd.id
    )
    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quandity: cartItem.quandity + 1 }
                : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quandity: 1 }]
}



export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToRemove.id
    );
    if (existingCartItem.quandity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemsToRemove.id
            ? { ...cartItem, quandity: cartItem.quandity - 1 } : cartItem)
}