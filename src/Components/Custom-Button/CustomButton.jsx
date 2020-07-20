import React from 'react'
import '../Custom-Button/CustomButtom.styles.scss'

export default function CustomButton({ children, ...otherProps }) {
    return (
        <button
            className='custom-button' {...otherProps}
        >
            {children}
        </button>
    )
}
