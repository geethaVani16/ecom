import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../Cart-Items/Cart-Item.Component'
import CustomButton from '../Custom-Button/CustomButton'
import './Cart-Dropdown.styles.scss'

function Cart({ cartItems }) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(Cart)
