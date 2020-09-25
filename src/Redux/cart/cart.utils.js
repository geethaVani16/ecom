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