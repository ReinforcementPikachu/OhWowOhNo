import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from '../features/userSlice';

const NavBar = () => {
    const authenticated = useSelector(selectAuthenticated);

    return (
        <div className='navBar'>
            <h1>Oh No? Oh, Wow!</h1>
            <div className='navButtonWrapper'>
                { authenticated
                ? <Link to='/login'><button>Log Out</button></Link>
                : <Link to="/signup"><button>Sign Up</button></Link>
                }
                <Link to="/yourfridge"><button>Your Fridge</button></Link>
            </div>
        </div>  
    )
}

export default NavBar;