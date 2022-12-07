import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBar'>
            <h1>Oh No? Oh, Wow!</h1>
            <div className='navButtonWrapper'>
                <Link to="/signup"><button>Sign Up</button></Link>
                <Link to="/yourfridge"><button>Your Fridge</button></Link>
            </div>
        </div>  
    )
}

export default NavBar;