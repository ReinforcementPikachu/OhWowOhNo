import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthenticated, logOut } from '../features/userSlice';

const NavBar = () => {
    const authenticated = useSelector(selectAuthenticated);
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logOut())
    }

    return (
        <div className='navBar'>
            <h1>Oh No? No! Oh, Wow!</h1>
            <div className='navButtonWrapper'>
                { authenticated
                ? <Link to='/'><button onClick = {logOutHandler}>Log Out</button></Link>
                : <Link to="/signup"><button>Sign Up</button></Link>
                }
                { authenticated
                ? <Link to='/yourfridge'><button>Your Fridge</button></Link>
                : <Link to="/"><button>Your Fridge</button></Link>
                }
                {/* <Link to="/yourfridge"><button>Your Fridge</button></Link> */}
            </div>
        </div>  
    )
}

export default NavBar;