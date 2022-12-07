import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logIn, noUser, selectUserId, selectUsername, selectAuthenticated, selectError } from '../features/userSlice';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';

const SignUp = () => {
    const newId = useSelector(selectUserId);
    const newUsername = useSelector(selectUsername);
    const authenticated = useSelector(selectAuthenticated);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    const signUpHandler = (event) => {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const pw = document.getElementById('loginPassword').value;
        // console.log('submitted id===>', username)
        // console.log('submitted pw===>', pw)
        // console.log(newUsername,'state of username before')
        if (username==='chris' && pw ==='chris'){
            dispatch(logIn({id:1, username:username}))
        } else {
            alert('Looks like that username already exists. Please go back to login and try again')
        }
    }
        // console.log(newUsername,'state of username after')
        // console.log(newId, 'state of id after')
        // axios.post('/api/user', {
        //     username: username,
        //     password: pw
        // }).then((res => {
        //     if (res.data){
        //         dispatch(logIn(res.data))
        //     }
        // })).catch((error) => {
        //         dispatch(noUser())
        //     }
        // )
    return (
        <div className= 'login-wrapper'>
            <form onSubmit={signUpHandler}>
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
            <button type='submit'>Sign up here!</button>
            </form>
            <Link to="/login"><button>Back to Login page</button></Link>
            {authenticated && (
                <Navigate to= "/yourfridge" replace = {true}/>
            )}
        </div>
    )
}
export default SignUp;