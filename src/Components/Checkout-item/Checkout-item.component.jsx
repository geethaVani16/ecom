import React from 'react'
import { connect } from 'react-redux'
import './checkout-item.styles.scss'
import { addItem, clearItemFromCart, reduceItemFromCart } from '../../Redux/cart/cart.action'

function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
    const { name, imageUrl, price, quandity } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quandity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quandity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div
                className='remove-button'
                onClick={() => clearItem(cartItem)}
            >&#10005;</div>

        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(reduceItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem) 