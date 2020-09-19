import { CartActionTypes } from "./cart.types"
const IntialState = {
    hidden: true
}





const cartReducer = (state = IntialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGELE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default :
        return state
    }

}


export default cartReducer