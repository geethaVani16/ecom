import React, { Component } from 'react'
import FormInput from '../Form-Input/Form-Input.Component';
import '../Sign-In/Sign-In.styles.scss'
import CustomButton from '../Custom-Button/CustomButton';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ email: "", password: "" })
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
                    <CustomButton type='submit'>Sign in</CustomButton>


                </form>


            </div>
        )
    }
}
