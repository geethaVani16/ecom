import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from '../../Redux/cart/cart.selectors'
import CartItem from '../Cart-Items/Cart-Item.Component'
import CustomButton from '../Custom-Button/CustomButton'
import './Cart-Dropdown.styles.scss'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../Redux/cart/cart.action'

function Cart({ cartItems,history,dispatch }) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    ) : <span className='empty-message'>Your Cart is Empty </span>
                }
            </div>
            <CustomButton 
                onClick={ () => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }
                
                }>Go to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(Cart))
