import React from 'react'
import './Cart-Item.styles.scss'

function CartItem({ item: { imageUrl, price, name, quandity } }) {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{`${quandity}x${price}`}</span>
            </div>
        </div>
    )
}

export default CartItem
