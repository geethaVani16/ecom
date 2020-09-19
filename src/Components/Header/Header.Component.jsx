import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as ImageLogo } from '../../Images/crown.svg'
import '../Header/Header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../Cart-Icon/Cart-Icon.Component'
import Cart from '../Cart-Dropdown/Cart-Dropdown.Component'

function HeaderComponent({ currentUser, hidden }) {
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
                <CartIcon />
            </div>
            {hidden ? null : <Cart />
            }
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(HeaderComponent)
