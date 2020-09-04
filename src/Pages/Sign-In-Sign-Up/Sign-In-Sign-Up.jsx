import React from 'react'
import SignIn from '../../Components/Sign-In/Sign-In.component'
import SignUp from '../../Components/sign-up/sign-up.component'
import '../Sign-In-Sign-Up/Sign-In-Sign-Up.styles.scss'

export default function SignInSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}
