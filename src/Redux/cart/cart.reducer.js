import { CartActionTypes } from "./cart.types"
const IntialState = {
    hidden: true,
    cartItems:[]
}


const cartReducer = (state = IntialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGELE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:{
            return {
                ...state,
                cartItems:[...state.cartItems,action.payload]
            }
        }
        default :
        return state
    }

}


export default cartReducer