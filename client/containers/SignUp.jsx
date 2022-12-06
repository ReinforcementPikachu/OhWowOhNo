import React from 'react'
import ReactDOM from 'react-dom'

const SignUp = () => {
    return (
        <div className= 'login-wrapper'>
            <h1>Please Sign Up Here</h1>
            <input
                className= 'username'
                name = 'username'
                type = 'text'
                placeholder = 'Username'
                id = 'loginUsername'>
            </input>
            <input
                className= 'password'
                name = 'password'
                type = 'text'
                placeholder = 'Password'
                id = 'loginPassword'>
            </input>
        </div>
    )
}

export default SignUp;