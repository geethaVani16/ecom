import React from 'react'
import './checkout-item.styles.scss'

export default function CheckoutItem({ cartItem: { name, imageUrl, price, quandity } }) {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quandity'>{quandity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>

        </div>
    )
}
