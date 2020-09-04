import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ImageLogo } from '../../Images/crown.svg'
import '../Header/Header.styles.scss'
import { auth } from '../../firebase/firebase.utils'

export default function HeaderComponent({ currentUser }) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <ImageLogo src={ImageLogo} className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )}
            </div>

        </div>
    )
}
