import React from 'react'
import FormInput from '../Form-Input/Form-Input.Component';
import CustomButton from '../Custom-Button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import '../sign-up/sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert('password dont match')
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.error(error)
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I dont have account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput
                        type='text'
                        name="displayName"
                        label='Display Name'
                        value={displayName}
                        required
                        onChange={this.handleChange}

                    />
                    <FormInput
                        type='email'
                        name="email"
                        label='Email'
                        value={email}
                        required
                        onChange={this.handleChange}

                    />
                    <FormInput
                        type='password'
                        name="password"
                        label='password'
                        value={password}
                        required
                        onChange={this.handleChange}

                    />
                    <FormInput
                        type='password'
                        name="confirmPassword"
                        label='confirm Password'
                        value={confirmPassword}
                        required
                        onChange={this.handleChange}
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }

}


export default SignUp