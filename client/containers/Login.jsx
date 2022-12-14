import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logIn, noUser, selectUserId, selectUsername, selectAuthenticated, selectError } from '../features/userSlice';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const Login = () => {
    const newId = useSelector(selectUserId);
    const newUsername = useSelector(selectUsername);
    const authenticated = useSelector(selectAuthenticated);
    const error = useSelector(selectError);
    const dispatch = useDispatch();


    const loginHandler = (event) => {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const pw = document.getElementById('loginPassword').value;
        console.log('submitted id===>', username)
        console.log('submitted pw===>', pw)
        // console.log(newUsername,'state of username before')
        // if (username==='chris' && pw ==='chris'){
        //     dispatch(logIn({id:1, username:username}))
        // } else {
        //     alert('Oh no, your username or log in is not correct')
        //     // dispatch(noUser())
        // }
        // console.log(newUsername,'state of username after')
        // console.log(newId, 'state of id after')
        axios.post('/api/user/login', {
            username: username,
            password: pw
        }).then((res => {
            if (res.data){
                console.log(res.data, 'res.data')
                dispatch(logIn(res.data))
            }
        })).catch((error) => {
                alert('That username or password is incorrect or does not exist, please try again or go to our signup page')
                console.log(username, 'username')
                console.log(password, 'password')
            }
        )
    }
    // function togglePassword() {
    //     var x = document.getElementById("loginPassword");
    //     if (x.type === "password") {
    //       x.type = "text";
    //     } else {
    //       x.type = "password";
    //     }
    //   }
    return (
        <div className= 'login-wrapper'>
            <form>
            <h1>Please Log In</h1>
                <input
                    className= 'username'
                    name = 'username'
                    type = 'text'
                    placeholder = 'Username'
                    id = 'loginUsername'>
                </input>
                <br></br>
                <input
                    className= 'password'
                    name = 'password'
                    type = 'password'
                    placeholder = 'Password'
                    id = 'loginPassword'>
                </input>
                {/* <br></br>
                <button className = 'toggle' onClick={togglePassword}>Show Password</button> */}
                <br></br>
            </form>
            <button onClick={loginHandler}>Log In</button>
            {authenticated && (
                <Navigate to= "/yourfridge" replace = {true}/>
            )} {error && (
                <Navigate to="/login" replace={true} />
            )}
        </div>
    )
};

export default Login;