import SHOP_DATA from './shop.data'

const intialState = {
    collections: SHOP_DATA
}

const shopReducer = (state = intialState, action) => {
    switch (action.type) {
        default:
            return state;

    }
}


export default shopReducer