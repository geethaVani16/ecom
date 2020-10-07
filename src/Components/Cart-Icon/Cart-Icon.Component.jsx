import React from 'react'
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../Images/shopping-bag.svg'
import { toggleCartHidden } from '../../Redux/cart/cart.action';
import { selectCartItemsCount } from '../../Redux/cart/cart.selectors';

import './Cart-Icon.styles.scss';


function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})




export default connect(mapStateToProps, mapDispatchToProps)(CartIcon) 
