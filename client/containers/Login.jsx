import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../features/userSlice';

const Login = () => {

    const loginHandler = () => {
        const id = document.getElementById('loginUsername').value;
        const pw = document.getElementById('loginPassword').value;
        console.log('id===>', id)
        console.log('pw===>', pw)

        axios.post('/api/user', {
            username: id,
            password: pw
        }).then((data => {
            if (data){

            }
        }))
    }
    return (
        <div className= 'login-wrapper'>
            <h1>Please Log In</h1>
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
};

export default Login;