import React from 'react'
import CustomButton from '../Custom-Button/CustomButton'
import './Cart-Dropdown.styles.scss'

export default function Cart() {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'/>
                <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}
