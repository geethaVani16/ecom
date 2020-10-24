import React from 'react'
import stripeCheckout from 'react-stripe-checkout'

export default function stripeCheckoutButton({ price }) {
    const priceFromStripe
    return (
        <div>
            <stripeCheckout
                label='Pay Now'
                name='crwn clothing ltd'
                billingAddress
                shippingAddress 
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is Rs ${price}`}
                amount={priceFromStripe}
                panelLabel='pay Now'
                token={}
            />
        </div>
    )
}
