import React, { Component } from 'react'
import FormInput from '../Form-Input/Form-Input.Component';
import '../Sign-In/Sign-In.styles.scss'
import CustomButton from '../Custom-Button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export default class SignIn extends Component {

    state = {
        email: "",
        password: ""
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = this.state
        try {
            const loginWithEmailPass = await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: "", password: "" })
        } catch (error) {
            console.log("error in sign in", error)
        }
    }
    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="email"
                        type='email'
                        value={this.state.email}
                        name="email"
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        label='password'
                        type='password'
                        value={this.state.password}
                        name='password'
                        handleChange={this.handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>



                </form>


            </div>
        )
    }
}
