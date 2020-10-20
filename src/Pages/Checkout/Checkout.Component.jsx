import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../Components/Checkout-item/Checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../Redux/cart/cart.selectors'
import './Checkout.styles.scss'

const PageCheckout = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quandity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id}/>)
            }
            <div className='total'>
                <span>Total: Rs {total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(PageCheckout)
